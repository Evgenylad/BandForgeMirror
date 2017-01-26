<template>
  <div class="addContact"
       v-if="modals.addContactPopupVisible">
    <div class="addContact__wrapper">
      <md-whiteframe class="addContact__container">
        <h4 class="addContact__title">Add Contact</h4>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__firstName">First Name</label>
          <md-input class="addContact__input" id="addContact__firstName"
                    v-model="firstName">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__lastName">Last Name</label>
          <md-input class="addContact__input" id="addContact__lastName"
                    v-model="lastName">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__phone">Phone number</label>
          <md-input class="addContact__input" id="addContact__phone"
                    v-model="phone">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__email">Email</label>
          <md-input class="addContact__input" id="addContact__email"
                    v-model="email">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__fb">facebook</label>
          <md-input class="addContact__input" id="addContact__fb"
                    v-model="social.facebook">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__tw">Twitter</label>
          <md-input class="addContact__input" id="addContact__tw"
                    v-model="social.twitter">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__company">Organization / Company</label>
          <md-input class="addContact__input" id="addContact__company"
                    v-model="company">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__band">Band</label>
          <md-input class="addContact__input" id="addContact__band"
                    v-model="band">
          </md-input>
        </md-input-container>

        <md-input-container class="addContact__inputBlock">
          <label class="addContact__label" for="addContact__comment">Comments / notes</label>
          <md-input class="addContact__input" id="addContact__comment"
                    v-model="comment">
          </md-input>
        </md-input-container>


        <div class="addContact__btnBlock">
          <md-button class="addContact__btn addContact__btn--cancel"
                     @click="cancel()">Cancel</md-button>
          <md-button class="addContact__btn addContact__btn--add"
                     @click="addContact()">Add Contact</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'addContact',
  data () {
    return {
      firstName: null,
      lastName: null,
      phone: null,
      email: null,
      company: null,
      band: null,
      social: {
        www: null,
        twitter: null,
        instagram: null,
        facebook: null,
        other: null
      },
      comment: null
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    cancel () {
      this.$store.dispatch('addContactPopup')
    },
    addContact () {
      let contacts = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone: this.phone,
        email: this.email,
        company: this.company,
        band: this.band,
        social: {
          www: this.social.www,
          twitter: this.social.twitter,
          instagram: this.social.instagram,
          facebook: this.social.facebook,
          other: this.social.other
        },
        comment: this.comment
      }
      this.$store.dispatch('addContact', contacts)
      this.cancel()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/colors'
@import '../../../styles/App/Contacts/addContact'

</style>
