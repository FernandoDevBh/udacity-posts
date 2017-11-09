const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// Aqui que realiza as definições dos schemas
const typeDefs = `
    # Comentários dos Posts
    type Comment{
        id: ID!
        parentId: ID!
        timestamp: Float!
        body: String!
        author: String!
        voteScore: Int!
        deleted: Boolean!
    }

    # Posts type
    type Post{
        id: ID!
        parentId:ID!
        timestamp: Float!
        title: String!
        body: String!
        author: String!
        voteScore: Int!
        deleted: Boolean!        
        comments: [Comment]
    }

    # Categorias dos posts
    type Category{
        # Id da categoria
        id: ID!
        name: String!
        path: String!
        posts: [Post!]
    }
    
    type Query {
        # Realiza a busca das categorias
        allCategories : [Category!]!
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;