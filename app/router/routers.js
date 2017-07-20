import React,{Component} from 'react';
import Hello from '../Hello/component.js';
import About from '../about.js';
import Home from '../home.js';
import Message from '../message.js';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';

export default (
	<div>
        <Route exact path="/" component={Hello} />
        <Route path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/:id" component={Message}/>
    </div>
);