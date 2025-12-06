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
        image:{url:"https://github.com/Akashkavindu/ZANTA-MD-V2/blob/main/src/Images/ChatGPT%20Image%20Nov%2021,%202025,%2001_21_32%20AM.png?raw=true"},
        caption: desc
     },{
       quoted:mek
     }
    )        
        
      }catch(e){
        console.log(e)
      }
    }
  },
  {
    name:"ping",
    description:"Bot online check",
    react:"🤖",
    ownerOnly: false,
    gruopOnly: false,
    adminOnly: false,
    botAdmin: false,
    async execute(conn,mek,args,context){
      const {from,pushname,reply,quoted} = context;
      try{       
        let start = Date.now();
        await conn.sendMessage(from,{text: "⚡️Pinging....."})
        let end = Date.now();
        let pingtime = end-start;
        reply(`Pong❤️‍🩹\n${pingtime}ms...\n\n> ZANTA-MD-V2`)
        
      }catch(e){
        console.log(e)
      }
    }
  }
]
