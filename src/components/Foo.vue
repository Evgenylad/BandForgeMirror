<template>
  <footer class="footer" id="testing">
    <div class="footer__copyright">
      @Copyright BandForge {{ new Date().getFullYear() }}
    </div>
    <ul class="footer__list">
      <li class="footer__listItem">
        <a class="footer__link" :href="links.first">{{ socialNets.first }}</a>
      </li>

      <li class="footer__listItem">
        <a class="footer__link" :href="links.second">{{ socialNets.second }}</a>
      </li>

      <li class="footer__listItem">
        <a class="footer__link" :href="links.third">{{ socialNets.third }}</a>
      </li>

      <li class="footer__listItem">
        <a class="footer__link" :href="links.fourth">{{ socialNets.fourth }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'foo',
  data () {
    return {
      dateYear: '',
      socialNets: {
        first: 'Reddit',
        second: 'Report an Issue',
        third: 'Facebook',
        fourth: 'Instagram'
      },
      links: {
        first: 'https://www.reddit.com/',
        second: 'Report an Issue',
        third: 'https://www.facebook.com/',
        fourth: 'https://www.instagram.com/'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
@import '../styles/foo'
</style>
