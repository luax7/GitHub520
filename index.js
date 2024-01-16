"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var wokcommands_1 = __importDefault(require("wokcommands"));
var client = new discord_js_1.default.Client({
    intents: ["Guilds", "GuildMembers"]
});
client.once("ready", function () {
    console.log("Bot ready for deploy");
    var WOK = new wokcommands_1.default({
        client: client,
        commandsDir: __dirname + "/commands",
        featuresDir: __dirname + "/features",
        testServers: ["1139974468173836469"]
    });
});
client.login("MTE5NjQ3MTkxMjAyNTU3NTQ3NQ.GtLuhw.JcXdqXNJNqmxl9XUjnSroCg8896abcOHmavgDA");
//# sourceMappingURL=index.js.map