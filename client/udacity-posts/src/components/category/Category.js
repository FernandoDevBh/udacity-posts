import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';
import PostList from '../Post/PostList';

const styles = {    
    ListItem: {
        marginBottom: 10,
        width: '100%',
        backgroundColor:'#34393B',
    },
    nestedItems: {
        display: 'flex',
        marginBottom: 5
    }
};

const primaryText = (props) => {
    const text = props.name.charAt(0).toUpperCase()+props.name.slice(1);
    return (
        <Link 
            style={{display:'flex', width:100}} 
            to={`category/${props.id}`}>{text}</Link>
    );
}    

const avatar = (props) => (
    <Avatar 
        style={{backgroundColor: '#F5F9FA', top: 10}} 
        size={32}>{props.name.charAt(0).toUpperCase()}</Avatar>
);

function Category(props) {
    const { category } = props;
    return (
        <ListItem            
            value={props.value}           
            style={styles.ListItem}
            primaryText={primaryText(category)}            
            leftAvatar={avatar(category)}   
            nestedItems={[
                <ListItem style={{ cursor: 'arrow' }} key={category.id}>
                    <PostList posts={category.posts}/>
                </ListItem>]}
        />            
    );
}

Category.propTypes = {
    value: PropTypes.number.isRequired,
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,     
    }).isRequired,    
}

export default Category;
