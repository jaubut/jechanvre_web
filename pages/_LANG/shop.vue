<template lang="pug">
  div
    JeHeader
      template(slot="header-slot")
        h2.header-shop La casquette
    JeProduit
</template>

<script>
import JeHeader from '~/components/jeheader.vue'
import JeProduit from '~/components/produit.vue'

export default {
  components: {
    JeHeader,
    JeProduit
  }
}
</script>
