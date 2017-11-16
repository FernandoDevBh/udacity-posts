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