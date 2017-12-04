/**

    Advent of Code - Day Two Solution
    Jason Wilson @wilsonuponsea

**/

const fs = require('fs')

let accumulatorDiff = 0
let accumulatorDiv = 0

const processChecksumDifference = (line) => {
    values = line.split(/[\s]+/)
    return Math.max(...values) - Math.min(...values)
}

const processChecksumDividends = (line) => {
    values = line.split(/[\s]+/)
    result = 0

    values.forEach( (A, i) => {
        values.forEach( (B, j) => {
            console.log("AB test", A/B)
            if (i!=j) {
                if ((A/B)%1 === 0) result = A/B
                if ((B/A)%1 === 0) result = B/A
            }
        })
    })

    return result
}

const parseFile = (data) => {
    // Read spreadsheet line by line
    const lines = data.split('\n')
    
    lines.forEach( (line) => accumulatorDiff += processChecksumDifference(line) )
    lines.forEach( (line) => {
        //console.log("process:", processChecksumDividends(line))
        accumulatorDiv += processChecksumDividends(line) 
    })
    
    console.log( 'Result part one: ', accumulatorDiff )
    console.log( 'Result part two: ', accumulatorDiv )
}

const fileHandler = (err,data) => {

    if (err) {
        return console.log(err)
    } 
    
    parseFile(data)

}

//Part One
fs.readFile('./spreadsheet.txt', 'utf8', fileHandler)