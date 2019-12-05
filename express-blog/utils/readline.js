const fs = require('fs')
const path = require('path')
const readline = require('readline')

// 文件名
const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log')

const readStream = fs.createReadStream(fileName)
const rl = readline.createInterface({ input: readStream })

let chromeNum = 0
let sum = 0

rl.on('line', (lineData) => {
    if (!lineData) {
        return
    }
    // 总行数
    sum++

    const arr = lineData.split(' -- ')
    if (arr[2] && arr[2].indexOf('Chrome') > 0) {
        chromeNum++
    }
})

rl.on('close', () => {
    console.log('chorme 占比: ' + chromeNum / sum)
})
