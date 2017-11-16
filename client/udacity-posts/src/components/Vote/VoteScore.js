import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const styles = {
    badge: {
        top: 22, 
        right: 12
    }
};

function VoteScore (props) {
    const { addVote, removeVote, postId, voteScore } = props;
    return (
        <div>
            <IconButton onClick={() => addVote(postId)}>
                <ThumbUp color="white" />                                            
            </IconButton>
            <IconButton onClick={() => removeVote(postId)}>
                <ThumbDown color="white" />                                            
            </IconButton>
            <Badge badgeContent={voteScore} primary={true} style={styles.badge}>
                <IconButton style={{top:-20}}>
                    <NotificationsIcon />
                </IconButton>
            </Badge>
        </div>
    );
}

VoteScore.propTypes = { 
    postId: PropTypes.string.isRequired, 
    addVote: PropTypes.func.isRequired, 
    removeVote: PropTypes.func.isRequired,     
    voteScore: PropTypes.number.isRequired 
}

export default VoteScore;