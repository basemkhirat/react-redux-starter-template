import React from 'react';
import {connect} from 'react-redux';
import Master from '~/layouts/Master';

class App extends React.Component {

    render() {
        return (
            <Master>
                <h1>{this.props.message}</h1>
            </Master>
        );
    }

}

const mapStateToProps = (state) => {

    return {
        message: state.message
    }

};

const mapDispatchToProps = (dispatch) => {

    return {
        change_message() {
            dispatch({type: "CHANGE_MESSAGE"})
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);

