import React, {Component} from 'react';
import Search from '../Search';
import { withRouter} from 'react-router-dom';

class Header extends Component {
    render = () => {
        console.log('this.props', this.props);
        return <div className="header">
            <span className="header-text" >
            codename_louxis
            </span>
            <Search />
            
        </div>
    }
}

export default withRouter(Header);