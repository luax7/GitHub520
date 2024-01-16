"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builders_1 = require("@discordjs/builders");
var wokcommands_1 = require("wokcommands");
exports.default = {
    callback: function (commandUsage) {
        var _a;
        var embed = new builders_1.EmbedBuilder()
            .setTitle("Pay with paypal")
            .setThumbnail("https://cdn.discordapp.com/attachments/1140025838650265600/1196480873822965810/5_Optic_Logo.png?ex=65b7c8a5&is=65a553a5&hm=164da37d7a32c85aa9406ba8e9aace92374d04cfc5aa74da39a4057cd8dfb754&")
            .setFooter({
            iconURL: "https://cdn.discordapp.com/attachments/1140025838650265600/1196480873822965810/5_Optic_Logo.png?ex=65b7c8a5&is=65a553a5&hm=164da37d7a32c85aa9406ba8e9aace92374d04cfc5aa74da39a4057cd8dfb754&",
            text: "Don't forget to send a screenshot after the payment"
        })
            .setDescription("Make sure to send the Money to F&F ( Family and Friends) \n \n -No Notes \n **PayPal**: https://www.paypal.me/5OPTiC?locale.x=de_DE ");
        (_a = commandUsage.interaction) === null || _a === void 0 ? void 0 : _a.reply({
            embeds: [embed]
        });
    },
    testOnly: false,
    type: wokcommands_1.CommandType.SLASH,
    description: "Gets the link to the server's paypal"
};
//# sourceMappingURL=paypal.js.map