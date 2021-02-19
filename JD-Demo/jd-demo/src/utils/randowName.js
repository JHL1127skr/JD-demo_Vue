let str = 'qwertyuiopasdfghjklzxcvbnm'
let arr = str.split('')
let randomName = () => {
    let NewArr = []
    for (let i = 0; i < 9; i++) {
        NewArr.push(arr[Math.floor(Math.random() * 26)])

    }
    for (let i = 0; i < 4; i++) {
        NewArr.splice(Math.floor(Math.random() * 8), 1, NewArr[Math.floor(Math.random() * 8)].toUpperCase())
    }
    return 'JD-' + NewArr.join('')
}
export { randomName }