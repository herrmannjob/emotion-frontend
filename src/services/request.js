import Api from '@/services/index'

const queryPerson = async (query) => {
    const result = Api.post(
        `https://7drkxbq6z5.execute-api.us-east-2.amazonaws.com/dev/person`,
        query
    )
    return result
}

const queryWord = async (query) => {
    const result = Api.post(
        `https://7drkxbq6z5.execute-api.us-east-2.amazonaws.com/dev/word`,
        query
    )
    return result
}

export default { queryPerson, queryWord }
