<template lang="pug">
  div
    JeHeader
      template(slot="header-slot")
        img(src="~assets/img/logo-nav.svg")
        p jechanvre. Participe au mouvement. En vente maintenant.
        Jeform
    nuxt-link(to="/shop")
      .grid-index
        .item-quatre
          JePhoto
            img.img-demi(slot="photoTrois", src="~assets/img/img12.jpg")
</template>

<script>
import JeHeader from '~/components/jeheader.vue'
import JePhoto from '~/components/jephoto.vue'
import Jeform from '~/components/jeform.vue'

export default {
  components: {
    JeHeader,
    JePhoto,
    Jeform
  }
}
</script>

<style lang="stylus" scoped>
.img-full
  grid-area 1/1/3/3
  width 100%
  height auto
.img-quart
  width 100%
  height auto
.un
  grid-area 1/1/2/2
.deux
  grid-area 1/2/2/3
.trois
  grid-area 2/1/3/2
.quattre
  grid-area 2/2/3/3
.img-demi
  grid-area 1/1/2/3
  height auto
  width 100%
@media only screen and (min-width: 568px)
  .grid-index
    display grid
    grid-template 150px 1fr / 1fr 1fr 1fr
    grid-gap 9px
    align-items: end
    margin-top -100px
    .item-un
      grid-area 1/2/2/3
      width 100%
      height auto
    .item-deux
      grid-area 1/1/2/2
      width 100%
      height auto
    .item-trois
      grid-area 1/3/2/4
      width 100%
      height auto
    .item-quatre
      grid-area 2/1/3/4
      width 100%
      height auto
    .img-demi
      grid-area 1/1/3/3
</style>
