import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

function Category(props) {
    return (
        <Chip onClick={props.onClick}>
            <Avatar size={32}>{props
                    .name
                    .substring(0, 1)
                    .toUpperCase()}</Avatar>
            {props.name}
        </Chip>
    );
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Category;