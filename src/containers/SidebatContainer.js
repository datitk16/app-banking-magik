import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import {connect} from 'react-redux'

class SidebatContainer extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
            </div>
        );
    }
}

export default SidebatContainer;