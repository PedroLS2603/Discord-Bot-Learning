//Iniciando a biblioteca discord.js

const Discord = require("discord.js");

//Instanciando conexão com o client do discord

const client = new Discord.Client();

//Importando configuração do bot
const config = require("./config.json")


//Assim que o bot iniciar ele faz o que estiver aqui
client.on("ready", () => {
    console.log(`Bot iniciado com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais em ${client.guilds.cache.size} servidores`);
    client.user.setActivity(`${config.prefix}help`)
})

//Leitura de comandos
client.on("message", async message => {
    //Instância de situações em que o bot não responde
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    //Formatação de argumentos e comando
    const args = message.content.slice(config.prefix.length).trim().split(/_/g);
    const comando = args.shift().toLowerCase();

//Lista de comandos
    if(comando === "pipipi") {
        const m = await message.channel.send("pipipi");
        m.edit("popopo")
    }

    if(comando ==="help") {
        const m = await message.channel.send("");
    }
});



client.login(config.token);