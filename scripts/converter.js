//access the csv file and convert it to JSON
const csvFilePath='./../resources/interactions.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    let foo = jsonObj;
})