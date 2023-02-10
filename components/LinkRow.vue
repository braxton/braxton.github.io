<script>
import LinkCard from "./LinkCard.vue"
export default {
  data() {
    return {
      linkedin: {
        icon: ["fab", "linkedin-in"],
        desc: "Curious about what I do? Find all of my professional and educational experience.",
        link: "https://www.linkedin.com/in/alicjamahr/"
      },
      gh: {
        icon: ["fab", "github"],
        desc: "While most of my work is currently closed-source, feel free to look at the projects I've worked on in the past.",
        link: "https://github.com/braxton"
      },
      email: {
        icon: ["fas", "envelope"],
        desc: "If you would like to get in contract with me for any reason, email will net you the fastest response.",
        link: "mailto:alicja@mahr.cc"
      }
    };
  },
  components: { LinkCard }
}
</script>

<template>
  <LinkCard name="LinkedIn" :desc="linkedin.desc" :icon="linkedin.icon" :link="linkedin.link" />
  <LinkCard name="GitHub" :desc="gh.desc" :icon="gh.icon" :link="gh.link" />
  <LinkCard name="Email" :desc="email.desc" :icon="email.icon" :link="email.link" />
</template>