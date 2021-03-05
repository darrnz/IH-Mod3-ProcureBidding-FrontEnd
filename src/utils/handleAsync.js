//Operaciones asincrinas

const handleAsync = async asynFn => {
    let result
    try {
        const { data } = await asynFn()
        result = data
    } catch (error) {
        const { data } = error.response
        result = data
    }
    return result
}

export default handleAsync