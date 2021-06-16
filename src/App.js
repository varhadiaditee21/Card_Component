import React , {Component} from 'react';
import './App.css';
import {Card} from '../src/component/card/card';
import { CardList } from './component/cardList/card-list';
import {SearchBox} from './component/SearchBox/SearchBox';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className='App'>
        <h1>Welcome</h1>

      <SearchBox placeholder='Search Monsters....' handleChange={e => this.setState({searchField : e.target.value})}/>

      <CardList monsters = {filteredMonsters}/>
              
      </div>
    )
  }
}


export default App;
