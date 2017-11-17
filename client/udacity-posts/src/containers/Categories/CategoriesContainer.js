import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as categorieActions from '../../actions/category';
import ListCategories from '../../components/category/ListCategories';
import { desnormalize } from '../../utils/transformData';

class CategoriesContainer extends Component{  
    
    componentDidMount(){
        this.props.actions.getCategories();
    }    

    render(){
        const { categories } = this.props;        
        return categories ? 
                <ListCategories 
                    title='Udacity Posts' 
                    categories={desnormalize(this.props.categories)} /> : null;
    }
}

const mapStateToProps = (state) =>{
    const { categories, isLoading, error } = state.category;
    return {
        categories, isLoading, error
    };
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        categorieActions,
        dispatch
    )
})

const containerWithData =withRouter(CategoriesContainer);


export default connect(mapStateToProps, mapDispatchToProps)(containerWithData);