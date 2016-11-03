<template>
  <div class="addShow">
    <md-whiteframe class="addShow__container">
      <div class="addShow__box">
        <div class="addShow__row">
          <h2 class="addShow__title">Add Show</h2>
          <div class="addShow__activeBand">Active Band:  </div>
        </div>

        <md-input-container class="addShow__inputBlock">
          <label class="addShow__label" for="addShow__username">Name of show</label>
          <md-input class="addShow__input" id="addShow__username"
                    v-model="credentials.showName">
          </md-input>
        </md-input-container>

        <md-input-container class="addShow__inputBlock addShow__inputBlock--date">
          <span class="addShow__label addShow__label--datepicker" for="datepicker">Show Date</span>
          <md-button class="addShow__dateBtn" @click="trigger('.datepickbox input')">
            <md-icon class="addShow__icon">event</md-icon>
          </md-button>
          <datepicker class="addShow__datepicker" id="datepicker" :date="startTime" :option="option"></datepicker>
          <md-button  class="addShow__dateBtn addShow__dateBtn--tick"
                      @click="trigger('.datepickbox input')">
            <md-icon class="addShow__icon addShow__icon--tick">arrow_drop_down</md-icon>
          </md-button>
        </md-input-container>


        <md-input-container class="addShow__inputBlock addShow__inputBlock--chooseBand">
          <span class="addShow__label addShow__label--chooseBand">Add Band</span>
          <md-select class="addShow__select addShow__select--chooseBand" name="chooseBand" id="addShow__chooseBand"
                    v-model="credentials.chooseBand">
            <md-option value="Fight Club">Fight Club</md-option>
            <md-option value="Godfather II">Godfather II</md-option>
            <md-option value="Godfather III">Godfather III</md-option>
          </md-select>
        </md-input-container>

        <md-input-container class="addShow__inputBlock">
          <label class="addShow__label" for="addShow__comments">Comments</label>
          <md-input class="addShow__input" id="addShow__comments"
                    v-model="credentials.comments">
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
import Datepicker from 'vue-datepicker'
export default {
  name: 'addShow',
  components: {Datepicker},
  data () {
    return {
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'MM/DD/YYYY',
        placeholder: 'Add date here',
        inputStyle: {
          'display': 'inline-block',
          'width': '118px',
          'min-height': '40px',
          'padding': '6px',
          'padding-bottom': '0',
          'padding-left': '0',
          'line-height': '22px',
          'font-size': '16px',
          'border': '0',
          'border-bottom': '1px solid #21ce99',
          'border-radius': '2px',
          'color': '#21ce99',
          'background-color': 'inherit'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2016-02-01',
        to: '2016-02-20'
      }],
      credentials: {
        showName: '',
        comment: '',
        chooseBand: ''
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
    },
    trigger (selector) {
      let datepicker = document.querySelector(selector)
      datepicker.click()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../styles/colors'
@import '../../styles/Shows/addShow'

.md-select::after
 color: green-background;

</style>
