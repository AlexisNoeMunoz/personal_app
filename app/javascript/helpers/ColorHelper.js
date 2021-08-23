
const ColorHelper = {
    getBrightness: (color = '') => {
        const colorMatrix = color.match(
            color.length == 6 ? /(\S{2})/g : /(\S{1})/g
        )
        if (colorMatrix) {
            const r = parseInt(colorMatrix[0], 16)
            const g = parseInt(colorMatrix[1], 16)
            const b = parseInt(colorMatrix[2], 16)
            return ((r * 299) + (g * 587) + (b * 114)) / 1000
        }
    },
}

export { ColorHelper }