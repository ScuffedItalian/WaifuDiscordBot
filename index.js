const { Client, Intents, GatewayIntentBits, SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const fs = require("fs");
const client = new Client({ intents: [GatewayIntentBits.GuildMessages] });

//Reading the token file
const token = fs.readFileSync("token.txt", "utf-8");




//Embeds

const aboutMeEmbed = new EmbedBuilder()
    .setColor("#41fc03")
    .setTitle("About Waifu Bot")
    .setAuthor({name: "WaifuBot"})
    .addFields(
        { name: 'About me', value: "I'm a bot who was built to send weird img/gifs"},
        {name: "Commands", value: "/waifunom\n /waifucuddle\n /waifubully\n /waifukiss\n /aboutme\n"}

    )
    .setFooter({text: "💻Programmed by --> ScuffedItalian"});


    
client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);

    const command = await client.application.commands.create({
        name: 'waifunom',
        description: 'Displays a random waifu nom gif/image!'
    });
    const command2 = await client.application.commands.create({
        name: "waifukiss",
        description: "displays a gif/image of a waifu kiss"
    });
    const command3 = await client.application.commands.create({
        name: "waifubully",
        description: "Displays a random waifu bully img/gif"
    });
    const command4 = await client.application.commands.create({
        name: "waifucuddle",
        description: "Shows a gif/img of a waifu cuddle"
    });
    const command5 = await client.application.commands.create({
        name: "aboutme",
        description: "Shows a neat embed of my ABOUT ME"
    });
    
});



client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if(interaction.commandName === "waifunom") {
        const nomApi = fetch("https://api.waifu.pics/sfw/nom");
        const response = await nomApi;
        const json = await response.json();
        await interaction.reply(json.url);
    }

    if(interaction.commandName === "waifukiss") {
        const kissApi = fetch("https://api.waifu.pics/sfw/kiss");
        const response = await kissApi;
        const json = await response.json();
        await interaction.reply(json.url);
    }

    if(interaction.commandName === "waifubully") {
        const bullyAPI = fetch("https://api.waifu.pics/sfw/kiss")
        const response = await bullyAPI;
        const json = await response.json();
        await interaction.reply(json.url);
    }

    if(interaction.commandName === "waifucuddle") {
        const cuddleAPI = fetch("https://api.waifu.pics/sfw/cuddle");
        const response = await cuddleAPI;
        const json = await response.json();
        await interaction.reply(json.url);
        
    }
    if(interaction.commandName === "aboutme") {
        await interaction.reply({ embeds: [aboutMeEmbed] });
    }

    
    
    
})
client.on('messageCreate', message => {
    if (message.content === 'ping') {

        message.reply('Pong!');
    }
});

client.login(`${token}`);


