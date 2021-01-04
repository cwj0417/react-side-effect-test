import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'

class ShowChild extends Component {
    render() {
        // console.log('render showchild')
        return (
            <>
                lv2: {this.props.struc.counter2}
                <br />
                lv3: {this.props.struc.child.counter3}
                <br />
                lv4: {this.props.struc.child.child.counter4}
                <br />
            </>
        )
    }
}


export default connect(state => ({
    struc: state.child
}))(ShowChild);