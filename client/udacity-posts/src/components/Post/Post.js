import React from 'react';
import PropTypes from 'prop-types';
import { GridTile } from 'material-ui/GridList';
import VoteContainer from '../../containers/Vote/VoteContainer';

const styles = {    
    gridTile: {
        textAlign:'left'
    }
}

const Post = (props) => {
    const { title, author, postId, voteScore } = props;
    return (
        <GridTile 
            style={styles.gridTile}
            subtitleStyle={styles.gridTile}
            title={title}
            subtitle={<span>por <b>{author}</b></span>}
            actionIcon={<VoteContainer postId={postId} voteScore={voteScore} />}
            />
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
}

export default Post;