const fs = require('fs');
const path = require('path');

function get(scp){
    let data = fs.readFileSync(path.join(__filename, "../scpList.json"), {encoding: 'utf8'})
    let newData = JSON.parse(data)[scp]
    return {
        itemName: "SCP-" + scp,
        objectClass: newData.objectClass,
        specialContainmentProcedures: newData.specialContainmentProcedures,
        description: newData.description,
        additionalNotes: newData.additionalNotes
    }
}

module.exports = get
