const { createApp } = Vue;

createApp({
  data() {
    return {
      discordInviteLink: "https://discord.gg/cEXW8uK6QA",
      cards: [
        {
          i: "fa-solid fa-user-group",
          title: "About Us",
          content:
            "thebigcrafter is a small team of developers who create plugins for Minecraft server software. We started with Oh My PMMP, a async plugin manager for PocketMine.",
        },
        {
          i: "fa-brands fa-github",
          title: "Open Source",
          content:
            "Our plugins are open source, allowing others to learn and contribute.",
        },
        {
          i: "fa-solid fa-puzzle-piece",
          title: "Easy To Use",
          content:
            "Our plugins come with detailed documentation and a Discord server to support everyone who has problems with our plugins.",
        },
      ],
    };
  },
  methods: {
    redirect2(url) {
      window.open(url, "_blank");
    },
    mail2(email) {
      window.open("mailto:" + email, "_blank");
    },
  },
}).mount("#web");
