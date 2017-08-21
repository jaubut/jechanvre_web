<template lang="pug">
  #grid-nav
    nuxt-link(to="/")
      h1.title-nav je chanvre
    .menu-items
      nuxt-link.link-desk(to="/about") about
      nuxt-link.link-desk.active(to="/shop") shop
      a.snipcart-checkout.snipcart-summary(href="#")
        p.cart-desk cart(<span class="snipcart-total-items">0</span>)
    a.cart-mobile.snipcart-checkout.snipcart-summary(href="#") cart(<span class="snipcart-total-items">0</span>)
    i.fa.fa-bars(@click="show = !show")
    transition(name="fade")
      .menu-mobile(v-if="show", @click="show = !show")
        nuxt-link.link-mobile(to="/about") about
        nuxt-link.link-mobile(to="/shop") shop
        p je chanvre
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
@media only screen and (max-width: 568px)
  #grid-nav
    display flex
    flex-flow row wrap
    justify-content space-between
    padding 10px 25px
  .fa-bars
    margin 10px 0
    &:hover
      cursor pointer
      color #FBDA34
  .cart-mobile
    color #FBDA34
    margin 7px 0
    font-size: 1rem
    letter-spacing: 0;
    &:hover
      cursor pointer
  .menu-mobile
    display flex
    flex-flow column wrap
    justify-content center
    align-content center
    position fixed
    bottom 0
    left 0
    height 90vh
    width 100%
    background #FBDA34
    z-index 1
    p
      position absolute
      bottom 0
      right 0
      padding 15px
      font-size 0.9rem
    .link-mobile
      color black
      text-decoration none
      font-size 2rem
      font-family 'Roboto Slab', serif
      padding 5px 15px
      text-align center
      &:hover
        color rgba(0,0,0,0.6)
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
        border-radius: 5px;
  .menu-items
    opacity 0
  .cart-desk
    opacity 0
  .link-desk
    opacity 0
  .fade-enter-active, .fade-leave-active
    transition: opacity .3s
  .fade-enter, .fade-leave-to
    opacity: 0
@media only screen and (min-width: 568px)
  #grid-nav
    display grid
    grid-template 1fr / 80% 20%
    padding 10px 25px
  a
    max-width 100px
  .title-nav
    font-size 1rem
    grid-area 1/1/2/2
    text-align left
    width auto
  .menu-items
    grid-area 1/2/2/3
    display flex
    flex-flow row wrap
    justify-content space-around
    align-content center
  .link-desk
    font-family 'Roboto Slab', serif
    text-decoration none
    margin 10px 0
    padding 5px 10px
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    &:hover
      background: #FFFFFF;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
      border-radius 5px
  .active
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
    border-radius 5px
    &:hover
      background: #FBDA34;
      background-image linear-gradient(349deg, #FBDA34, #FFDBEF);
      animation gradientMove 2s ease infinite
      cursor pointer

  .cart-desk
    color #FBDA34
    &:hover
      cursor pointer
  .menu-mobile
    opacity 0
  .cart-mobile
    opacity 0
  .fa-bars
    opacity 0
@@keyframes gradientMove
      0%
          background-position 78% 0%
      50%
          background-position 23% 100%
      100%
          background-position 78% 0%
</style>
