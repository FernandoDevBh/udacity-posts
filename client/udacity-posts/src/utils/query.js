export const allCategories = () => ({
    query:`{categories{
                id
                name
                path
                posts{
                    id
                    author
                    timestamp
                    title
                    body
                    voteScore                    
                } 
            }}`,variables:null,operationName: null
});

export const setVote = (id, ok = true) => {
    const operationName = 'setVote';
    const variables = { vote: {id, voto: ok ? 'Up' : 'Down' }};
    const query = `
        mutation setVote($vote: VoteInput!){
        setVoteScore(vote: $vote){
        voteScore
      }
    }`;
    return { query,  variables, operationName }
}