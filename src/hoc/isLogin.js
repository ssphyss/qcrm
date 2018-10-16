import React from 'react';
import { connect } from 'dva';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Aux from './aux';

function isLogin(Comp){
    class WrappComp extends Comp {
        state = {
            login: false
        }
        componentDidMount(){
            // console.log(this.props);
            this.props.dispatch({type:'auth/asyncCurrentUser',history: this.props.history});
        } 
        componentWillReceiveProps(nextProps){
            console.log(nextProps.auth._id);
            if(nextProps.auth._id !== ''){
                this.setState({
                    login: true
                })
            }
        }
        render(){
            return(
                <Aux>
                {  this.state.login === true ?
                    <Comp {...this.props}></Comp>
                    : null
                }
                </Aux>

            )
        }
    }
    return connect(mapStateToProps)(withRouter(WrappComp));
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default isLogin