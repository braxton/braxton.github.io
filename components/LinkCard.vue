<script>
export default {
  props: ['desc', 'icon', 'link', 'name']
}
</script>

<template>
  <div class="md:col-span-1 col-span-3">
    <a :href="link">
      <div class="borderColour p-4 flex flex-col border-2 border-slate-900 rounded-md h-100">
        <p>
          <font-awesome-icon :icon="icon" size="3x" />
        </p>
        <h5 class="font-semibold text-xl mt-4">{{ name }}</h5>
        <p class="mt-2">{{ desc }}</p>
      </div>
    </a>
  </div>
</template>