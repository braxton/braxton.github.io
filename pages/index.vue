<style>
.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>

<template>
  <div
    class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base">
    <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full z-20">
      <SiteHeader />
      <AboutMe />
      <LinkRow />
      <Spotlight />
    </div>
  </div>
</template>
