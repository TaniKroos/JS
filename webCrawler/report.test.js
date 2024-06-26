const {sortPages} = require('./report.js')

const  { test, expect } = require('@jest/globals')


test('sortPages 2 pages', () => {
    const input = {
       "https://wagslane.dev/path":1,
       "https://wagslane.dev": 3
    }
    const actual = sortPages(input)
    const expected = [
        ["https://wagslane.dev", 3],
        ["https://wagslane.dev/path", 1]
    ]
})



test('sortPages 5 pages', () => {
    const input = {
       "https://wagslane.dev/path3":1,
       "https://wagslane.dev": 3,
       "https://wagslane.dev/path1":5,
       "https://wagslane.dev/path2":15,
       "https://wagslane.dev/path":9
    }
    const actual = sortPages(input)
    const expected = [
        ["https://wagslane.dev/path2", 15],
        
        ["https://wagslane.dev/path", 9],
        ["https://wagslane.dev/path1", 5],
        ["https://wagslane.dev", 3],
        ["https://wagslane.dev/path3", 1]
    ]
})