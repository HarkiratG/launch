import React from 'react';
import Input from '../Input/Input'

export default class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            interest: "0",
            principal: "0",
            period: "0"
        };
    }

    handleInterest(event){
        this.setState({interest: event.target.value})
    }
    handlePrincipal(event) {
        this.setState({ principal: event.target.value })
    }
    handlePeriod(event) {
        this.setState({ period: event.target.value })
    }

    render(){
        console.log(this.state)
        return(
            <div className="App">
                <header className="App-header">
                    <Input 
                        label="Mortgage ($)" 
                        onChange={this.handlePrincipal.bind(this)} 
                        type="text" 
                        name="name" 
                        placeholder="Your interest %" />
                    <Input 
                        label="Period (yrs)"
                        onChange={this.handlePeriod.bind(this)} 
                        type="email" 
                        name="name" 
                        placeholder="Your interest %" />
                    <Input 
                        label="Interest (%)"
                        onChange={this.handleInterest.bind(this)} 
                        type="text" 
                        name="name" 
                        placeholder="Your interest %" />
                </header>
            </div>
        )
    }
}