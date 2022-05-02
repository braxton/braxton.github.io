import { defineNuxtPlugin } from "nuxt/app";

import {library, config} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(faGithub, faLinkedinIn, faEnvelope);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
