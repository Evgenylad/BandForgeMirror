<template>
  <div class="addShow">
    <md-whiteframe class="addShow__container">
      <div class="addShow__box">
        <md-input-container class="addShow__inputBlock">
          <label class="addShow__label" for="addShow__username">Name of show</label>
          <md-input class="addShow__input" id="addShow__username"
                    v-model="credentials.showName">
          </md-input>
        </md-input-container>

        <md-input-container class="addShow__inputBlock">
          <label class="addShow__label" for="addShow__pass">Comments</label>
          <md-input class="addShow__input" id="addShow__pass" type="text"
                    v-model="credentials.comment">
          </md-input>
        </md-input-container>
      </div>

      <div class="addShow__btnBlock">
        <md-button class="addShow__btn addShow__btn--cancel " @click="cancel()">Cancel</md-button>
        <md-button class="addShow__btn addShow__btn--add " @click="addShow()">Add Show</md-button>
      </div>

    </md-whiteframe>
  </div>
</template>

<script>
import { API_URL } from '../../../config/constants'

export default {
  name: 'addShow',
  data () {
    return {
      credentials: {
        showName: '',
        comment: ''
      }
    }
  },
  computed: {
    userId () {
      return this.$store.state.userId
    },
    activeBandId () {
      return this.$store.state.activeBandId
    }
  },
  methods: {
    addShow () {
      let show = {
        showName: this.showName,
        comment: this.comment
      }
      this.$http.post(API_URL + '/api/show/createNewShow', show)
      .then((show) => {
        console.log('show added')
        console.log(show)
      })
      .catch((err) => {
        console.log('Band did NOT added: ', err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../styles/colors'
@import '../../styles/Shows/addShow'

</style>
