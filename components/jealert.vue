<template lang="pug">
  #grid-alert
    p.alert Livraison gratuite partout au Canada ! <span><nuxt-link to="/shop">Voir nos caps</nuxt-link></span>
</template>

<style lang="stylus" scoped>
#grid-alert
  display flex
  flex-flow row wrap
  justify-content center
  align-content center
  background #FFDBEF
  height 30px
  a
    text-decoration underline
    color white
    &:hover
      opacity 0.5
  p
    color white
    font-size 0.7rem
    font-family 'Roboto', sans-serif
@media only screen and (max-height: 568px)
  #grid-alert
    p
      font-size 0.5rem
</style>
