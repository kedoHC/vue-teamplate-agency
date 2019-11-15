



// INSTANCIA DE AXIOS PARA LOGIN

import axios from 'axios';

const instanceAuth = axios.create({
    baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
})

export default instanceAuth