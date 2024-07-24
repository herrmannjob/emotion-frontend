import axios from 'axios'

const Api = {
    async init() {
        this.setupHeaders()
    },
    setupHeaders() {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
    },
    async query(resource, params) {
        try {
            await this.init()
            return await new Promise((resolve) => {
                let result = axios.get(resource + params)
                resolve(result)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async get(resource) {
        try {
            await this.init()
            return await new Promise((resolve) => {
                let result = axios.get(resource)
                resolve(result)
            })
        } catch (error) {
            console.log(error)
        }
    },

    async post(resource, params) {
        let headers = {
            'Content-Type': 'application/json',
        }
        this.init()
        if (params && params.constructor.name != 'FormData')
            params = JSON.stringify(params)
        let result = ''
        axios
            .post(resource, params, { headers })
            .then((response) => (result = response))
        return result
    },

    async put(resource, id, params) {
        let result = await axios.put(
            `${resource}${id ? '/' + id : ''}`,
            JSON.stringify(params)
        )
        return result
    },

    patch(resource, id, params) {
        return axios.patch(`${resource}/${id}`, JSON.stringify(params))
    },

    delete(resource, id) {
        return new Promise((resolve) => {
            let result = axios.delete(`${resource}/${id}`)
            resolve(result)
        })
    },
}

export default Api
