<template>
  <div class="app_wrapper">
    <Header />
    <Wrapper :style="{ height: '100%', overflow: 'scroll' }">
      <Content />
    </Wrapper>
  </div>
</template>

<script>
export default {
  methods: {
    wait (delay = 100) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), delay)
      })
    }
  },

  mounted () {
    console.log(this.$page)
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poppins|Roboto');

  html, body, #app {
    width: 100%;
    height: 100%;
    font-family: 'Poppins';
    color: #424344;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app_wrapper {
    margin: auto;
    max-width: 360px;
    height: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;
  }
</style>


