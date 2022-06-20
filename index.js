const { createApp } = Vue;

createApp({
  data() {
    return {
      discordInviteLink: "https://discord.gg/cEXW8uK6QA",
    };
  },
  methods: {
    redirect2(url) {
      window.open(url, "_blank");
    },
    mail2(email) {
      window.open("mailto:" + email, "_blank");
    }
  },
}).mount("#web");
