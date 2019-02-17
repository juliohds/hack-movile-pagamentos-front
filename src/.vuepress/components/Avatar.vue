<template>
  <img :class="[$style.avatar, $style[size]]" />
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'none'
    },
    size: {
      type: String,
      default: 'medium'
    }
  }
}
</script>

<style lang="scss" module>
  .avatar {
    background: blue;
    display: flex;
    border-radius: 100%;
  }

  .medium {
    width: 50px;
    height: 50px;
  }
</style>
