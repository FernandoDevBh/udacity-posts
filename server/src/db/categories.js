const clone = require('clone');

let db = {};

const defaultData = [
    {
        id: '17DFCADF-C4E8-4CDF-BC6A-47407D955F68',
        name: 'react',
        path: 'react'
    },
    {
        id: 'DF076E92-390E-4501-8247-7948204AE0F3',
        name: 'redux',
        path: 'redux'
    },
    {
        id: 'C20BBDF2-2289-4C06-80FE-865EFD54BAB3',
        name: 'udacity',
        path: 'udacity'
    },
];

function getData (token = '') {
    //Each token has it's own copy of the DB. The token in this case is like an app id.
    let data = db[token]
    //This populates the default user data if there isn't any in the db.
    if (data == null) {
        data = db[token] = clone(defaultData)
    }
    return data;
}

function getAll (token ='') {
    return new Promise(resolver => resolver(getData(token)));
}

module.exports = {
    getAll
}
