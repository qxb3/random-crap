const json = require('./equipments.json')
const json1 = require('./equipments1.json')
const fs = require('fs')

const output = []
for (let i = 0; i < json.length; i++) {
    const data = json[i]
    console.log(data.name)
    for (let j = 0; j < json1.length; j++) {
        const data1 = json1[j]

        if (data.name === data1.name) {
            output.push({
                name: data.name,
                level_requirement: data.level_requirement,
                skill_type: data1.skill_type,
                stats: data.stats,
                monsters: data.monsters,
                type: data.type,
                vocation: data1.vocation
            })
        }
    } 
}

fs.writeFileSync('./output.json', JSON.stringify(output, null, 4))

function sort(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}
