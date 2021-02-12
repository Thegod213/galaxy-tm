const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')



/**
* Añade xp alos usuarios
* @param {message} mensaje de tu evento message
* @param {userID} la id del al que se le añadira la xp
* @param {XP} La experiensia que se le dara
* @returns {any}
*/

module.exports.addxp = (message,userID,XP) => {

    const Levels_db = low( new FileSync('Database/Levels.json'))

    if(!message) throw new Error("Necesitas poner el mensaje de tu evento message");

    if(!userID) throw new Error("necesitas poner la id del quien se le agregara la xp");

    if (!XP) throw new Error("Pon la xp a dar");

    if(typeof userID !== "string") throw new Error("el usuario tiene que ser un string");

    if (XP <= 0) throw new Error("La xp no tiene que ser menor a 0");

    if (typeof XP !== "number") throw new Error("La xp tiene que ser un numero");
     
    if(Levels_db.has(message.guild.id+'.'+userID) === false){
        Levels_db.set(message.guild.id+'.'+userID,{
            "Nivel": 0,
            "xp": 0
        }).write()
    }

    const xp = Levels_db.get(message.guild.id+'.'+userID+'.xp').value()

    Levels_db.set(message.guild.id+'.'+userID+'.xp',xp+XP).write()
}


/**
* Remueve xp alos usuarios
* @param {message} mensaje de tu evento message
* @param {userID} la id del al que se le eliminara la xp
* @param {XP} La experiensia que se le dara
* @returns {any}
*/



module.exports.removexp = (message,userID,XP) => {

    const Levels_db = low( new FileSync('Database/Levels.json'))

    if(!message) throw new Error("Necesitas poner el mensaje de tu evento message");

    if(!userID) throw new Error("necesitas poner la id del quien se le removera la xp");

    if (!XP) throw new Error("Pon la xp a remover");

    if(typeof userID !== "string") throw new Error("el usuario tiene que ser un string");

    if (XP <= 0) throw new Error("La xp no tiene que ser menor a 0");

    if (typeof XP !== "number") throw new Error("La xp tiene que ser un numero");
     
    if(Levels_db.has(message.guild.id+'.'+userID) === false){
        Levels_db.set(message.guild.id+'.'+userID,{
            "Nivel": 0,
            "xp": 0
        }).write()
    }

    const xp = Levels_db.get(message.guild.id+'.'+userID+'.xp').value()

    if(xp <= XP){
      return  Levels_db.set(message.guild.id+'.'+userID+'.xp',0).write()
    }
      return Levels_db.set(message.guild.id+'.'+userID+'.xp',xp-XP).write()
}

/**
* Remueve xp alos usuarios
* @param {message} mensaje de tu evento message
* @param {userID} la id del al que se le pondra la xp
* @param {XP} La experiensia que se le dara
* @returns {any}
*/



module.exports.setexp = (message,userID,XP) => {

    const Levels_db = low( new FileSync('Database/Levels.json'))

    if(!message) throw new Error("Necesitas poner el mensaje de tu evento message");

    if(!userID) throw new Error("necesitas poner la id del quien se le seteara la xp");

    if (!XP) throw new Error("Pon la xp a setear");

    if(typeof userID !== "string") throw new Error("el usuario tiene que ser un string");

    if (XP <= 0) throw new Error("La xp no tiene que ser menor a 0");

    if (typeof XP !== "number") throw new Error("La xp tiene que ser un numero");
     
    if(Levels_db.has(message.guild.id+'.'+userID) === false){
        Levels_db.set(message.guild.id+'.'+userID,{
            "Nivel": 0,
            "xp": 0
        }).write()
    }

    const xp = Levels_db.get(message.guild.id+'.'+userID+'.xp').value()

      return Levels_db.set(message.guild.id+'.'+userID+'.xp',xp).write()
}