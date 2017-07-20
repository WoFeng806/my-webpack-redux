import React from 'react'
import './Component.less'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Message from './message.js';

export default class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selsectedNum:0,
            view:5,
            total:9
        }
    }

    componentDidMount(){

    }

    render() {
        const {match} = this.props
        console.log(match)
        let name = 5
        return <div className="container">
            <h1 className="title">Home</h1>
            <div className="area">晃晃悠悠的一朝一暮</div>
            <Link to="/">Hello</Link><br />
            <Link to={`${match.url}/${name}`}>Message</Link>
        </div>
    }
}
