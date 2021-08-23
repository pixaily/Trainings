import { Component } from 'react';  
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(el => el.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <input type="search" placeholder="Search monsters" onChange={event => this.setState({ searchField: event.target.value })} />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App;
