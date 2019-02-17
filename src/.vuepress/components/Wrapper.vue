<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>


<style module>
  .wrapper {
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
