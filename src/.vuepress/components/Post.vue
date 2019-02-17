<template>
  <div :class="$style.post">
    <Avatar :class="$style.avatar" />
    <div>
      <Typography tag="h2">{{ title }}</Typography>
      <div>asdadas</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: 'none'
    },
    title: {
      type: String,
      default: 'none'
    },
    value: {
      type: Number,
      default: 0.00
    }
  }
}
</script>

<style lang="scss" module>
  .post {
    margin: 20px 0 0 0;
    background: red;
    display: flex;
  }

  .avatar {
    margin: 0 20px 0 0;
    flex-shrink: 0;
  }
</style>
