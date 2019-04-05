const fs = require('fs')

const finalArray = [];
fs.readFile('Sample CSV.csv', 'utf8', function (err, data) {
    // console.log(data)
    const raws = data.split('\n');
    // console.log(raws)

    const columns = raws[0].split(',');
    // console.log(columns)


    const currentline = raws[1].split(",");
    // console.log(currentline)


    const obj = {
        [columns[0]]: currentline[0],
        [columns[1]]: {
            [columns[1]]: currentline[1],
            [columns[2]]: currentline[2]
        },
        [columns[3]]: {
            [columns[3]]: currentline[3],
            [columns[4]]: currentline[4],
            [columns[5]]: currentline[5]
        }



    }

    finalArray.push(obj);


    const finaldata = JSON.stringify(finalArray);

    fs.appendFile('output.json', finaldata, function (err, finaldata) {
        if (err) {
            console.log('not added')
        } else {
            console.log('added')
        }
    })
    // const writeJsonFile = require('write-json-file');

    // writeJsonFile('Json.json',finaldata).then(() => {
    //     console.log('done');
    // });
})