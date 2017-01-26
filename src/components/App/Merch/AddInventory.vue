<template>
  <div class="addInventory"
       v-if="modals.addInventoryPopupVisible">
    <div class="addInventory__wrapper">
      <md-whiteframe class="addInventory__container">
        <h4 class="addInventory__title">Add Inventory</h4>

        <md-input-container class="addInventory__inputBlock">
          <label class="addInventory__label" for="addInventory__itemName">Item Name</label>
          <md-input class="addInventory__input" id="addInventory__itemName"
                    v-model="item.name">
          </md-input>
        </md-input-container>

        <md-input-container class="addInventory__inputBlock">
          <label class="addInventory__label" for="addInventory__itemPrice">Item Price</label>
          <md-input class="addInventory__input" id="addInventory__itemPrice"
                    v-model="item.price">
          </md-input>
        </md-input-container>

        <md-input-container class="addInventory__inputBlock addInventory__inputBlock--last">
          <label class="addInventory__label" for="addInventory__itemDescription">Item Description</label>
          <md-input class="addInventory__input" id="addInventory__itemDescription"
                    v-model="item.description">
          </md-input>
        </md-input-container>

        <h4 class="addInventory__title addInventory__title--image">Display Image</h4>
        <div class="addInventory__dragAndDrop" id="drag_drop" draggable="true">
          <span class="addInventory__dragAndDropDescription">Select a file or drag and drop</span>
          <svg class="addInventory__icon" width="20px" height="20px" viewBox="181 98 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc><defs></defs><g id="Plus" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(181.000000, 98.000000)" stroke-linecap="round" stroke-linejoin="round"><g id="Icon" transform="translate(2.000000, 2.000000)" stroke="#CCCCCC"><path d="M0,8 L16,8" id="Line-4"></path><path d="M8,0 L8,16" id="Line-3"></path></g></g>
          </svg>
        </div>

        <div class="addInventory__btnBlock">
          <md-button class="addInventory__btn addInventory__btn--cancel"
                     @click="cancel()">Cancel</md-button>
          <md-button class="addInventory__btn addInventory__btn--add"
                     @click="addItem()">Add Item</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'addInventory',
  data () {
    return {
      item: {
        name: null,
        price: null,
        description: null
      }
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    cancel () {
      this.$store.dispatch('addInventoryPopup')
    },
    addItem () {
      let item = {
        variant_name: this.item.name,
        variant_desc: this.item.description
      }
      this.$store.dispatch('addInventory', item)
      this.cancel()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/colors'
@import '../../../styles/App/Merch/addInventory'

.md-select::after
 color: green-background;

</style>
