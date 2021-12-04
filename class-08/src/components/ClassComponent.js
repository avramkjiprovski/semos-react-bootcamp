import React from 'react';
import {connect } from 'react-redux';
import { sayHello, sayGoodbye } from '../actions/SayHelloActions';

class ClassComponent extends React.Component {
  
    componentDidMount() {
        this.props.getGreeting();
        this.props.sayGoodbye();
    }

    render() {
        return(
            <div className="class-component">
                <h1>{this.props.pozdrav}</h1> 
                <p>{this.props.goodbye}</p>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        pozdrav: state.pozdrav,
        goodbye: state.goodbye
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        getGreeting: ()=>{
            dispatch(sayHello())
        },
        sayGoodbye: ()=>{
            dispatch(sayGoodbye())
        }
    }

}      


export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent)