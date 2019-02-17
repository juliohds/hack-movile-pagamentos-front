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

  <div v-if="modal" :class="$style.modal"> 
    <div :class="$style.modalWrapper" >
      <svg @click="hideModal" :class="$style.icon" style="width:26px; height:26px; fill: #fff" viewBox="0 0 26 26">
        <path fill="#fff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
      <div :class="$style.content">
        <h1 :class="$style.title"> Sem saldo :( </h1>
        <p :class="$style.title"> Parece que você está sem <strong> saldo </strong>, que tal usar nosso <strong> crédito </strong>? </p>
        <p :class="$style.title"> Você pega: <strong> R$ 20 </strong> </p>
        <p :class="$style.title"> E no proximo mes, paga: <strong> R$ 21,2 </strong> </p>
        <h3 :class="$style.title"> Acreditas </h3>
        <Button> ACEITO </Button>
      </div>
    </div>
  </div>

  <div></div>

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

      hideModal () {
        this.modal = false
      }
    }
  }
</script>

<style lang="scss" module>
.loja {
  margin: 20px 0 0 0;
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

.modal {
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5)
}

.modalWrapper {
  display: flex;
  flex-direction: column;

  padding: 20px 20px 5px 20px;

  width: 100%;
  height: 100%;
  background: #c224c5;
  border-radius: 5px;

  box-shadow:  0px 0px 6px 0px rgba(0, 0, 0, 0.17),
               0px 2px 15px 0px rgba(0, 0, 0, 0.12);
}

.icon {
  margin: 0 0 0 auto;
}

.content {
  overflow: hidden;
  margin: 10px 0 0 0;
  padding: 20px 0 0 0;
  height: 100%;
  color: #ffffff;
}

.title {
  margin: 0 0 20px 0;

  &p {
    font-size: 18px;
  }
}

.call {
  font-size: 18px;
}

</style>