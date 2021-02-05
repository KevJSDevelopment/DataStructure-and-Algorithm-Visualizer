export const resetArray = () => {
    const array = []
    for(let i = 0; i < randomInt(20, 80); i++){
        array.push(randomInt(20, 500))
    }
    return array
}

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}