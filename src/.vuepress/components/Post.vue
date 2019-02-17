<template>
  <div :class="$style.post">
    <Avatar :class="$style.avatar" />
    <div>
      <Typography tag="h2" :class="$style.title">{{ title }}</Typography>
      <Typography tag="p" size="large" :class="$style.description"> {{ description }}</Typography>
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
    description: {
      type: String,
      default: 0.00
    }
  }
}
</script>

<style lang="scss" module>
  .post {
    margin: 20px 0 0 0;
    display: flex;
  }

  .avatar {
    margin: 0 20px 0 0;
    flex-shrink: 0;
  }

  .title {
    margin: 0 0 5px 0;
  }
</style>
