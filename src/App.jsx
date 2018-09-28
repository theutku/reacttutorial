import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        counters.map(c => {
            if (c.id == counter.id) c.value++;
        });
        this.setState({ counters });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
