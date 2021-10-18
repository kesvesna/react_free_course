import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import './App.css';
import Quiz from './containers/Quiz/Quiz'


class App extends Component {
  render(){
    return (
        <Layout>
            <Quiz>
            </Quiz>
        </Layout>
    );
  }
}

export default App;
