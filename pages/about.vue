<template lang="pug">
  div
    jeHeader
      #grid-header(slot="header-slot")
        img(src="~assets/img/logo-nav.svg")
        p je chanvre est un message.
    .about-text
      h2 Le message de « jechanvre » :

      p Le « jechanvre » n’a pas de description précise, car c’est l’appropriation du chanvre par tous et chacun.

      p « jechanvre », c’est l’opportunité d’exprimer un message. Un message d’espoir, de révolte, d’amour, d’entraide, de partage et de croissance. C’est la célébration de l’unicité de chaque individu. Tout comme le chanvre, chacun de nous possède un potentiel exceptionnel qui mérite d’être partagé.
      .img-text
      h3 Chanvre
      p Nous sommes dévoués à la promotion de ce que nous croyons être la plus belle solution écologique qui soit : le chanvre.

      p Le chanvre est une plante fibreuse avec un impact environnemental positif. Cette plante nous permet de remplacer une panoplie de produits nocifs par une solution saine. Naturellement antifongique, on le cultive sans pesticides, herbicides, grains OGM ou autres produits nocifs. La culture de chanvre améliore la santé des sols en y reconstituant les nutriments essentiels. Tout comme les arbres, le chanvre capture et emmagasine du CO2 dans l’atmosphère. Au-delà des bienfaits sur l’environnement, le chanvre permet d’offrir des solutions durables mieux adaptées à nos besoins réels.

      p Longtemps prohibé en raison des lobbys industriels et de la confusion avec le cannabis (marijuana), le chanvre est désormais légal au Canada depuis bientôt 20 ans.  Nous entrons à l’ère de la renaissance du chanvre partout à travers le monde !

      h2 Le savoir-faire chinois | La Terre du chanvre.

      p Le textile de chanvre est vraisemblablement un des plus vieux textiles à avoir été utilisé par l’Homme, par les moines chinois. Même si l’histoire du chanvre est laissée de côté dans nos livres d’écoles, il n’en demeure pas moins que c’est fascinant de la constater avec du recul.

      p Dans les faits, le plus vieux morceau de papier connu par l’homme est en réalité un parchemin de chanvre fabriqué par les Chinois, datant de 770 av. J-C.  Alors que nous vivons à l’époque de la renaissance du chanvre, la Chine possède encore un savoir-faire unique au monde, étant le seul pays à complètement transformer la fibre de chanvre en fil.

      p Quoi qu’il en soit, notre mission est de profiter de l’expertise chinoise et de populariser les casquettes en chanvre afin d’assumer notre propre production locale dans l’avenir.  À l’extérieur de la Chine, le Canada se démarque déjà comme un leader mondial dans l’industrie du chanvre, notamment en textile.

      p Espérons que nous pouvons paver la voie vers la durabilité, une étape à la fois, avec vous. Merci.

      h2 Matériaux :

      li 30% Chanvre.
      li 40% Coton.
      li 30 % Polyester.

      p Pour produire un jour des casquettes en chanvre écofriendly au Québec, nous devions commencer quelque part.

      p On l’avoue, 30%, ce n’est clairement pas assez. Toutefois, cette version est la meilleure qui soit actuellement.  Plus encore, c’est la porte d’entrée pour le chanvre dans le marché des casquettes.  Ce mélange « tri-blend » unique promet un gage de polyvalence, de confort et de durabilité.  Nous en sommes donc à un point critique : la première étape d’une grande aventure. C’est le moment ou jamais d’appuyer ce projet et de faire de ce rêve une réalité.
</template>

<script>
import jeHeader from '~/components/jeheader.vue'

export default {
  components: {
    jeHeader
  }
}
</script>

<style lang="stylus" scoped>
.about-text
  display flex
  flex-flow column wrap
  justify-content center
  align-content center
  text-align justify
  padding 50px 10%
  line-height 25px
  p
    color darkgrey
    font-family 'Lato', sans-serif
  h2
    color black
    font-family 'Lato', sans-serif
  .img-text
    background-size contain
    background-position center center
    background-image url("~assets/img/imge3.jpg")
    width auto
    height 50vh
</style>
