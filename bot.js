const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login("NzcyOTQ4ODYwNzAwMDY1Nzky.X6CGuQ.cTD5ja3n1Kp3ifkQxvmm5AED3n4");
  //----------------------TAG-KONTROL----------------------\\     
  
  client.on("guildMemberAdd", member => {
    let sunucuid = ("794609122255175702"); 
    let tag = ("⚚"); 
    let rol = ("794609122841985129"); 
  if(member.user.username.includes(tag)){
  member.roles.add(rol)
    const tagalma = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
        .setTimestamp()
       client.channels.cache.get("798187424248234076").send(tagalma)
  }
  })
  
  //-----------------------TAG-KONTROL----------------------\\  
  
  client.on('message', msg => {
    if (msg.content === '.tag') {
      msg.channel.send('⚚');
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'tag') {
      msg.channel.send('⚚');
    }
  });
  
  
  client.on('message', msg => {
    if (msg.content === '!tag') {
      msg.channel.send('⚚');
    }
  });
  
  client.on('message', msg => {
    if (msg.content === '-tag') {
      msg.channel.send('⚚');
    }
  });   

client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   

client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   client.on("guildMemberAdd", async (member) => {
  member.roles.add("794609122762031126")
  member.roles.add('794609122762031125')
  member.setNickname("⚚ İsim | Yaş")
  });
   
//-----------------------OTO-TAG-----------------------\\     STG

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let sunucu = ("794609122255175702"); 
    let tag = ("⚚"); 
    let rol = ("794609122841985129"); 
  let kanal = '798187424248234076'

  try {

  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim!`)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım!`)
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});



client.on("guildMemberAdd", member => {  
  const kanal = member.guild.channels.cache.find(r => r.id === "794609123806543887");
    
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const gecen = moment.duration(kurulus).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = 'Yani Hesabın Güvenli Değil <a:carpi:798186043978547210>'
  if (kurulus > 1296000000) kontrol = 'Yani Hesabın Güvenli <a:tik:798186027642388521>'
  moment.locale("tr");
  kanal.send(":tada: Shazam'a Hoş Geldin <3 <@" + member + "> \n\n Hesabın "+ gecen +" Önce Oluşturulmuş "+kontrol+" \n\n Sunucu kurallarımız <#794609124289151010> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek. \n\n Seninle beraber " + member.guild.memberCount + " kişi olduk , Tagımızı alarak bizlere destek olabilirsin , Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor <@&794609123064021032> seninle ilgilenecektir  İyi eğlenceler !")
  });