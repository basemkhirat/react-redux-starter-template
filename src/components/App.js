import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Master from '~/layouts/Master';
import Home from '~/components/Home';
import Page from '~/components/Page';

class App extends React.Component {

    render() {
        return (

            <BrowserRouter>

                <Master>
                    <Route path="/" exact component={Home}/>
                    <Route path="/page" component={Page}/>
                </Master>

            </BrowserRouter>
        );
    }

}

export default App;

