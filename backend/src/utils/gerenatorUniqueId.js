const crypto = require('crypto');

function generatorUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}

module.exports = generatorUniqueId;