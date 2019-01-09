import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import Master from '~/layouts/Master';

class Home extends React.Component {

    componentDidMount() {
        this.props.change_message("Hello React!");
    }

    render() {
        return (
            <Master>
                <h1>{this.props.message}</h1>
                <Link to="/page">Click me</Link>
            </Master>
        )
    }
}

const mapStateToProps = state => {

    return {
        message: state.message
    }

};

const mapDispatchToProps = dispatch => {

    return {
        change_message(message) {
            dispatch({type: "CHANGE_MESSAGE", message: message})
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);