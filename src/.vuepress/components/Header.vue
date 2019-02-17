<template>
  <Wrapper :class="$style.header"> 
    <Typography tag="h1"> 
      APP TITLE
    </Typography>
  </Wrapper>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" module>
  .header {
    padding-top: 10px;
    padding-bottom: 10px;
    background: red;
  }
</style>
