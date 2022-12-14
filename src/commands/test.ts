import { ChatInputCommandInteraction, PermissionFlagsBits } from "discord.js";
import { SlashCommand } from "../components/SlashCommand";
import { Test } from "../components/Test";
import { IChannel } from "../utilities/dc-client";

class TestCommand extends SlashCommand {
  constructor() {
    super();
    this.setName("test")
      .setNameLocalizations({ "zh-TW": "測試" })
      .setDescription("Just a test")
      .setDescriptionLocalizations({ "zh-TW": "就是測試" })
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);
  }

  public async execute(
    interaction: ChatInputCommandInteraction,
    channelData: IChannel
  ) {
    return new Promise<IChannel | undefined>(async (resolve) => {
      const component = new Test(interaction, channelData);

      await interaction.reply({
        embeds: component.embed,
        components: component.row,
      });

      resolve(undefined);
    });
  }
}

module.exports = new TestCommand();
