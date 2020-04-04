import React, {Component} from 'react';
import Header from '../../components/Header';

export default class Wrapper extends Component {
    render = () => {
        const {children} = this.props;
        return <div>
            <Header />
            <div className="children-container">
                {children}
            </div>

        </div>
    }
}