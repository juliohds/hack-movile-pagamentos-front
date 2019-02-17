<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>


<style module>
  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
