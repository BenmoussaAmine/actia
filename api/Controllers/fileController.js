const express = require('express');
const route = express.Router();
const fs = require('fs')
const XLSX = require('xlsx')

route.post('/saveFile',async (req, res, next) =>  {
    const { file } = req.body;
    const bufferExcel = Buffer.from(file,'base64');
    fs.writeFileSync('path.xls', bufferExcel )
    res.status(200).send({ message: "file xls jawou behi" })
})

    route.post('/saveMethode',async (req, res, next) =>  {
    data = [{
        key: 'typeComparaison',
        value: req.body.methode
       }]
       const ws = XLSX.utils.json_to_sheet(data);
       const wb = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Responses');
       XLSX.writeFile(wb, 'TypeComparaison.xlsx');
       res.status(200).send({ message: "methode jawou behi" })
       
    })


module.exports = route;