import React from 'react';
import FilterLink from './filterLink.jsx';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<p>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Done
      </FilterLink>
    </p>);
  }
}

export default Filter;
