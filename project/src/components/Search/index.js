import React, {Component} from 'react';

export default class Search extends Component {
    render = () => {
        return (<div className="searchBox">
        <input className="searchInput"type="text" name="" placeholder="Search"/>
        <button className="searchButton" href="#">
            <i className="material-icons" />
        </button>
    </div>);
    }
}