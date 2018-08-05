import React, { Component } from 'react';
import * as firebase from "firebase";
import { DB_CONFIG } from './config/firebase';
import './assets/css/App.scss';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import Home from "./pages/Home";
import Add from "./pages/Add";
import { Route, Switch, Link } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(DB_CONFIG);
    this.state = {
      todos: []
    }
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
  }

  handleTodoAdd(value) {
    console.log('HandleTodo ADD kısmı', value)
    // let newTodo = {
    //   id: this.state.todos.length + 1,
    //   content: value
    // }
    // this.setState({ todos: this.state.todos.concat(newTodo) });
  }
  componentDidMount() {
    this.firebaseRef = firebase.database().ref('todos');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      this.setState({ todos: snap.val() });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="todoHeader">Header</Header>
          <Layout>
            <Sider className="todoSlider">
              <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"  >
                <Menu.Item key="1"> <Link to="/">
                  <Icon type="pie-chart" />
                  <span className="menuColor">Todo List</span>
                </Link></Menu.Item>
                <Menu.Item key="2"><Link to="/Add">
                  <Icon type="desktop" />
                  <span className="menuColor">Todo Add</span></Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content className="todoBody">
              <Switch>
                <Route exact path='/' render={(props) => (
                  <Home {...this.state} {...props}  />
                )} />
                <Route exact path='/Add' render={(props) => (
                  <Add {...this.state} {...props}  onTodoAdd={this.handleTodoAdd}  />
                )} />
               


              </Switch>
            </Content>
          </Layout>
          <Footer className="todoFooter">Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
