import React from 'react';
import { GridTile } from 'material-ui/GridList';
import VoteScore from '../Vote/VoteScore';

const styles = {    
    gridTile: {
        textAlign:'left'
    }
}

const Post = (props) => {
    const { title, author, id, voteScore } = props;
    return (
        <GridTile 
            style={styles.gridTile}
            subtitleStyle={styles.gridTile}
            title={title}
            subtitle={<span>por <b>{author}</b></span>}
            actionIcon={<VoteScore  
                            postId={id} 
                            voteScore={voteScore} 
                            addVote={() => console.log('implementar add')}
                            removeVote={() => console.log('implementar remove')}/>}
            />
    );
}

export default Post;