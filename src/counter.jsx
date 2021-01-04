import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'

class Counter extends Component {
    // state = {
    //     test: 666
    // }
    // shouldComponentUpdate(props) {
    //     console.log(props, this.props);
    //     return true;
    // }
    render() {
        console.log('counter' + this.props.level + ' is rendering');
        return (
            <>
                {this.props.counter.counter}
                <br />
                <button onClick={this.props.act}> 加一 </button>
                <br />
                {this.props.children}
            </>
        )
    }
}

const getCounterState = (state, level) => {
    switch (level) {
        case 1:
            return state;
            // return state.counter;
        case 2:
            return state.child;
            // return state.child.counter;
        case 3:
            return state.child.child;
            // return state.child.child.counter;
        case 4:
            return state.child.child.child;
            // return state.child.child.child.counter;
        default:
            return 'bug';
    }
}

const counterGenerator = (level) => {
    return connect(state => ({
        counter: getCounterState(state, level)
    }), dispatch => ({
        act: () => {
            dispatch({
                type: 'l' + level
            })
        },
        level,
    })
    // , null, {
    //     areStatePropsEqual: (a, b) => a === b,
    // }
    )(Counter);
};
export default counterGenerator;