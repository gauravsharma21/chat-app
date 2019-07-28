const generateMessage = (username, color, text) => {
    return{
        username,
        text,
        color,
        createdAt : new Date().getTime()
}
}

const generateLocationMessage = (username, color, text) => {
    return {
        username,
        text,
        color,
        createdAt : new Date().getTime()
    }
}
module.exports = {
    generateMessage,
    generateLocationMessage
}