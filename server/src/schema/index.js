const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// Aqui que realiza as definições dos schemas
const typeDefs = `
    # Comentários dos Posts
    type Comment{
        id: ID!
        parentId: ID!
        timestamp: Int!
        body: String!
        author: String!
        voteScore: Int!
        deleted: Boolean!
    }

    # Posts type
    type Post{
        id: ID!
        parentId:ID!
        timestamp: Int!
        title: String!
        body: String!
        author: Strint!
        voteScore: Int!
        deleted: Boolean!        
        comments: [Comment]
    }

    # Categorias dos posts
    type Categories{
        # Id da categoria
        id: ID!
        name: String!
        path: String!
        posts: [Post!]
    }        
`;