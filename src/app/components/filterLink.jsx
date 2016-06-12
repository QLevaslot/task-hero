import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';


class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
