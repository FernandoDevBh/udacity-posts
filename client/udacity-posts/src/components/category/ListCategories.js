import React from 'react';
import Category from './Category';
import PropTypes from 'prop-types';

function ListCategories(props){
    return (
        <ol>
            {
                props.categories.map(category => (
                    <Category 
                        key={category.name}
                        name={category.name}
                        onClick={() => console.log('teste')} />
                ))
            }
        </ol>
    );
}

ListCategories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    })).isRequired,    
}


export default ListCategories;