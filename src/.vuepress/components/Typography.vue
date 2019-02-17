<template>
  <component :is='tag' :class='[$style.heading, $style[tag]]'> 
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  },

  methods: {

  }
}
</script>

<style lang="scss" module>
  .heading {
    color: white;
  }

  .h1 {
    color: white;
  }
  .h2 {
    color: white;
  }
</style>
