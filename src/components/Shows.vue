<template>
  <div class="shows">
    <h1>Shows</h1>
    <md-whiteframe md-elevation="1" v-for="show in shows">
      <div class="md-content">
        <h2>{{show.name}}</h2>
        <div text-align="right">
          <md-icon>crosshairs</md-icon>
        </div>
      </div>
      </div class="md-content">
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  name: 'shows',
  data () {
    return {
      title: 'Shows',
      shows: [{'name': 'Hard Luck'}, {'name': 'Dick Tickles'}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../styles/colors'
hover = #5b5b5b

* {
  color: #fff;
}
@media(max-width: 500px) {
  .shows {
    margin: 15px;
  }
}
.shows {
  margin: 26px;
}
.md-content {
  padding: 10px;
}
</style>
