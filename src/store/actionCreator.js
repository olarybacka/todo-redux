export default (type) => ({
    type, 
    create: (payload) => ({ type, payload })
}) 