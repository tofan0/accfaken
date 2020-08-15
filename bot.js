const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", async () => {
console.log("Starting..");
let g = client.guilds.get("690110643784908887"); 
let c = g.channels.get("697560168182841404"); 
if (c.type === "voice") {
c.join();
setInterval(() => {
if (!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log('Failed To Join: \n The Channel Type isn "Listening."');
}
});

client.on("message", message => {
if (message.content === "slaw") { 
message.channel.send("Baxer bey bo dabashan ba zwtren kat juabt adretawa"); 
message.channel.sendFile("");
}
});


client.on("message", message => {
if (message.content.startsWith("bc")) {
if (!message.member.hasPermission("ADMINISTRATOR")) return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);

})

message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :Seccessful send to `); 
message.delete(); 
}; 
});


client.on("message", message => {

if (message.content.startsWith("bc")) {
if (!message.member.hasPermission("ADMINISTRATOR")) return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
m.send(`${argresult}\n ${m}`);

})

message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` :Seccessful send to `); 
message.delete(); 
}; 
});










client.on('typingStart', (ch, user) => {
let ToOFaN
      if(user.presence.status === 'offline') {

 

          ch.send(`${user}(:  :blush:    دەستەکەو کەشف بوو ئەوە خۆت ئۆفلاین ئەکەی خێرا خۆت ئۆنلاین کە`)    //lera chiw pe xosha bele

          .then(msg => {

              msg.delete(10000)

          })

      }

  })


client.on("message", message => {
if (message.content.startsWith( "mvall")) {
if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
return message.reply("```ببورە رۆڵەکەی تۆ ناتوانێ ئەم فرمانە ئەنجام بدات```")
if (message.member.voiceChannel == null)
return message.channel.send(
'```بڕۆ فۆیسێک دوبارە فرمانەکە بنوسە```'
);
let ToOFaN
var author = message.member.voiceChannelID;
var m = message.guild.members.filter(m => m.voiceChannel);
message.guild.members
.filter(m => m.voiceChannel)
.forEach(m => {
m.setVoiceChannel(author);
}); message.channel.send(
'```هەمو ئەوانەی لە ڤۆیس بون موڤ کرانە لای 
خۆت```'
);
}
});





client.on("message", message => {
let command = message.content.split(" ")[0];
if (command == "unban") {
if (!message.member.hasPermission("BAN_MEMBERS")) return;
let args = message.content
.split(" ")
.slice(1)
.join(" ");
if (args == "all") {
message.guild.fetchBans().then(zg => {
zg.forEach(NoNo => {
message.guild.unban(NoNo);
});

});

return message.channel.send("**✅ باندی هەموو ئەوانەی باند بون لابردرا**");
}
if (!args)
return message.channel.send("**تکایە ئایدی میمبەرەکە بنوسە لەگەڵ کۆماندەکە / allیانیش بنوسە**");
message.guild
.unban(args)
.then(m => {
message.channel.send(`**✅ Unbanned ${m.username}**`);
})
.catch(stry => {
message.channel.send(
`**🙄 - نەدۆزرایەوە \`${args}\` لە لیستی باندەکاندا **`
);
});
}
});



client.on("message", message => {
if (message.content.startsWith("avatar")) {
var mentionned = message.mentions.users.first();
var ToOFaN;
if (mentionned) {
var ToOFaN = mentionned;
} else {
var ToOFaN = message.author;
}
const embed = new Discord.RichEmbed()
.setImage(
""
)
.setTitle(`✽ __**AVATAR**__`)
.setColor("black")
.setImage(`${ToOFaN.avatarURL}`);
message.channel.sendEmbed(embed);
}
});

client.on("message", message => {
if (!message.channel.guild) return;
if (message.content == prefix + "Member")
message.reply(`**${message.guild.memberCount}**ئێستا سێرڤەر ئەوەندە میمبەرەیە`);
});

client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 't!wara') { 

if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**بڕۆ فۆیسێک ئینجا بانگ بکت چاوەکەم**'); 

} 

} 

});





client.login("NzMxOTAyNTk2NjM3MzkzMDA2.XwszaQ.ClOQLxLTusbpo0NulzraNssdl4s")












