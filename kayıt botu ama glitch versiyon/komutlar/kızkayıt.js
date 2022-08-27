const Discord = require("discord.js");
const db = require('wio.db');
exports.run = (client, message, args) => {
  const narcosmisafir = db.fetch(`misafir_${message.guild.id}`); 
  const nkızkayıt = db.fetch(`kızrol_${message.guild.id}`); 
  const log = db.fetch(`klog_${message.guild.id}`); 
  const tag = db.fetch(`tag_${message.guild.id}`); //tagınız

  var toplam = db.fetch(`erkekkayıtstats_${message.author.id}.${message.guild.id}`)
  var toplam2 = db.fetch(`kızkayıtstats_${message.author.id}.${message.guild.id}`)
 
  var toplam = db.fetch(`kayitgif_${message.author.id}`)

    let kayıtsız =    db.fetch(`misafir_${message.guild.id}`)
    let kızrol =    db.fetch(`kızrol_${message.guild.id}`)
    let kayıtl =    db.fetch(`klog_${message.guild.id}`)
    let kyetkili =    db.fetch(`kayıty_${message.guild.id}`)
    let tagayar =    db.fetch(`tag_${message.guild.id}`)
    if(!kayıtsız) return message.channel.send("Bu komudu kullanmak için **Kayıtsız Rol** sunucuda ayarlı olması gerekiyor.")
    if(!kızrol) return message.channel.send("Bu komudu kullanmak için **Kız Rol** sunucuda ayarlı olması gerekiyor.")
    if(!kayıtl) return message.channel.send("Bu komudu kullanmak için **Kayıt Log** sunucuda ayarlı olması gerekiyor.")
    if(!kyetkili) return message.channel.send("Bu komudu kullanmak için **Kayıt Yetkilisi** Rolü sunucuda ayarlı olması gerekiyor.")
    if(!tagayar) return message.channel.send("Bu komudu kullanmak için **Tag** sunucuda ayarlı olması gerekiyor.")
 
    if(!message.member.roles.cache.has(db.fetch(`kayıty_${message.guild.id}`))) {
      return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
   }


  {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Kayıt Edebilmem İçin Bir ``İsim`` Girmelisin.**")
      if(!yas) return message.channel.send("**Kayıt Edebilmem İçin Bir ``Yaş`` Girmelisin.**")
    c.roles.add(nkızkayıt)
    c.roles.remove(narcosmisafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    db.add(`kızkayıtstats_${message.author.id}.${message.guild.id}`, 1)
        const narcoscod = new Discord.MessageEmbed()
    .setDescription(`
:white_check_mark: Kayıt Başarılı :white_check_mark:

• Kaydı Yapılan Üye: **${c.user.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}
• Verilen Rol: ${nkızkayıt}
`)
.addField(`Toplam Erkek Kayıt\n`, toplam || 0)
.addField(`Toplam Kız Kayıt\n`, toplam2 || 0)

         .setFooter('Narcos Kayıt Sistemi')
     message.channel.send(narcoscod)
    


    
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","bayan","kadın"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "Kız üye kaydedersin",
  usage: "",
  kategori: "kayıt"
};
   
