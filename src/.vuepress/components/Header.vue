<template>
  <Wrapper :class="$style.header"> 
    <Typography tag="h1" type='special' :class="$style.title">
      <span v-if="$page.frontmatter.backButton" @click="$router.back()"> 
        <svg style="width:28px;height:28px" viewBox="0 0 24 24">
            <path fill="#000000" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </svg>
       </span>    Wallet
    </Typography>
    <Typography tag="p" :class="$style.value">
      <strong>SALDO - R$: {{ saldo }}</strong> 
    </Typography>
    <Typography tag="p" :class="[$style.value, $style.credito]">
      <strong>CRÉDITO - R$: {{ credito }}</strong>
    </Typography>

  </Wrapper>
</template>

<script>
export default {
  computed: {
    saldo: {
      get () {
        return this.$store.state.saldo
      }
    },
    credito: {
      get () {
        return this.$store.state.credito
      }
    }
  }
}
</script>

<style lang="scss" module>
  .header {
    padding-top: 15px;
    padding-bottom: 10px;
  }

  .title {
    margin: 0 0 10px 0
  }
  .value {
    width: fit-content;
    padding: 5px 7px;
    margin: 0 0 5px 0;
    border: 1px solid #424344;
    border-radius: 15px;
  }

  .credito {
    color: #d500d8 !important;
    border-color: #d500d8 !important;
  }
</style>
