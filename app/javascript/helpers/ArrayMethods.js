
const fillObjectFromArray = (array = [], value = '') => {
    let object = {}
    array.forEach(key => {
        object[key] = value
    })
    return object
}

export { fillObjectFromArray }