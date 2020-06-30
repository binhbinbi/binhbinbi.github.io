import * as React from 'react';
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import * as actions1 from "../../actions/actions1"
import * as actions2 from "../../actions/actions2"
import * as actions3 from "../../actions/actions3"

type Props =  {
    todos1: { 
        field1: boolean;
        field2: boolean;
    },
    todos2: { 
        field1: boolean;
        field2: boolean;
    },
    todos3: { 
        field1: boolean;
        field2: boolean;
    },
    action1: ()=>void;
    action2: ()=>void;
    action3: ()=>void;
}

type State = {

}

class Homepage  extends React.Component<Props, State> {

    render() {
        console.log(this.props)
        return <div>
            Home page
            <div onClick={this.props.action1}>action1</div>
            <div onClick={this.props.action2}>action2</div>
            <div onClick={this.props.action3}>action3</div>
            <div>state1:{this.props.todos1.field1? 'T': 'F'}</div>
            <div>state2:{this.props.todos2.field1? 'T': 'F'}</div>
            <div>state3:{this.props.todos3.field1? 'T': 'F'}</div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        todos1: state.todos1,
        todos2: state.todos2,
        todos3: state.todos3
    }
}

const mapDispatchToProps = (dispatch, props) => bindActionCreators({...actions1, ...actions2, ...actions3}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
