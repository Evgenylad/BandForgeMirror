<template>
  <div class="merch">
    <div class="">
      <div class="merch__container">
        <div class="merch__row merch__row--first">
          <h2 class="merch__title">Merch</h2>
          <md-button class="merch__btn merch__btn--add"
                     @click="openAddInventoryPopup()">Add item</md-button>
        </div>

        <div class="merch__row">
          <div class="merch__item">
            <div class="merch__picture">
              <svg class="merch__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" /></svg>
            </div>
            <div class="merch__itemBottom">
              <div class="merch__info">
                <span class="merch__name">Logo Tee - Black</span>
                <span class="merch__description">White Font / Black Shirt</span>
              </div>
              <svg class="merch__icon merch__icon--star" width="20px" height="19px" viewBox="184 25 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M204,32.244 L196.809,31.627 L194,25 L191.191,31.627 L184,32.244 L189.455,36.971 L187.82,44 L194,40.272 L200.18,44 L198.545,36.971 L204,32.244 L204,32.244 Z M194,38.396 L190.237,40.666 L191.233,36.385 L187.91,33.507 L192.29,33.131 L194,29.095 L195.71,33.131 L200.09,33.507 L196.768,36.385 L197.764,40.666 L194,38.396 L194,38.396 Z" id="Shape" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>

          <div class="merch__item">
            <svg class="merch__picture" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" /></svg>
            <div class="merch__itemBottom">
              <div class="merch__info">
                <span class="merch__name">Logo Tee - Black</span>
                <span class="merch__description">White Font / Black Shirt</span>
              </div>
              <svg class="merch__icon merch__icon--star" width="20px" height="19px" viewBox="184 25 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M204,32.244 L196.809,31.627 L194,25 L191.191,31.627 L184,32.244 L189.455,36.971 L187.82,44 L194,40.272 L200.18,44 L198.545,36.971 L204,32.244 L204,32.244 Z M194,38.396 L190.237,40.666 L191.233,36.385 L187.91,33.507 L192.29,33.131 L194,29.095 L195.71,33.131 L200.09,33.507 L196.768,36.385 L197.764,40.666 L194,38.396 L194,38.396 Z" id="Shape" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
    <addInventory ref="AddInventory"></addInventory>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<script>
import AddInventory from './AddInventory'
import ReportIssue from '../ReportIssue'
import InviteFriend from '../InviteFriend'
export default {
  name: 'merch',
  components: { AddInventory, ReportIssue, InviteFriend },
  data () {
    return {

    }
  },
  methods: {
    openAddInventoryPopup () {
      this.$store.dispatch('addInventoryPopup')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/App/Merch/merch'

</style>
