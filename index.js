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
      members: [
        {
          realName: "Nguyễn Minh Thọ",
          nickname: "Toby",
          avatar: "https://avatars.githubusercontent.com/u/106535893?v=4",
          socials: [
            {
              i: "fa-solid fa-envelope",
              url: "mailto:tobydev27@outlook.com",
            },
            {
              i: "fa-brands fa-github",
              url: "https://github.com/MintoD3v",
            },
          ],
        },
        {
          realName: "Nguyễn Khang",
          nickname: "Mcbeany",
          avatar: "https://avatars.githubusercontent.com/u/77101686?v=4",
          socials: [
            {
              i: "fa-solid fa-envelope",
              url: "mailto:mcbeany7@gmail.com",
            },
            {
              i: "fa-brands fa-github",
              url: "https://github.com/Mcbeany",
            },
          ],
        },
        {
          realName: "Thành Nhân",
          nickname: "NhanAZ",
          avatar: "https://avatars.githubusercontent.com/u/60387689?v=4",
          socials: [
            {
              i: "fa-solid fa-envelope",
              url: "mailto:nhanaz@duck.com",
            },
            {
              i: "fa-brands fa-github",
              url: "https://github.com/NhanAZ",
            },
          ],
        },
        {
          realName: "Nguyễn Hiếu",
          nickname: "DavidGlitch04",
          avatar:
            "https://cdn.discordapp.com/attachments/975424124602187826/989526767184265266/anh-meo-cute-de-thuong-dang-yeu-42.jpg",
          socials: [
            {
              i: "fa-solid fa-envelope",
              url: "mailto:nguyenhieucoder47@gmail.com",
            },
            {
              i: "fa-brands fa-github",
              url: "https://github.com/DavidGlitch04",
            },
            {
              i: "fa-brands fa-facebook",
              url: "https://www.facebook.com/DavidGlitchDev",
            },
          ],
        },
      ],
      plugins: [ /** Only works with 1 plugin, more plugins will make the grid work incorrectly! */
        {
          name: "OhMyPMMP",
          description:
            "📦 A plugin manager for PocketMine-MP downloads plugin from PocketMine-MP official plugin repository.",
          icon: "https://raw.githubusercontent.com/thebigcrafter/oh-my-pmmp/main/assets/icon.png",
          homepage: "https://github.com/thebigcrafter/oh-my-pmmp",
        },
      ],
    };
  },
  methods: {
    redirect2(url) {
      window.open(url, "_blank");
    },
  },
  mounted() {
    AOS.init();
  },
}).mount("#web");
