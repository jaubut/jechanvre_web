<template lang="pug">
  #grid-footer
    nuxt-link(to="/")
      h1.title-nav je chanvre
    .social-box
      a(href="https://www.facebook.com/jechanvre/")
        img.social-btn(src="~assets/img/fb_logo.png")
      a(href="https://www.instagram.com/chanvrequebec/")
        img.social-btn(src="~assets/img/Instagram_logo.svg")
    img.img-footer(src="~assets/img/logo-nav.svg")
</template>

<script>
</script>

<style lang="stylus" scoped>
#grid-footer
  display flex
  flex-flow row wrap
  justify-content space-between
  align-content center
  padding 25px
.social-box
  display flex
  justify-content center
  align-content center
.social-btn
  display flex
  justify-content center
  align-content center
  height 25px
  width 25px
  margin 5px
  &:hover
    cursor pointer
  p
    font-family 'Roboto Slab', serif
    font-weight: 400
    color: #000000;
    letter-spacing: 0;
.img-footer
  height 50px
  width auto
</style>
