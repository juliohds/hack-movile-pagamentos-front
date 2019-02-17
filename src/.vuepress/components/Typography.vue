<template>
  <component :is='tag' :class='[$style.typography, $style[tag], $style[size], $style[type]]'> 
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p'
    },

    type: {
      type: String,
      default: 'none'
    },

    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {

  }
}
</script>

<style lang="scss" module>
  .typography {
    color: #424344;
    font-family: 'Poppins'
  }

  .h1 {
    // color: white;
  }
  .h2 {
    // color: white;
    font-size: 20px;
  }

  .p {
    &.normal {
      font-size: 14px;
    }
    &.large {
      font-size: 16px;
    }
  }

  .special {
    font-weight: 600;
  }

  .loja {
    font-size: 30px !important;
    font-weight: 600;
  }
</style>
