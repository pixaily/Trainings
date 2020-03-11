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

        fetch("https://randomuser.me/api/")
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

    render () {
        return (
            <>
                <div style={{ margin: '20px 0' }}>
                    <button onClick={this.toggleJohn}>Toggle John</button>
                </div>

                <Greeter name="Ivan"/>
                <Greeter name="John"/>
                <Greeter name="Maria"/>
            </>
        )
    }
}


// Home work
// 1. Abort 