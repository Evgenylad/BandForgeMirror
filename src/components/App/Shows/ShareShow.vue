<template>
  <div class="shareShow"
       v-if="shareShowPopupVisible">
    <div class="shareShow__container">
    <h3 class="shareShow__title">Send Show Information</h3>

    <md-input-container class="shareShow__inputBlock">
      <label class="shareShow__label" for="shareShow__email">Email</label>
      <md-input class="shareShow__input" id="shareShow__email"
      v-model="email">
      </md-input>
    </md-input-container>

    <md-input-container class="shareShow__inputBlock">
      <label class="shareShow__label" for="shareShow__comments">Comments</label>
      <md-input class="shareShow__input" id="shareShow__comments"
      v-model="comments">
      </md-input>
    </md-input-container>

    <div class="shareShow__btnBlock">
      <md-button class="shareShow__btn shareShow__btn--cancel " @click="cancel()">Cancel</md-button>
      <md-button class="shareShow__btn shareShow__btn--add " @click="sendShow()">Send Show Details</md-button>
    </div>
  <div>
  </div>
</template>

<style scoped lang="stylus">
@import '../../../styles/App/Shows/shareShow'

</style>

<script>
/*  import auth from '../../api/user'
*/
  export default {
    name: 'shareShow',
    data () {
      return {
        email: '',
        comments: '',
        shareShowPopupVisible: false
      }
    },
    methods: {
      open () {
        if (!this.shareShowPopupVisible) {
          this.shareShowPopupVisible = true
        }
      },
      cancel () {
        if (this.shareShowPopupVisible) {
          this.shareShowPopupVisible = false
        }
      }
    }
  }
</script>
