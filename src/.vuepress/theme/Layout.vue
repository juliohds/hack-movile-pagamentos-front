<template>
  <div class="app_wrapper">
    <Header ref="header" />
    <Wrapper :style="{ height: $page.frontmatter.content.height, overflow: 'scroll' }">
      <Content />
    </Wrapper>
    <Footer ref='footer' />
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
  html, body, #app {
    width: 100%;
    height: 100%;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app_wrapper {
    margin: auto;
    max-width: 360px;
  }
</style>


