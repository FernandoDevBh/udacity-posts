
export const normalizeData = (data = [], property='', normalize) => {
    if(data && data.length > 0){
        return data.reduce((previus, next) => {
            if(property){
                next[property] = normalize(next[property])
            }
            return Object.assign(previus, {[next.id]: next})
        }, {});
    }else{
        return {};
    }
}

export const normalizeCategorias = (data = []) => {
    return data.reduce((previusCategory, nextCategory) => {
        if (nextCategory && Object.keys(nextCategory).length > 0){
            nextCategory.posts = normalizeData(nextCategory.posts, 'comments', normalizeData);
            return Object.assign(previusCategory, {[nextCategory.id]:nextCategory});
        }
        return {};
    }, {})
}

export const desnormalize = (data = []) => {
    return Object.keys(data).map(key => {
        const result = {...data[key] };
        const ids = Object.keys(result.posts);
        if (ids.length > 0){
            result.posts = ids.map(id => result.posts[id]);
        }else{
            result.posts = [];
        }
        return result;
    });
}
