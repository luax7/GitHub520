"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var builders_1 = require("@discordjs/builders");
var discord_js_1 = require("discord.js");
var config_json_1 = require("../config.json");
var OrderModal = new discord_js_1.ModalBuilder()
    .setTitle("Ticket Creation")
    .setCustomId("Ticket Modal")
    .setComponents([
    new builders_1.ActionRowBuilder().addComponents(new builders_1.TextInputBuilder()
        .setLabel("What do u want to Buy?")
        .setCustomId("1")
        .setStyle(discord_js_1.TextInputStyle.Short)),
    new builders_1.ActionRowBuilder().addComponents(new builders_1.TextInputBuilder()
        .setLabel("Wich Paymentmethod do u want to use?")
        .setCustomId("2")
        .setStyle(discord_js_1.TextInputStyle.Short))
]);
var applyModal = new discord_js_1.ModalBuilder()
    .setTitle("Ticket Creation")
    .setCustomId("Ticket Modal")
    .setComponents([
    new builders_1.ActionRowBuilder().addComponents(new builders_1.TextInputBuilder()
        .setLabel("What role are you applying for? ")
        .setCustomId("1")
        .setStyle(discord_js_1.TextInputStyle.Short))
]);
var SupportModal = new discord_js_1.ModalBuilder()
    .setTitle("Ticket Creation")
    .setCustomId("Ticket Modal")
    .setComponents([
    new builders_1.ActionRowBuilder().addComponents(new builders_1.TextInputBuilder()
        .setLabel("What do u need help with?")
        .setCustomId("1")
        .setStyle(discord_js_1.TextInputStyle.Short))
]);
var selectrow = new builders_1.ActionRowBuilder().addComponents([
    new discord_js_1.StringSelectMenuBuilder()
        .setCustomId('ticket')
        .setPlaceholder('Click here to create a ticket')
        .addOptions(new discord_js_1.StringSelectMenuOptionBuilder()
        .setLabel('Create an Order')
        .setDescription('Create an item order')
        .setValue('Order')
        .setEmoji("🎫"), new discord_js_1.StringSelectMenuOptionBuilder()
        .setLabel('Apply for 5OPTiC.')
        .setDescription('Apply for our team')
        .setValue('Apply')
        .setEmoji("🎫"), new discord_js_1.StringSelectMenuOptionBuilder()
        .setLabel('Support')
        .setDescription('Get help to end your problems')
        .setValue('Support')
        .setEmoji("🎫"), new discord_js_1.StringSelectMenuOptionBuilder()
        .setLabel('Giveaway Claim')
        .setDescription('Claim the rewards for a giveaway')
        .setValue('Giveaway')
        .setEmoji("🎫"))
]);
var rootEmbed = new discord_js_1.EmbedBuilder()
    .setTitle("Ticket")
    .setDescription("You want to buy something from our store or you need Support? \n Then open a ticket selecting a Category. \n \n Accepted payment methods:\n PayPal <:paypal:1175283687340916756> \n PaySafe <:psc:1175283663366279289> \n Crypto (LTC, BTC) <:crypto:1175283630294188093>")
    .setColor(discord_js_1.Colors.Green);
var RootActionRow = new builders_1.ActionRowBuilder()
    .setComponents(new discord_js_1.ButtonBuilder()
    .setLabel("Open a ticket")
    .setStyle(discord_js_1.ButtonStyle.Success)
    .setCustomId("open ticket"));
var QuestionMap = new Map();
QuestionMap.set("Order", ["Product", "Method Of Payment"]);
QuestionMap.set("Apply", ["Apply role"]);
QuestionMap.set("Support", ["Issue"]);
exports.default = (function (instance, client) { return __awaiter(void 0, void 0, void 0, function () {
    var guild, tktChannel, Cumessage, collector;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.guilds.fetch(config_json_1.GuildId)];
            case 1:
                guild = _a.sent();
                return [4 /*yield*/, guild.channels.fetch(config_json_1.TicketChannelId)];
            case 2:
                tktChannel = _a.sent();
                return [4 /*yield*/, tktChannel.send({
                        embeds: [rootEmbed],
                        components: [selectrow]
                    })];
            case 3:
                Cumessage = _a.sent();
                return [4 /*yield*/, Cumessage.createMessageComponentCollector({
                        max: 100000000000,
                        componentType: discord_js_1.ComponentType.StringSelect
                    })];
            case 4:
                collector = _a.sent();
                collector.on('collect', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
                    var Modal, _a, channel, embed;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = interaction.values[0];
                                switch (_a) {
                                    case 'Apply': return [3 /*break*/, 1];
                                    case 'Support': return [3 /*break*/, 2];
                                    case 'Giveaway': return [3 /*break*/, 3];
                                    case 'Order': return [3 /*break*/, 5];
                                }
                                return [3 /*break*/, 6];
                            case 1:
                                Modal = interaction.showModal(applyModal);
                                return [3 /*break*/, 6];
                            case 2:
                                Modal = interaction.showModal(SupportModal);
                                return [3 /*break*/, 6];
                            case 3:
                                //Giveaway claim interaction
                                Modal = undefined;
                                return [4 /*yield*/, guild.channels.create({
                                        parent: config_json_1.TicketChannelsCategoryId,
                                        name: "Ticket-".concat(interaction.member.displayName),
                                    })];
                            case 4:
                                channel = _b.sent();
                                channel.permissionOverwrites.create(interaction.member, {
                                    ViewChannel: true
                                });
                                channel.permissionOverwrites.create(guild.roles.everyone, {
                                    ViewChannel: false
                                });
                                embed = new discord_js_1.EmbedBuilder()
                                    .setTitle("Ticket")
                                    .addFields({
                                    name: "Type",
                                    value: interaction.values[0]
                                })
                                    .setAuthor({
                                    iconURL: interaction.member.displayAvatarURL({ size: 512 }),
                                    name: interaction.member.displayName
                                });
                                channel.send({
                                    embeds: [embed]
                                });
                                interaction.reply({
                                    content: "Ticket created at <#".concat(channel.id, ">"),
                                    ephemeral: true
                                });
                                return [3 /*break*/, 6];
                            case 5:
                                Modal = interaction.showModal(OrderModal);
                                return [3 /*break*/, 6];
                            case 6:
                                if (Modal) {
                                    interaction.awaitModalSubmit({
                                        time: 10 * 60 * 1000
                                    }).then(function (submit) { return __awaiter(void 0, void 0, void 0, function () {
                                        var channel, embed, Iteration;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, guild.channels.create({
                                                        parent: config_json_1.TicketChannelsCategoryId,
                                                        name: "Ticket-".concat(interaction.member.displayName),
                                                    })];
                                                case 1:
                                                    channel = _a.sent();
                                                    channel.permissionOverwrites.create(interaction.member, {
                                                        ViewChannel: true
                                                    });
                                                    channel.permissionOverwrites.create(guild.roles.everyone, {
                                                        ViewChannel: false
                                                    });
                                                    embed = new discord_js_1.EmbedBuilder()
                                                        .setTitle("Ticket")
                                                        .addFields({
                                                        name: "Type",
                                                        value: interaction.values[0],
                                                        inline: false
                                                    })
                                                        .setAuthor({
                                                        iconURL: interaction.member.displayAvatarURL({ size: 512 }),
                                                        name: interaction.member.displayName
                                                    });
                                                    Iteration = 0;
                                                    submit.fields.fields.forEach(function (element) {
                                                        embed.addFields([
                                                            {
                                                                name: QuestionMap.get(interaction.values[0])[Iteration],
                                                                value: element.value,
                                                                inline: true
                                                            }
                                                        ]);
                                                        Iteration++;
                                                    });
                                                    channel.send({
                                                        embeds: [embed]
                                                    });
                                                    submit.reply({
                                                        content: "Ticket created at <#".concat(channel.id, ">"),
                                                        ephemeral: true
                                                    });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=ticket.js.map