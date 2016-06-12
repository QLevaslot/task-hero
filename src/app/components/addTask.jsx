import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let input = '';
    return (
      <div className="welcome-add-task">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.dispatch(addTask(input.value));
            input.value = '';
          }}
        >
          <div className="mdl-textfield mdl-js-textfield welcome-add-task-input">
            <input
              className="mdl-textfield__input"
              type="text"
              autoComplete="off"
              id="input1"
              ref={node => {
                input = node;
              }}
            />
            <label className="mdl-textfield__label" htmlFor="input1">I want to...</label>
          </div>
          <button
            type="submit"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          >
            +
          </button>
        </form>
      </div>
    );
  }
}

AddTask.propTypes = {
  dispatch: PropTypes.func.isRequired
};


const AddTaskC = connect()(AddTask);
export default AddTaskC;
