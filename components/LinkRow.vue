<script>
export default {
  data() {
    return {
      platforms: {
        "LinkedIn": {
          icon: ["fab", "linkedin-in"],
          desc: "Curious about what I do? Find all of my professional and educational experience.",
          link: "https://www.linkedin.com/in/braxtonmahr/"
        },
        "GitHub": {
          icon: ["fab", "github"],
          desc: "While most of my work is currently closed-source, feel free to look at the projects I've worked on in the past.",
          link: "https://github.com/braxton"
        },
        "Email": {
          icon: ["fas", "envelope"],
          desc: "If you would like to get in contract with me for any reason, email will net you the fastest response.",
          link: "mailto:braxton@mahr.cc"
        }
      }
    }
  }
}
</script>

<template>
  <div class="md:col-span-1 col-span-3" v-for="p in Object.keys(platforms)" @mouseover="hover = true" @mouseleave="hover = false">
    <a :href="platforms[p].link">
      <div class="borderColour p-4 flex flex-col border-2 border-slate-900 rounded-md h-100">
        <p>
          <font-awesome-icon :icon="platforms[p].icon" size="3x" />
        </p>
        <h5 class="font-semibold text-xl mt-4">{{ p }}</h5>
        <p class="mt-2">{{ platforms[p].desc }}</p>
      </div>
    </a>
  </div>
</template>

export default {
  data() {
    return {
      hover: false,
    };
  }
}