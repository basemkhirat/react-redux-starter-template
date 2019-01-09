import React from 'react';

class Master extends React.Component {

    render() {
        return (
            <div class="container">
                {this.props.children}
            </div>

        );
    }

}

export default Master;