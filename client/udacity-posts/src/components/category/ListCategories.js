import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import {List, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import WrapState from './WrapState';

let SelectableList = WrapState(makeSelectable(List));

const ListCategories = (props) => (
    <SelectableList defaultValue={3}>
        <Subheader><h1>{props.title}</h1></Subheader>
        {props.categories.map((category, idx) =>(
            <Category key={idx} category={category} value={idx+1}/>
        ))}            
    </SelectableList>
)

ListCategories.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            posts: PropTypes.array.isRequired
        })).isRequired,
}

export default ListCategories;