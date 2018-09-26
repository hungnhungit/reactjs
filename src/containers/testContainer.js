    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import { bindActionCreators } from 'redux';
    import * as TodoActions from '../actions/testAction';
    import { withRouter } from "react-router-dom";
    class TestContainer extends Component {
        render() {
            const { todos, actions } = this.props;

            var list = todos.map(function(index, elem) {
                return (<li key={elem}>{index.text}</li>)
            })

            return ( 
                <div >
                    <h1> hungnhung12 + 1</h1> 
                    {list}
                </div> 
            );
        }
    }

    function mapStateToProps(state) {
        return {
            todos: state.test
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(TodoActions, dispatch)
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TestContainer));