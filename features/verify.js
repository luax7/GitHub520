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
var config_json_1 = require("../config.json");
var button = new discord_js_1.ButtonBuilder()
    .setCustomId("verifyButton")
    .setLabel("Verify")
    .setStyle(discord_js_1.ButtonStyle.Success);
var row = new discord_js_1.ActionRowBuilder()
    .addComponents([button]);
var RootActionRow = new discord_js_1.ActionRowBuilder()
    .setComponents(new discord_js_1.ButtonBuilder()
    .setLabel("Verify")
    .setStyle(discord_js_1.ButtonStyle.Success)
    .setCustomId("Verify"));
var rootEmbed = new discord_js_1.EmbedBuilder()
    .setTitle("Verify")
    .setDescription("Verify by clicking this button")
    .setColor(discord_js_1.Colors.Green);
exports.default = (function (instance, client) { return __awaiter(void 0, void 0, void 0, function () {
    var guild, tktChannel, RootMessages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.guilds.fetch(config_json_1.GuildId)];
            case 1:
                guild = _a.sent();
                return [4 /*yield*/, guild.channels.fetch(config_json_1.GuildVerifyChannel)];
            case 2:
                tktChannel = _a.sent();
                return [4 /*yield*/, tktChannel.send({
                        embeds: [rootEmbed],
                        components: [RootActionRow]
                    })];
            case 3:
                RootMessages = _a.sent();
                RootMessages.awaitMessageComponent({
                    componentType: discord_js_1.ComponentType.Button
                })
                    .then(function (submit) {
                    submit.member.roles.add(config_json_1.VerifiedMeberRoleId)
                        .catch(function (err) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!err) return [3 /*break*/, 2];
                                    return [4 /*yield*/, submit.deferReply()];
                                case 1:
                                    _a.sent();
                                    submit.followUp({
                                        content: err.message,
                                        ephemeral: true
                                    });
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                    submit.reply({
                        content: "You are verified",
                        ephemeral: true
                    });
                    return;
                })
                    .catch(function (err) {
                    if (err) {
                        return;
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=verify.js.map