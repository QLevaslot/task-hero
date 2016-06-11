var ReactDOM = require("react-dom");
var React = require('react');

module.exports = class app extends React.Component {

    constructor() {
        super();
    }

    handleClick() {
        console.log("click", this);
    }

    render() {
        return <div>
            <div className="topbar">
            </div>
            <div className="welcome">
                <div className="title" onClick={e => this.handleClick(e)}>
                    Task Hero
                </div>
                <div className="subtitle">
                    Get things done, one day at a time!
                </div>
                <div>
                    <input className="input"
                           placeholder="I want to start..."
                           autocomplete="off"/>
                </div>
            </div>
            <div className="content">
                <div className="content-title">

                </div>
                <div className="content-cards">
                    <div className="card">
                        <div className="card-title" data-status="done">Commit v1</div>
                        <div className="card-main">
                            <button className="card-done">Done</button>
                            <button className="card-dismiss">Dismiss</button>
                        </div>
                        <div className="card-bottom">
                            <div className="card-due-date">30/06/16</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="done">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="skipped">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="missed">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="todo">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="todo">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="todo">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="todo">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                    <div className="card">
                        <div className="card-title" data-status="todo">Commit v1</div>
                        <div className="card-due-date">30/06/16</div>
                    </div>
                </div>
            </div>
        </div>;
    }
};
