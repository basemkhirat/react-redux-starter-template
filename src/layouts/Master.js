import React from 'react';

class Master extends React.Component {

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>

        );
    }

}

export default Master;