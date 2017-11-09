require('dotenv').config()
const express = require('express');

const schema = require('./schema');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const {authenticate} = require('./auth/authorization');

const start = async () => {
    // Esse pacote automaticamente realiza o Parse JSON nas requests
    const bodyParser = require('body-parser');

    const buildOptions = async (req, res) => {
        const token = await authenticate(req);
        return {
            context: {                
                token
            },            
            schema
        }
    }

    const app = express();

    app.use('/api', bodyParser.json(), graphqlExpress(buildOptions));

    app.use('/graphiql', graphiqlExpress({
        endpointURL: '/api'
    }));

    app.listen(process.env.PORT, () => {
        console.log('Server listening on port %s, Ctrl+C to stop', process.env.PORT);
    })
};

start();