const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')



/**
* Añade nivel alos usuarios
* @param {message} mensaje de tu evento message
* @param {userID} la id del al que se le añadira la xp
* @param {LEVEL} el nivel que se le dara
* @returns {any}
*/

module.exports.addlevel = (message,userID,LEVEL) => {

    const Levels_db = low( new FileSync('Database/Levels.json'))

    if(!message) throw new Error("Necesitas poner el mensaje de tu evento message");

    if(!userID) throw new Error("necesitas poner la id del quien se le agregara el nivel");

    if (!LEVEL) throw new Error("Pon el nivel a dar");

    if(typeof userID !== "string") throw new Error("el usuario tiene que ser un string");

    if (LEVEL <= 0) throw new Error("el nivel no tiene que ser menor a 0");

    if (typeof LEVEL !== "number") throw new Error("el nivel tiene que ser un numero");
     
    if(Levels_db.has(message.guild.id+'.'+userID) === false){
        Levels_db.set(message.guild.id+'.'+userID,{
            "Nivel": 0,
            "xp": 0
        }).write()
    }

    const level = Levels_db.get(message.guild.id+'.'+userID+'.Nivel').value()

    Levels_db.set(message.guild.id+'.'+userID+'.Nivel',level+LEVEL).write()
}


/**
* Remueve xp alos usuarios
* @param {message} mensaje de tu evento message
* @param {userID} la id del al que se le eliminara la xp
* @param {LEVEL} La experiensia que se le dara
* @returns {any}
*/



module.exports.removexp = (message,userID,LEVEL) => {

    const Levels_db = low( new FileSync('Database/Levels.json'))

    if(!message) throw new Error("Necesitas poner el mensaje de tu evento message");

    if(!userID) throw new Error("necesitas poner la id del quien se le removera el level");

    if (!LEVEL) throw new Error("Pon la nivel a remover");

    if(typeof userID !== "string") throw new Error("el usuario tiene que ser un string");

    if (LEVEL <= 0) throw new Error("La nivel no tiene que ser menor a 0");

    if (typeof LEVEL !== "number") throw new Error("La xp tiene que ser un numero");
     
    if(Levels_db.has(message.guild.id+'.'+userID) === false){
        Levels_db.set(message.guild.id+'.'+userID,{
            "Nivel": 0,
            "xp": 0
        }).write()
    }

    const level = Levels_db.get(message.guild.id+'.'+userID+'.Nivel').value()

    if(level <= LEVEL){
      return  Levels_db.set(message.guild.id+'.'+userID+'.Nivel',0).write()
    }
      return Levels_db.set(message.guild.id+'.'+userID+'.Nivel',level-LEVEL).write()
}



/**
* setea el nivel alos usuarios
* @param {message} mensaje de tu evento message
* @param {userID} la id del al que se le pondra el nivel
* @param {LEVEL} El nivel que se le seteara
* @returns {any}
*/



module.exports.setlevel = (message,userID,LEVEL) => {

    const Levels_db = low( new FileSync('Database/Levels.json'))

    if(!message) throw new Error("Necesitas poner el mensaje de tu evento message");

    if(!userID) throw new Error("necesitas poner la id del quien se le seteara el nivel");

    if (!LEVEL) throw new Error("Pon el nivel a setear");

    if(typeof userID !== "string") throw new Error("el usuario tiene que ser un string");

    if (LEVEL <= 0) throw new Error("el nivel no tiene que ser menor a 0");

    if (typeof LEVEL !== "number") throw new Error("el nivel tiene que ser un numero");
     
    if(Levels_db.has(message.guild.id+'.'+userID) === false){
        Levels_db.set(message.guild.id+'.'+userID,{
            "Nivel": 0,
            "xp": 0
        }).write()
    }

   

    Levels_db.set(message.guild.id+'.'+userID+'.Nivel',LEVEL).write()
}