import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VoteScore from '../../components/Vote/VoteScore';
import { vote } from '../../actions/post';

function VoteScoreContainer(props) {
    const { postId, voteScore, vote } = props;
    return (
        <VoteScore
            postId={postId}
            voteScore={voteScore}
            addVote={() => vote(postId, true)}
            removeVote={() => vote(postId, false)} />
    );
}

VoteScoreContainer.propTypes = {
    postId: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        { vote },
        dispatch
    )
})

const VoteContainer = connect(null, mapDispatchToProps)(withRouter(VoteScoreContainer));

export default VoteContainer;
