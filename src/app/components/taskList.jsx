import React, { PropTypes } from 'react';
import Task from './task.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // drag values
    this.targetBCR = null;
    this.target = null;
    this.startX = 0;
    this.currentX = 0;
    this.screenX = 0;
    this.targetX = 0;
    requestAnimationFrame((e) => { this.onStart(e); });
  }

  componentDidMount() {
    this.addEventListeners();
  }

  onStart(evt) {
    if (this.target) {
      return;
    }
    console.log('fooo', evt.target);
    if (!evt.target.classList.contains('card-title')) {
      return;
    }
    console.log('bar');
    this.target = evt.target;
    this.targetBCR = this.target.getBoundingClientRect();

    this.startX = evt.pageX || evt.touches[0].pageX;
    this.currentX = this.startX;

    this.draggingCard = true;
    this.target.style.willChange = 'transform'; // create new layer only if needed

    evt.preventDefault();
  }

  onMove(evt) {
    if (!this.target) {
      return;
    }
    console.log('onMove');
    this.currentX = evt.pageX || evt.touches[0].pageX;
  }

  onEnd() {
    if (!this.target) {
      return;
    }
    console.log('onEnd');
    this.targetX = 0;
    const screenX = this.currentX - this.startX;
    const threshold = this.targetBCR.width * 0.35;
    if (Math.abs(screenX) > threshold) {
      this.targetX = (screenX > 0) ?
        this.targetBCR.width :
        -this.targetBCR.width;
    }

    this.draggingCard = false;
  }

  update() {
    requestAnimationFrame(this.update);

    if (!this.target) {
      return;
    }

    if (this.draggingCard) {
      this.screenX = this.currentX - this.startX;
    } else {
      this.screenX += (this.targetX - this.screenX) / 4;
    }

    const normalizedDragDistance =
      (Math.abs(this.screenX) / this.targetBCR.width);
    const opacity = 1 - Math.pow(normalizedDragDistance, 3);

    this.target.style.transform = `translateX(${this.screenX}px)`;
    this.target.style.opacity = opacity;

    // User has finished dragging.
    if (this.draggingCard) {
      return;
    }

    const isNearlyAtStart = (Math.abs(this.screenX) < 0.1);
    const isNearlyInvisible = (opacity < 0.01);

    // If the card is nearly gone.
    if (isNearlyInvisible) {
      // Bail if there's no target or it's not attached to a parent anymore.
      if (!this.target || !this.target.parentNode) {
        return;
      }

      this.target.parentNode.removeChild(this.target);

      const targetIndex = this.cards.indexOf(this.target);
      this.cards.splice(targetIndex, 1);

      // Slide all the other cards.
      this.animateOtherCardsIntoPosition(targetIndex);
    } else if (isNearlyAtStart) {
      this.resetTarget();
    }
  }

  animateOtherCardsIntoPosition(startIndex) {
    // If removed card was the last one, there is nothing to animate.
    // Remove the target.
    if (startIndex === this.cards.length) {
      this.resetTarget();
      return;
    }

    const onAnimationComplete = evt => {
      const card = evt.target;
      card.removeEventListener('transitionend', onAnimationComplete);
      card.style.transition = '';
      card.style.transform = '';

      this.resetTarget();
    };

    // Set up all the card animations.
    for (let i = startIndex; i < this.cards.length; i++) {
      const card = this.cards[i];

      // Move the card down then slide it up.
      card.style.transform = `translateY(${this.targetBCR.height + 20}px)`;
      card.addEventListener('transitionend', onAnimationComplete);
    }


    // Now init them.
    requestAnimationFrame(() => {
      for (let i = startIndex; i < this.cards.length; i++) {
        const card = this.cards[i];

        // Move the card down then slide it up, with delay according to "distance"
        card.style.transition = `transform 150ms cubic-bezier(0,0,0.31,1) ${i * 50}ms`;
        card.style.transform = '';
      }
    });
  }

  resetTarget() {
    if (!this.target) {
      return;
    }

    this.target.style.willChange = 'initial';
    this.target.style.transform = 'none';
    this.target = null;
  }

  addEventListeners() {
    document.addEventListener('touchstart', this.onStart);
    document.addEventListener('touchmove', this.onMove);
    document.addEventListener('touchend', this.onEnd);

    document.addEventListener('mousedown', this.onStart);
    document.addEventListener('mousemove', this.onMove);
    document.addEventListener('mouseup', this.onEnd);
  }

  render() {
    return (
      <div
        className="content-cards"
        onMouseDown={(e) => { this.onStart(e); }}
        onMouseMove={(e) => { this.onMove(e); }}
        onMouseUp={(e) => { this.onEnd(e); }}
      >
        {this.props.tasks.map(task =>
          <Task
            key={task.id}
            {...task}
            onClick={() => this.props.onTaskClick(task.id)}
          />
        )}
      </div>);
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired
};

export default TaskList;
