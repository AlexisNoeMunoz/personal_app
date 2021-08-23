
const ObjectHelper = {
    fillFromArray: (array = [], value = '') => {
        let object = {}
        array.forEach(key => {
            object[key] = value
        })
        return object
    },
}

export { ObjectHelper }