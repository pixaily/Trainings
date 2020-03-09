import React from 'react';

export default class GreeterBox extends React.PureComponent {
    displayGoldMessage = () => {
        return this.props.gold > 5 
            ? "You are rich person" 
            : "You just didn't get enough gold yet!"
    }
    render() {
        const { name, gold, onGiveGold } = this.props;
        return (
            <> 
                <div>Hello {name}! You have {gold} in Gold</div>
                // Variant 1
                <div>
                    {gold > 5 ? "You are rich person" : "You just didn't get enough gold yet!"}
                </div>
                // Variant 2
                <div>
                    {this.displayGoldMessage}
                </div>
                <button onClick={onGiveGold}>Give a Gold!</button>
            </>
        )
    }
}