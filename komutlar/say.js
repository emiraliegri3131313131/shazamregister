const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["794609122841985129"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} .say adlı komutu kullanabilmek için tagımızı almalısın tagımız : ⚚ `).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "794609122255175702"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
<a:0_:791656169323888660>
<a:1_:791656165548228618>
<a:2_:791656179230965791>
<a:3_:791656179074990100>
<a:4_:791656178458558464>
<a:5_:791656179322716170>
<a:6_:791656177532141569>
<a:7_:791656170062348288>
<a:8_:791656175770664980>
<a:9_:791656167800832010>}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
<a:0_:791656169323888660>
<a:1_:791656165548228618>
<a:2_:791656179230965791>
<a:3_:791656179074990100>
<a:4_:791656178458558464>
<a:5_:791656179322716170>
<a:6_:791656177532141569>
<a:7_:791656170062348288>
<a:8_:791656175770664980>
<a:9_:791656167800832010>}[d];})}

var taglılar = 0;
let tag = "⚚";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
<a:0_:791656169323888660>
<a:1_:791656165548228618>
<a:2_:791656179230965791>
<a:3_:791656179074990100>
<a:4_:791656178458558464>
<a:5_:791656179322716170>
<a:6_:791656177532141569>
<a:7_:791656170062348288>
<a:8_:791656175770664980>
<a:9_:791656167800832010>}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
<a:0_:791656169323888660>
<a:1_:791656165548228618>
<a:2_:791656179230965791>
<a:3_:791656179074990100>
<a:4_:791656178458558464>
<a:5_:791656179322716170>
<a:6_:791656177532141569>
<a:7_:791656170062348288>
<a:8_:791656175770664980>
<a:9_:791656167800832010>}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("BOOSTER ROL ID").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
<a:0_:791656169323888660>
<a:1_:791656165548228618>
<a:2_:791656179230965791>
<a:3_:791656179074990100>
<a:4_:791656178458558464>
<a:5_:791656179322716170>
<a:6_:791656177532141569>
<a:7_:791656170062348288>
<a:8_:791656175770664980>
<a:9_:791656167800832010>}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}
