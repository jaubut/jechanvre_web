<template lang="pug">
  div
    jeHeader
      #grid-header(slot="header-slot")
        img(src="~assets/img/logo-nav.svg")
        p jechanvre. Participes au mouvement. En prévente, livraison mi-septembre.
    .about-text
      h2 Le message de « jechanvre » :

      p Le « jechanvre » n’a pas de description précise, car c’est l’appropriation du chanvre par tous et chacun.

      p « jechanvre », c’est l’opportunité d’exprimer un message. Un message d’espoir, de révolte, d’amour, d’entraide, de partage et de croissance. C’est la célébration de l’unicité de chaque individu. Tout comme le chanvre, chacun de nous possède un potentiel exceptionnel qui mérite d’être partagé.

      .img-text
      h3.text-big Pourquoi le chanvre?
      span Nous sommes dévoués à promouvoir de ce que nous croyons être la plus belle solution écologique qui soit: le chanvre.

      p Le chanvre est une plante fibreuse avec un impact environnemental positif. Cette plante nous permet de remplacer une panoplie de produits nocifs par une solution saine. Naturellement antifongique, on le cultive sans pesticides, herbicides, grains OGM ou autres produits nocifs. La culture de chanvre améliore la santé des sols en y reconstituant les nutriments essentiels. Tout comme les arbres, le chanvre capture et emmagasine du CO2 dans l’atmosphère. Au-delà des bienfaits sur l’environnement, le chanvre permet d’offrir des solutions durables mieux adaptées à nos besoins réels.

      p Longtemps prohibé en raison des lobbys industriels et de la confusion avec le cannabis (marijuana), le chanvre est désormais légal au Canada depuis bientôt 20 ans.  Nous entrons à l’ère de la renaissance du chanvre partout à travers le monde !

      h2 Le projet & le choix des matériaux
      p Pour produire un jour des casquettes en chanvre ecofriendly au Québec, nous devions commencer quelque part. On l’avoue, 30%, ce n’est clairement pas assez. Toutefois, ce mélange « tri-blend » unique (30% chanvre, 40% coton et 30% polyester) est un gage de polyvalence, de confort et de durabilité.  Mieux encore, c’est la porte d’entrée pour le chanvre dans le marché des casquettes.  Nous en sommes donc à un point critique : la première étape d’une grande aventure. <strong>100% des profits de cette collection seront réinvestis pour produire une ligne “made in Canada” dans l’avenir.</strong>

      ol En toute transparence, voici notre plan pour l’aveniri:
        li étape: Production d’une ligne de casquettes en chanvre (trois modèles).
        li étape: Fabriquer des tuques en laines & chanvre, made in Québec.
        li étape: Fabriquer des casquettes avec un tissu composé de chanvre & d’autres fibres naturelles, made in Québec.
        li étape: Produire des tuques écologiques 100% au Québec (incluant la fibre)
        li étape: Produire des casquettes écologiques 100% au Quebec (incluant la fibre)
        li étape: Produire des chapeaux de chanvre de façon équitable en Haïti.
        li étape: manteaux/vestes/chaussures ?

      h2 Fabriqué grâce au savoir-faire chinois 我大麻.

      p Le textile de chanvre est vraisemblablement un des plus vieux textiles à avoir été utilisé par l’Homme (par les moines chinois). Même si l’histoire du chanvre est laissée de côté dans nos livres d’écoles, il n’en demeure pas moins que c’est fascinant de la constater avec du recul.

      p Dans les faits, le plus vieux morceau de papier connu par l’homme est en réalité un parchemin de chanvre fabriqué par les Chinois, datant de 770 av. J-C.  Alors que nous vivons à l’époque de la renaissance du chanvre, la Chine possède encore un savoir-faire unique au monde, étant le seul pays à complètement transformer la fibre de chanvre en fil.

      p Quoi qu’il en soit, notre mission est de profiter de l’expertise chinoise et de populariser les casquettes en chanvre afin d’assumer notre propre production locale dans l’avenir.  À l’extérieur de la Chine, le Canada se démarque déjà comme un leader mondial dans l’industrie du chanvre, notamment en textile.

      blockquote
        q C’est le moment ou jamais d’appuyer ce projet et de faire de ce rêve une réalité. Chanvrons le monde!
        p.signature - Darko Popovic
      .center
        img(src="~assets/img/chinahemp.png", width="400px", height="300px", alt="Hemp China", title="Chanvre en Chine")
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
    color rgb(116, 112, 111)
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
.text-big
  font-size 2rem
ol, li
  font-family 'Lato', sans-serif
  font-size 1.1rem
strong
  color black
blockquote
  text-align right
  font-size 1.5rem
  color rgb(116, 112, 111)
.signature
  font-size 0.7rem
  color rgba(116, 112, 111, 0.7)
  text-align right
.center
  text-align center
</style>
