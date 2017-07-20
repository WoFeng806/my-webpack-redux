import React from 'react'
import './Component.less'
import { BrowserRouter, Route } from 'react-router-dom';

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
        console.log(location.pathname)
        console.log(location.hash)
        return <div className="container">
            <h1 className="title">New Home</h1>
            <div className="area">晃晃悠悠的一朝一暮</div>
            <h3>{match.params.id}</h3>
        </div>
    }
}
