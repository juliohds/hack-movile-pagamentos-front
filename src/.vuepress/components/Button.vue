<template>
  <Typography tag="h2" :class="$style.button">
    <slot />
  </Typography>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="scss" module>
  .button {
    padding: 10px 17px;
    color: #fff;
    background: #61da16;
    border-radius: 10px;
    box-shadow:  0px 0px 6px 0px rgba(0, 0, 0, 0.17),
                 0px 2px 15px 0px rgba(0, 0, 0, 0.12);
    text-align: center;
    font-size: 20px;
  }
</style>
