const scpList = require('./scpList.json');
const fs = require('fs');
const path = require('path');

function get(scp){
    let data = fs.readFileSync("C:\\Users\\Admin\\Desktop\\Development\\Apps\\Electron\\SCP\\assets\\modules\\scpModule\\scpList.json", {encoding: 'utf8'})
    let newData = JSON.parse(data)[scp]
    return {
        objectClass: newData.objectClass,
        specialContainmentProcedures: newData.specialContainmentProcedures,
        description: newData.description,
        additionalNotes: newData.additionalNotes
    }
}

module.exports = get
