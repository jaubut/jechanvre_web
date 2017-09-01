<template lang="pug">
  form(@submit.prevent="addEmail")
    .StripeElement
      input.element(v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" v-model="email" placeholder="email" type="email")
      span(span v-show="errors.has('email')" class="help is-danger") {{ errors.first('email') }}
      input.element(required v-model="name" placeholder="nom" type="text")
    button(type="submit") M'alerter
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    addEmail: function () {
      axios.post(`https://jechanvre.firebaseio.com/emails/.json`, this.$data)
        .then(this.onSuccess)
    },
    onSuccess () {
      this.$success('Yahoo! Tu es ajouté :)')
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
form
  display flex
  flex-flow row wrap
  justify-content center
  align-items center
.StripeElement
	background-color: white;
	padding: 8px 12px;
	border-radius: 4px;
	border: 1px solid transparent;
	box-shadow: 0 1px 3px 0 #e6ebf1;
	transition: box-shadow 150ms ease;
button {
	border: none;
	border-radius: 4px;
	outline: none;
	text-decoration: none;
	color: #fff;
	background-image linear-gradient(349deg, #FBDA34, #FFDBEF);
	white-space: nowrap;
	display: inline-block;
	height: 40px;
	line-height: 40px;
	padding: 0 14px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
	border-radius: 4px;
	font-size: 15px;
	font-weight: 600;
	letter-spacing: 0.025em;
	text-decoration: none;
	-webkit-transition: all 150ms ease;
	transition: all 150ms ease;
	float: left;
	margin-left: 12px;
}
button:hover {
	transform: translateY(-1px);
	box-shadow: 0 7px 14px rgba(50, 50, 93, .10), 0 3px 6px rgba(0, 0, 0, .08);
	background-color: #43458b;
  cursor pointer
}
.element
  color: #32325d;
  line-height: 24px;
  font-family: "Lato", sans-serif
  font-size: 16px;
  height: 24px;
  border none
</style>
