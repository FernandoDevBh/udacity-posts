import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';
import VoteScore from '../Vote/VoteScore';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
    gridList: {        
        width: '100%',
        height: 300,
        overflowY: 'auto',
    },
    ListItem: {
        marginBottom: 10,
        width: '100%',
        backgroundColor:'#34393B',
    },
    primaryText: {
        display:'flex',
        width:100
    },
    Avatar: {
        backgroundColor: '#F5F9FA',
        top: 10
    },
    nestedItems: {
        display: 'flex',
        marginBottom: 5
    }
};

const primaryText = (props) => {
    const text = props.name.charAt(0).toUpperCase()+props.name.slice(1);
    return (
        <Link style={styles.primaryText} to={`category/${props.id}`}>{text}</Link>
    );
}    

const avatar = (props) => (
    <Avatar style={styles.Avatar} size={32}>{props.name.charAt(0).toUpperCase()}</Avatar>
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
                <ListItem style={{cursor:'arrow'}} key='1'>
                    <div style={styles.root}>
                    <GridList cellHeight={60} style={styles.gridList}>
                        {
                            category.posts.map((post, idx) =>(
                                <GridTile
                                    style={{textAlign: 'left'}}
                                    subtitleStyle={{textAlign: 'left'}}
                                    key={idx}
                                    title={post.title}
                                    subtitle={<span>por <b>{post.author}</b></span>}
                                    actionIcon={<VoteScore 
                                                    postId={post.id} 
                                                    voteScore={post.voteScore} 
                                                    addVote={() => console.log('like')}
                                                    removeVote={() => console.log('unlike')}
                                                    /> }
                                    >
                                </GridTile>
                            ))
                        }
                    </GridList>
                    </div>
                </ListItem>
            ]}         
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
