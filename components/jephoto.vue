<template lang="pug">
  #grid-photo
    slot(name="photoUn")
    slot(name="photoDeux")
    slot(name="photoTrois")
    slot(name="photoQuattre")
</template>

<style lang="stylus" scoped>
#grid-photo
  display grid
  grid-template 1fr 1fr / 1fr 1fr
  justify-self center
  align-self center
</style>
