<template>
  <div class="contacts">
    <div class="contacts__row contacts__row--first">
      <h2 class="contacts__title">Contacts</h2>
      <md-button class="contacts__btn contacts__btn--add" @click="openAddContactPopup()">Add contact</md-button>
    </div>

    <div class="contacts__container">
      <div class="contacts__row contacts__row--search">
        <svg class="contacts__icon contacts__icon--search" width="18px" height="18px" viewBox="30 38 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Sketch.</desc><defs></defs>
          <path d="M43.36248,49.83464 L43.1076,50.08952 L42.15504,49.13696 C43.10688,47.9612 43.68,46.4672 43.68,44.84 C43.68,41.06864 40.61136,38 36.84,38 C33.06864,38 30,41.06864 30,44.84 C30,48.61136 33.06864,51.68 36.84,51.68 C38.4672,51.68 39.9612,51.10688 41.13696,50.15504 L42.08952,51.1076 L41.83464,51.36248 L46.15608,55.68392 L47.6832,54.1568 L43.36248,49.83464 L43.36248,49.83464 Z M36.84072,49.52 C34.26024,49.52 32.16072,47.42048 32.16072,44.84 C32.16072,42.25952 34.26024,40.16 36.84072,40.16 C39.4212,40.16 41.52072,42.25952 41.52072,44.84 C41.52072,47.42048 39.42048,49.52 36.84072,49.52 L36.84072,49.52 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
        </svg>
      </div>
      <div class="contacts__row contacts__row--total">
        <div class="contacts__total">
          <span class="contacts__totalSelected">1</span class="contacts__totalDescription">
          <span>item selected</span>
        </div>

        <div class="contacts__btnBlock">
          <svg class="contacts__icon contacts__icon--delete" width="15px" height="18px" viewBox="0 0 15 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc><defs></defs><path d="M1.04686036,16 C1.04686036,17.1 1.94686036,18 3.04686036,18 L11.0468604,18 C12.1468604,18 13.0468604,17.1 13.0468604,16 L13.0468604,4 L1.04686036,4 L1.04686036,16 L1.04686036,16 Z M14.0468604,1 L10.5468604,1 L9.54686036,0 L4.54686036,0 L3.54686036,1 L0.0468603561,1 L0.0468603561,3 L14.0468604,3 L14.0468604,1 L14.0468604,1 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
          </svg>

          <svg class="contacts__icon contacts__icon--dots" width="5px" height="16px" viewBox="3 0 5 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc><defs></defs><path d="M5.75445173,4 C6.85445173,4 7.75445173,3.1 7.75445173,2 C7.75445173,0.9 6.85445173,0 5.75445173,0 C4.65445173,0 3.75445173,0.9 3.75445173,2 C3.75445173,3.1 4.65445173,4 5.75445173,4 L5.75445173,4 Z M5.75445173,6 C4.65445173,6 3.75445173,6.9 3.75445173,8 C3.75445173,9.1 4.65445173,10 5.75445173,10 C6.85445173,10 7.75445173,9.1 7.75445173,8 C7.75445173,6.9 6.85445173,6 5.75445173,6 L5.75445173,6 Z M5.75445173,12 C4.65445173,12 3.75445173,12.9 3.75445173,14 C3.75445173,15.1 4.65445173,16 5.75445173,16 C6.85445173,16 7.75445173,15.1 7.75445173,14 C7.75445173,12.9 6.85445173,12 5.75445173,12 L5.75445173,12 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
          </svg>
        </div>
      </div>

      <div class="contacts__row contacts__row--odd">
        <md-checkbox class="contacts__cell contacts__cell--checkbox md-primary" name="checkbox" v-model="checkbox" id="checkbox"></md-checkbox>
        <div class="contacts__cell contacts__cell--name">Contact name</div>
        <div class="contacts__cell contacts__cell--email">Email</div>
        <div class="contacts__cell contacts__cell--phone">Phone number</div>
        <div class="contacts__cell contacts__cell--company">Organization</div>
        <div class="contacts__cell contacts__cell--social">Social media</div>
      </div>

      <div class="contacts__row contacts__row--odd contacts__row--withData" v-for="contact in contacts">
        <md-checkbox class="contacts__cell contacts__cell--checkbox md-primary" name="checkbox"
                     v-model="checkbox"></md-checkbox>
        <router-link class="contacts__cell contacts__cell--name" to="/index/showdetails">{{ contact.name }}</router-link>
        <div class="contacts__cell contacts__cell--email">{{ contact.email }}</div>
        <div class="contacts__cell contacts__cell--phone">{{ contact.phone }}</div>
        <div class="shows__cell contacts__cell--company">{{ contact.company }}</div>
        <div class="contacts__cell contacts__cell--social">
          <a class="contacts__link contacts__link--social" href="#" target="_blank">
            <svg class="contacts__icon contacts__icon--site" width="20px" height="20px" viewBox="786 14 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Created with Sketch.</desc><defs></defs><path d="M796,14 C790.5,14 786,18.5 786,24 C786,29.5 790.5,34 796,34 C801.5,34 806,29.5 806,24 C806,18.5 801.5,14 796,14 L796,14 Z M795,31.9 C791.1,31.4 788,28 788,24 C788,23.4 788.1,22.8 788.2,22.2 L793,27 L793,28 C793,29.1 793.9,30 795,30 L795,31.9 L795,31.9 Z M801.9,29.4 C801.6,28.6 800.9,28 800,28 L799,28 L799,25 C799,24.4 798.6,24 798,24 L792,24 L792,22 L794,22 C794.6,22 795,21.6 795,21 L795,19 L797,19 C798.1,19 799,18.1 799,17 L799,16.6 C801.9,17.8 804,20.7 804,24 C804,26.1 803.2,28 801.9,29.4 L801.9,29.4 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
            </svg>
          </a>
          <a class="contacts__link contacts__link--social" href="#" target="_blank">
            <svg class="contacts__icon contacts__icon--tw" width="20px" height="20px" viewBox="816 14 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>Created with Sketch.</desc><defs></defs><path d="M834,14 L818,14 C816.9,14 816,14.9 816,16 L816,32 C816,33.1 816.9,34 818,34 L834,34 C835.1,34 836,33.1 836,32 L836,16 C836,14.9 835.1,14 834,14 L834,14 Z M831.7,21.3 C831.6,25.9 828.7,29.1 824.3,29.3 C822.5,29.4 821.2,28.8 820,28.1 C821.3,28.3 823,27.8 823.9,27 C822.6,26.9 821.8,26.2 821.4,25.1 C821.8,25.2 822.2,25.1 822.5,25.1 C821.3,24.7 820.5,24 820.4,22.4 C820.7,22.6 821.1,22.7 821.5,22.7 C820.6,22.2 820,20.3 820.7,19.1 C822,20.5 823.6,21.7 826.2,21.9 C825.5,19.1 829.3,17.6 830.8,19.5 C831.5,19.4 832,19.1 832.5,18.9 C832.3,19.6 831.9,20 831.4,20.4 C831.9,20.3 832.4,20.2 832.8,20 C832.7,20.5 832.2,20.9 831.7,21.3 L831.7,21.3 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
            </svg>
          </a>

          <a class="contacts__link contacts__link--social" href="#" target="_blank">
            <svg class="contacts__icon contacts__icon--inst" width="20px" height="20px" viewBox="846 14 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>Created with Sketch.</desc><defs></defs><path d="M864,14 L848,14 C846.9,14 846,14.9 846,16 L846,32 C846,33.1 846.9,34 848,34 L864,34 C865.1,34 866,33.1 866,32 L866,16 C866,14.9 865.1,14 864,14 L864,14 Z M856,20 C858.2,20 860,21.8 860,24 C860,26.2 858.2,28 856,28 C853.8,28 852,26.2 852,24 C852,21.8 853.8,20 856,20 L856,20 Z M848.5,32 C848.2,32 848,31.8 848,31.5 L848,23 L850.1,23 C850,23.3 850,23.7 850,24 C850,27.3 852.7,30 856,30 C859.3,30 862,27.3 862,24 C862,23.7 862,23.3 861.9,23 L864,23 L864,31.5 C864,31.8 863.8,32 863.5,32 L848.5,32 L848.5,32 Z M864,18.5 C864,18.8 863.8,19 863.5,19 L861.5,19 C861.2,19 861,18.8 861,18.5 L861,16.5 C861,16.2 861.2,16 861.5,16 L863.5,16 C863.8,16 864,16.2 864,16.5 L864,18.5 L864,18.5 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
            </svg>
          </a>

          <a class="contacts__link contacts__link--social" href="#" target="_blank">
            <svg class="contacts__icon contacts__icon--fb" width="20px" height="20px" viewBox="875 14 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>Created with Sketch.</desc><defs></defs><path d="M893,14 L877,14 C875.9,14 875,14.9 875,16 L875,32 C875,33.1 875.9,34 877,34 L893,34 C894.1,34 895,33.1 895,32 L895,16 C895,14.9 894.1,14 893,14 L893,14 Z M892,16 L892,19 L890,19 C889.4,19 889,19.4 889,20 L889,22 L892,22 L892,25 L889,25 L889,32 L886,32 L886,25 L884,25 L884,22 L886,22 L886,19.5 C886,17.6 887.6,16 889.5,16 L892,16 L892,16 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
            </svg>
          </a>

          <a class="contacts__link contacts__link--social" href="#" target="_blank">
            <svg class="contacts__icon contacts__icon--other" width="20px" height="20px" viewBox="905 14 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>Created with Sketch.</desc><defs></defs><path d="M923,14 L907,14 C905.9,14 905,14.9 905,16 L905,32 C905,33.1 905.9,34 907,34 L923,34 C924.1,34 925,33.1 925,32 L925,16 C925,14.9 924.1,14 923,14 L923,14 Z M919,23 L916,23 L916,26.9 C916,27.6 916.1,28 917.1,28 L919,28 L919,31 C919,31 918,31.1 916.9,31.1 C914.3,31.1 913,29.5 913,27.7 L913,23 L911,23 L911,20.2 C913.4,20 913.6,18.2 913.8,17 L916,17 L916,20 L919,20 L919,23 L919,23 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
            </svg>
          </a>
        </div>

        <svg class="contacts__icon contacts__icon--dots" width="5px" height="16px" viewBox="3 0 5 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc><defs></defs><path d="M5.75445173,4 C6.85445173,4 7.75445173,3.1 7.75445173,2 C7.75445173,0.9 6.85445173,0 5.75445173,0 C4.65445173,0 3.75445173,0.9 3.75445173,2 C3.75445173,3.1 4.65445173,4 5.75445173,4 L5.75445173,4 Z M5.75445173,6 C4.65445173,6 3.75445173,6.9 3.75445173,8 C3.75445173,9.1 4.65445173,10 5.75445173,10 C6.85445173,10 7.75445173,9.1 7.75445173,8 C7.75445173,6.9 6.85445173,6 5.75445173,6 L5.75445173,6 Z M5.75445173,12 C4.65445173,12 3.75445173,12.9 3.75445173,14 C3.75445173,15.1 4.65445173,16 5.75445173,16 C6.85445173,16 7.75445173,15.1 7.75445173,14 C7.75445173,12.9 6.85445173,12 5.75445173,12 L5.75445173,12 Z" id="Shape" stroke="none" fill-opacity="0.54" fill="#000000" fill-rule="evenodd"></path>
        </svg>
      </div>
    </div>

    <addContact></addContact>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<script>
import AddContact from './AddContact'
import ReportIssue from '../ReportIssue'
import InviteFriend from '../InviteFriend'
import { mapState } from 'vuex'
export default {
  name: 'contacts',
  components: { AddContact, ReportIssue, InviteFriend },
  data () {
    return {
      checkbox: false
    }
  },
  computed: mapState({
    contacts: state => state.onload.contacts
  }),
  methods: {
    openAddContactPopup () {
      this.$store.dispatch('addContactPopup')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/App/Contacts/contacts'

</style>
