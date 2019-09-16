const CSVToJSON = require('csvtojson')
const JSONToCSV  = require('json2csv')
const FileSystem = require('fs')

CSVToJSON().fromFile('./source.csv').then(source => {
    console.log(source)
    source.push({
        'NAME' : 'Xiaomi Redmi 5A',
        'CATEGORY' : 'Smartphone',
        'PRICE' : '1199000'
    })
    const csv = JSONToCSV(source, {fields: ['NAME', 'CATEGORY', 'PRICE',]})
    FileSystem.writeFileSync('./destination.csv', csv)
})