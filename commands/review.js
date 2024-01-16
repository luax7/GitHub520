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
var discord_js_1 = require("discord.js");
var wokcommands_1 = require("wokcommands");
var config_json_1 = require("../config.json");
var product_name = new discord_js_1.TextInputBuilder()
    .setCustomId('productname_input')
    .setLabel("Product name")
    .setStyle(discord_js_1.TextInputStyle.Short)
    .setMaxLength(100);
var service_rating = new discord_js_1.TextInputBuilder()
    .setCustomId('servicerating_input')
    .setLabel("Service Rating ( 1 to 5)")
    .setStyle(discord_js_1.TextInputStyle.Short)
    .setMaxLength(1);
var product_satisfaction = new discord_js_1.TextInputBuilder()
    .setCustomId('satisfaction_input')
    .setLabel("Product Satisfaction ( 1 to 5 )")
    .setStyle(discord_js_1.TextInputStyle.Short)
    .setMaxLength(100);
var product_recommendation = new discord_js_1.TextInputBuilder()
    .setCustomId('productrecomendation_input')
    .setLabel("Product recomendation ( 1 to 5 )")
    .setStyle(discord_js_1.TextInputStyle.Short)
    .setMaxLength(1);
var product_comments = new discord_js_1.TextInputBuilder()
    .setCustomId('productcomments_input')
    .setLabel("product comments")
    .setStyle(discord_js_1.TextInputStyle.Paragraph);
var rows = [
    new discord_js_1.ActionRowBuilder().addComponents(product_name),
    new discord_js_1.ActionRowBuilder().addComponents(service_rating),
    new discord_js_1.ActionRowBuilder().addComponents(product_satisfaction),
    new discord_js_1.ActionRowBuilder().addComponents(product_recommendation),
    new discord_js_1.ActionRowBuilder().addComponents(product_comments)
];
var p = parseInt;
exports.default = {
    callback: function (commandUsage) {
        var _a;
        var _this = this;
        var interaction = commandUsage.interaction;
        var member = commandUsage.member;
        var modal = (_a = new discord_js_1.ModalBuilder()
            .setCustomId("review_modal")
            .addComponents()
            .setTitle("Review information"))
            .addComponents.apply(_a, rows);
        interaction.showModal(modal);
        interaction.awaitModalSubmit({
            time: 1000 * 60 * 10,
            filter: function (i) { return interaction.member === i.member; }
        }).then(function (value) { return __awaiter(_this, void 0, void 0, function () {
            var f, rating, satisfaction, recomendantion, embed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        f = value.fields.fields;
                        rating = parseInt(f.at(1).value);
                        satisfaction = parseInt(f.at(2).value);
                        recomendantion = parseInt(f.at(3).value);
                        embed = new discord_js_1.EmbedBuilder()
                            .setAuthor({
                            name: "".concat(interaction.member.user.username, "'s review"),
                        })
                            .setThumbnail(member.user.avatarURL())
                            .addFields([
                            {
                                name: "Service Rating",
                                value: returnStar(Math.min(Math.max(rating))),
                                inline: false
                            },
                            {
                                name: "Product Satisfaction",
                                value: returnStar(Math.min(Math.max(satisfaction))),
                                inline: false
                            },
                            {
                                name: "Product Recomendation",
                                value: returnStar(Math.min(Math.max(recomendantion))),
                                inline: false
                            },
                            {
                                name: "Overall satisfaction",
                                value: returnStar(Math.min(Math.max((recomendantion + satisfaction + rating) / 3, 1), 10))
                            },
                            {
                                name: "Comments",
                                value: f.at(4).value
                            }
                        ])
                            .setImage("https://media.discordapp.net/attachments/1140025838650265600/1173014382725320735/Review.png?ex=65b57846&is=65a30346&hm=4267c48871348db564d5770e083e90758e3b8ea154f190fc4f00e522fc829382&=&format=webp&quality=lossless")
                            .setTitle(f.at(0).value);
                        return [4 /*yield*/, commandUsage.client.guilds.fetch(config_json_1.GuildId)];
                    case 1:
                        (_a.sent()).channels.fetch(config_json_1.GuildReviewChannel)
                            .then(function (channel) {
                            channel.send({
                                embeds: [embed]
                            });
                            value.reply({
                                ephemeral: true,
                                content: "Thanks for the review."
                            });
                        }).catch(function (err) {
                            console.log(err);
                            interaction.reply({
                                content: "Runned into an error, contact the admins or generate a ticket",
                                ephemeral: true
                            });
                            return;
                        });
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            if (err) {
                throw err.message;
                return;
            }
        });
    },
    testOnly: false,
    description: "Create a review for a product",
    type: wokcommands_1.CommandType.SLASH,
};
function returnStar(n) {
    var cu = "";
    for (var i = 0; i < n; i++) {
        cu += "⭐";
    }
    return cu;
}
//# sourceMappingURL=review.js.map