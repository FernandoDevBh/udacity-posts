const clone = require('clone')

let db = {}

const defaultData = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      parentId: '17DFCADF-C4E8-4CDF-BC6A-47407D955F68',
      voteScore: 6,
      deleted: false,
      commentCount: 2
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology.',
      author: 'thingone',
      parentId: 'DF076E92-390E-4501-8247-7948204AE0F3',
      voteScore: -5,
      deleted: false,
      commentCount: 0
    }
}

function getData (token) {
    let data = db[token]
    if (data == null) {
        data = db[token] = clone(defaultData)
    }
    return data
}

function getByCategory (token, parentId) {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].parentId === parentId && !posts[key].deleted)
    return filtered_keys.map(key => posts[key]);
}


module.exports = {    
    getByCategory
}
  