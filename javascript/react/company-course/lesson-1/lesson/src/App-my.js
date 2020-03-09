import React from 'react';
import './App.css';
import Greeter from './Greeter';

class App extends React.Component {
    state = {
        displayJohn: true,
        users: [],
        isLoading: false,
    }

    toggleJohn = () => {
        this.setState({
            displayJohn: !this.state.displayJohn
        })
    }

    componentDidMount() {
        this.requestUsers()
    }

    requestUsers() {
        this.setState({
            isLoading: true
        });
        // Homework to AbortController for
        fetch("https://randomuser.me/api/?results=3")
            .then(res=> res.json())
            .ten(data=> {
                console.log(data);

                this.setState({
                    isLoading: false,
                    users: data.results.map(person => ({
                        name: person.name.first
                    }))
                })
            })
    }

    changeFirstUser = () => {
        // Always use setState to update states
        this.state.users[0].name = 'Hooray'

        this.setState({
            users: this.users.name((user, index) => {
                if(index === 0) {
                    return {
                        ...user,
                        name: 'Hooray'
                    }
                }
                return user;
            })
        })
    }

    render () {
        return (
            <>
                <div style={{ margin: '20px 0' }}>
                    <button onClick={this.toggleJohn}>Toggle John</button>
                </div>

                <Greeter name="Ivan"/>
                <Greeter name="John"/>
                <Greeter name="Maria"/>


                <button style={{ margin: '20px 0' }} onClick={this.requestUsers}>Get Users</button>
                <button style={{ margin: '20px 0' }} onClick={this.changeFirstUser}>Change the first user</button>
                {
                // isLoading 
                this.state.users.length === 0
                    ? <div>Loading, please wait ...</div> 
                    : this.state.users.map(user=> (
                        <Greeter key={user.name} name={user.name} />
                      ))
                }
            </>
        )
    }
}

export default App;