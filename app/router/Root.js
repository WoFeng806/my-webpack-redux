import React, { Component, PropTypes } from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import routes from './routers';
import { Provider } from 'react-redux';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>{routes}</BrowserRouter>   
            </Provider>  
        );
    }
}

