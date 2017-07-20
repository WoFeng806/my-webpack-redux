import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Root from './router/Root';
import configureStore from './store/configureStore';

const store = configureStore();

// main();

// function main() {
//     ReactDOM.render(<Hello />, document.getElementById('app'));
// }

// class App extends Component{

// 	render(){
// 		return <BrowserRouter>
//             <div>
//                 <Route exact path="/" component={Hello} />
//                 <Route path="/about" component={About} />
//                 <Route exact path="/home" component={Home} />
//                 <Route path="/home/:id" component={Message}/>
//             </div>
//         </BrowserRouter>
// 	}
// }

ReactDOM.render(<Root store={store}/>, document.getElementById('app'))