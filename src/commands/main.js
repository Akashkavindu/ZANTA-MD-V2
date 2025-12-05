const os = require('os')
const {runtime} = require("../utils/functions")
module.exports = [
  {
    name:"alive",
    description:"Bot online check",
    react:"🤖",
    ownerOnly: false,
    gruopOnly: false,
    adminOnly: false,
    botAdmin: false,
    async execute(conn,mek,args,context){
      const {from,pushname,reply,quoted} = context;
      try{
        let desc = `
Hey ${pushname} I am Alive now🌝💗
uptime:${runtime(process.uptime())}

> ZANTA-MD-V2
`
await conn.sendMessage(from,
     {
        image:{url:""},
        caption: desc
     },{
       quoted:mek
     }
    )        
        
      }catch(e){
        console.log(e)
      }
    }
  }
]
