import React from 'react'
import './Component.less'
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class About extends React.Component {
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
        const {selsectedNum,view,total} = this.state
        return <div className="container">
            <h1 className="title">About</h1>
            <div className="area">晃晃悠悠的一朝一暮</div>
            <Link to="/">Hello</Link>
        </div>
    }
}
