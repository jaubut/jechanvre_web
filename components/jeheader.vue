<template lang="pug">
  div
    #grid-header
      slot(name="header-slot")
</template>

<style lang="stylus" scoped>
#grid-header
  display flex
  flex-flow column wrap
  justify-content center
  align-content center
  padding-bottom 25px
  img
    height 125px
    width auto
  p
    font-family: 'Roboto Slab', serif
    font-size: 14px;
    color: #000000;
    letter-spacing: 0;
    text-align center
  h2
    font-family: 'Roboto Slab', serif
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    text-align center
  @media only screen and (min-width: 568px)
    .header-shop
      opacity 0
</style>
