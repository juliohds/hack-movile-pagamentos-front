---

backButton: true

---

<template>

  <Typography tag="h1" type="loja" :class="$style.loja"> Hamburgueria X </Typography>

  <div :class="$style.product">
    <Typography tag="h2" :class="$style.title"> X-Tudo </Typography>
    <Typography tag="h2" :class="$style.value"> R$ 20,00 </Typography>
  </div>
  <Button :class="$style.button" @click.native="showModal"> COMPRAR </Button>

  <div v-if="modal" :class="style.modal"> 
    dasdasd
  </div>

</template>

<script>
  export default {
    data () {
      return {
        modal: false
      }
    },

    methods: {
      showModal () {
        this.modal = true
      },

      hiddeModal () {
        this.modal = false
      }
    }
  }
</script>

<style lang="scss" module>
.loja {
  margin: 20px 0 0 0
}

.product {
  margin: 20px 0 0 0; 
  padding: 10px 17px;
  border: 1px solid #d500d8; 
  border-radius: 15px;
}

.title {
  margin: 0 0 5px 0;
}

.value {
  margin: 0;
  color: #d500d8 !important;
}

.button {
  width: fit-content; 
  margin: 5px 0 0 auto; 
  background: #d500d8 !important;
  box-shadow: none !important;
  font-size: 18px !important;
}

</style>