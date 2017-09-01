<template lang="pug">
  div
    JeHeader
      template(slot="header-slot")
        h2.header-shop La casquette
    Produit
</template>

<script>
import JeHeader from '~/components/jeheader.vue'
import Produit from '~/components/produit.vue'

export default {
  components: {
    JeHeader,
    Produit
  }
}
</script>
