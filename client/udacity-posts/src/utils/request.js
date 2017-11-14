const axios = require('axios');
const token = localStorage.getItem('token-udacity-post')

const instancia = (function (){
    let instance;

    function createInstance (){
        return axios.create({
            baseURL: process.env.REACT_APP_API_URI,
            timeout: 2000,
            headers: {
                'authorization': token
            }            
        });
    }

    return {
        getInstance: function () {
            if(!instance){
                instance = createInstance()
            }

            return instance;
        }
    };
})();

export const post = async (body) => {
    const response = await instancia.getInstance().post('/api', body);
    if(response.status !== 200){
        throw new Error(`Ocorreram problemas ao realizar a busca na API. Status: ${response.status}`);
    }
    const { data, errors } = response.data;
    if(errors){
        throw new Error(JSON.stringify(errors))
    }

    const key = Object.keys(data).reduce((p, n) => n, "");                

    return data[key];
}
