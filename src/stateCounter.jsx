import React, { Component, PureComponent } from 'react';

class stateCounter extends Component {
    state = {
        counter: 0
    }
    // shouldComponentUpdate(prop, state) {
    //     // console.log(state, this.state);
    //     return true;
    // }
    render () {
        return (
            <>
                {this.state.counter}
                <button onClick={() => {
                    // console.log('set state...')
                    this.setState(state => {
                        state.counter += 1;
                        return state;
                        // return {
                            // counter: state.counter + 1
                        // }
                    })
                }}>+++</button>
            </>
        )
    }
}

export default stateCounter;