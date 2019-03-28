const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

bot.login("NTYwNTA3Njc4MDExNDI0NzY5.D31BKQ.uwxaKOiQf1kmiOQmCcLMtWsZP-I");
