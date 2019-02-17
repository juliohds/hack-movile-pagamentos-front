<template>
  <Typography tag="h1" type="loja" :class="$style.button">
    {{ nome }}
  </Typography>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      default: 'none'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" module>
  .button {
    margin: 20px 0 0 0;
    padding: 20px 17px;
    border-radius: 15px;
    text-align: center;

    font-size: 50px;

    border: 1px solid black;
  }
</style>
