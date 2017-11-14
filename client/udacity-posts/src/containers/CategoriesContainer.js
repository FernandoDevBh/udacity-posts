import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as categorieActions from '../actions';
import ListCategories from '../components/category/ListCategories';

class CategoriesContainer extends Component{  
    
    componentDidMount(){
        this.props.actions.getCategories();
    }

    render(){
        if(!this.props.category.list){
            return null;
        }
        
        return (
            <ListCategories categories={this.props.category.list} />
        );
    }
}

const mapStateToProps = (state) =>{
    return {category: state.category};
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        categorieActions,
        dispatch
    )
})

const containerWithData =withRouter(CategoriesContainer);


export default connect(mapStateToProps, mapDispatchToProps)(containerWithData);