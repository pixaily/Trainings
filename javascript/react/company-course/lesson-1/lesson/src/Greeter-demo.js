import React from 'react';
import GreeterBox from './GreeterBox';

class Greeter extends React.Component {
    // Every time when state is changed render method is triggered
    state = {
        gold: 0
    }

    timeout = null;

    // Error because of context
    // giveGold() {
        // this.setState({
            // gold: this.state.gold + 1;
        // });
    // }

    // 1 Variant to fix the error of the context
    // constructor() {
    //     super()
    //     this.giveGold = this.giveGold.bind(this);
    // }

    // 2 Variant to fix the error of the context - arrow function
    giveGold = () => {
        this.setState({
            gold: this.state.gold + 1
        });
    }

    // If the component should be updated or use PureComponent
    shouldComponentUpdate(prevProps) {
        return this.props.name !== prevProps.name;
    }

    // When component Mounted in the page
    componentDidMount() {
        console.log("Componend mounted!", this.props.name);


        // Timeout should be unmounted
        const timeout = setTimeout(() => {
            console.log('Hello!', this.props.name)

            this.setState({
                gold: this.state.gold + 1
            });
        }, 10000);

        // Use componentDidMount to do side effects
        document.title = this.props.name;
    }

    // When component is Updated
    componentDidUpdate() {
        console.log("Componend updated!", this.props.name)
    }

    // When component is Removed fomr the page
    componentWillUnmount() {
        console.log("Componend unmounted!", this.props.name);

        // Timeout should be unmounted
        clearTimeout(this.timeout);
    }

    // Every time when state is changed render method is triggered
    render() {
        // Don't use render to do side effects
        // document.title = this.props.name;

        // const name = this.props.name;
        const { name } = this.props; // ES6 feature
        const gold = this.state.gold;

        return (
            <GreeterBox name={name} gold={gold} onGiveGold={this.giveGold}></GreeterBox>
        )
    }
}