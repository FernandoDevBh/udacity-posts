import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import { GridList } from 'material-ui/GridList';
import Post from './Post';

const styles = {
    gridList: {        
        width: '100%',
        height: 300,
        overflowY: 'auto',
    }
}

function PostList(props) {
    const { posts } = props;
    return [
        <ListItem style={{ cursor: 'arrow' }} key={1}>
            <div>
                <GridList cellHeight={60} style={styles.gridList}>
                    {
                        posts.map(post => (<Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            postId={post.id}
                            voteScore={post.voteScore}
                        />))
                    }
                </GridList>
            </div>
        </ListItem>
    ];
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
    })).isRequired
};

export default PostList;