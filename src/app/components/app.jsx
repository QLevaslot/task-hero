import React from 'react';
import AddTask from './addTask.jsx';
import VisibleTaskList from './visibleTaskList.jsx';
import Filter from './filter.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="topbar">
        </div>
        <div className="welcome">
          <div className="title" onClick={e => this.handleClick(e)}>
            Task Hero
          </div>
          <div className="subtitle">
            Get things done, one day at a time!
          </div>
          <AddTask />
        </div>
        <div className="content">
          <Filter />
          <VisibleTaskList />
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
