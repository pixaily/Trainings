import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList'

class App extends React.Component {
    // weatherURL = "api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={your api key}";
    // weatherURL = "api.openweathermap.org/data/2.5/forecast/daily?id=726050&cnt=16&appid=";
    quotesURL = "https://randomuser.me/api/?results=5";
    abortController = new AbortController();

    state = {
        users: [],
        isLoading: false,
        isLoaded: false
    }

    requestUsers = () => {
        this.setState({
            isLoading: true
        });
        fetch(this.quotesURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    isLoading: false,
                    isLoaded: true,
                    users: data.results.map(person => ({
                    name: person.name.first
                    }))
                })
            })
    }
    resetUsers = () => {
        this.abortController.abort();
        this.setState({
            isLoaded: false
        })
    }


    render() {
        return (
            <div className="App">

                <button 
                    className="request-users" 
                    onClick={this.requestUsers}
                    disabled={this.state.isLoaded ? "disabled" : ""}
                >
                    Request users
                </button>
                <button 
                    className="reset-users" 
                    onClick={this.resetUsers}
                    disabled={this.state.isLoaded ? "" : "disabled"}
                >
                    Reset users
                </button>
                {
                    this.state.users.length === 0
                    ? <div>No users availabe.</div>
                    : this.state.users.map(user => (
                        <UserList 
                            name={user.name} 
                            avatar={user.picture} 
                            email={user.email} 
                        />
                    ))
                }
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
