import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as categorieActions from '../../actions/category';
import ListCategories from '../../components/category/ListCategories';

class CategoriesContainer extends Component{  
    
    componentDidMount(){
        this.props.actions.getCategories();
    }

    desnormalize = () => {
        if (this.props.categories){
            return Object.keys(this.props.categories).map(key => {
                const result = {...this.props.categories[key] };
                const ids = Object.keys(result.posts);
                if (ids.length > 0){
                    result.posts = ids.map(id => result.posts[id]);
                }else{
                    result.posts = [];
                }
                return result;
            });
        }else{
            return null;
        }
    }

    render(){
        const categories = this.desnormalize();       

        return categories ? <ListCategories title='Udacity Posts' categories={categories} /> : null;
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