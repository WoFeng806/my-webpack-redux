import React from 'react'
import './Component.less'
import { Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import * as action from './modules/action'

class Hello extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        
    }

    changeHeader(){
        const {dispatch} = this.props
        dispatch(action.changeHeader())
    }

    render() {
        const {match,title} = this.props
        return <div className="container">
            <h1 className="title">{title}</h1>
            <div className="area">晃晃悠悠的一朝一暮</div> <br/>
            <Link to="/about">About</Link> <br/>
            <Link to={`${match.url}home`}>Home</Link>
            <br /><br />
            <div onClick={()=>{this.changeHeader()}}>点我啊啊啊</div>
        </div>
    }
}

function mapStateToProps(state) {
    return state.hello
}

Hello = connect(mapStateToProps)(Hello);

export default Hello
