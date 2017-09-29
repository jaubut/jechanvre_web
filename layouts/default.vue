<template>
  <div>
    <JeNav></JeNav>
    <nuxt/>
    <JeFooter></JeFooter>
    <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MjJkNDU1NWYtYjU4Ni00OTdlLWJiNGEtYjk0YzI2N2M3MjZkNjM2MDA4NDk2Njk1MzE1MDU0"></script>
  </div>
</template>

<script>
import JeNav from '~/components/Jenav.vue'
import JeFooter from '~/components/jefooter.vue'

export default {
  components: {
    JeNav,
    JeFooter
  },
  transition: 'page',
  methods: {
    StayOn: function StayOn (event) {
      this.Jehover = !this.Jehover
    }
  }
}
</script>
