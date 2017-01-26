<template>
  <div class="bandDetails">
    <md-whiteframe class="bandDetails__container">
      <div class="bandDetails__header">
        <h2 class="bandDetails__title">{{ bandName}}</h2>
      </div>

      <div class="bandDetails__content">
        <div class="bandDetails__column bandDetails__column--first">
          <div class="bandDetails__band">
            <h4 class="bandDetails__title bandDetails__title--column">Band Information</h4>
            <div class="bandDetails__details bandDetails__details--band">
              <svg class="bandDetails__icon bandDetails__icon--band" width="24px" height="24px" viewBox="29 186 24 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M37,191 L34,191 L34,188 L32,188 L32,191 L29,191 L29,193 L32,193 L32,196 L34,196 L34,193 L37,193 L37,191 L37,191 Z M47,192 C48.7,192 50,190.7 50,189 C50,187.3 48.7,186 47,186 C46.7,186 46.4,186.1 46.1,186.1 C46.7,187 47,187.9 47,189 C47,190.1 46.7,191 46.1,191.9 C46.4,191.9 46.7,192 47,192 L47,192 Z M42,192 C43.7,192 45,190.7 45,189 C45,187.3 43.7,186 42,186 C40.3,186 39,187.3 39,189 C39,190.7 40.3,192 42,192 L42,192 Z M48.6,194.2 C49.4,194.9 50,195.9 50,197 L50,199 L53,199 L53,197 C53,195.5 50.6,194.5 48.6,194.2 L48.6,194.2 Z M42,194 C40,194 36,195 36,197 L36,199 L48,199 L48,197 C48,195 44,194 42,194 L42,194 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--band">
                <div class="bandDetails__description">
                  www.facebook.com/bandurltopage
                </div>
                <span class="bandDetails__blockTitle">Social Media Page</span>
              </div>
            </div>
          </div>

          <div class="bandDetails__management">
            <h4 class="bandDetails__title bandDetails__title--column bandDetails__title--management">Management</h4>
            <div class="bandDetails__details bandDetails__details--management">
              <div class="bandDetails__row bandDetails__row--managerName">
                <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs></defs><path d="M0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M12,6 C12,7.7 10.7,9 9,9 C7.3,9 6,7.7 6,6 C6,4.3 7.3,3 9,3 C10.7,3 12,4.3 12,6 L12,6 Z M9,10.9 C11,10.9 15,12 15,14 L15,15 L3,15 L3,14 C3,12 7,10.9 9,10.9 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
                </svg>
                <div class="bandDetails__block bandDetails__block--name">
                  <div class="bandDetails__description">
                    Garrat Vargas
                  </div>
                  <span class="bandDetails__blockTitle">Full Name</span>
                </div>
              </div>

              <div class="bandDetails__row bandDetails__row--managerPhone">
                <svg width="18px" height="20px" viewBox="0 1 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs></defs><path d="M10.2,16.5368421 L12.4,14.1631579 C12.7,13.8394737 13.1,13.7315789 13.4,13.9473684 C14.5,14.3789474 15.7,14.5947368 17,14.5947368 C17.6,14.5947368 18,15.0263158 18,15.6736842 L18,19.3421053 C18,19.9894737 17.6,20.4210526 17,20.4210526 C7.6,20.4210526 0,12.2210526 0,2.07894737 C0,1.43157895 0.4,1 1,1 L4.5,1 C5.1,1 5.5,1.43157895 5.5,2.07894737 C5.5,3.37368421 5.7,4.66842105 6.1,5.96315789 C6.2,6.28684211 6.1,6.71842105 5.9,7.04210526 L3.6,9.41578947 C5,12.4368421 7.4,14.9184211 10.2,16.5368421 Z" id="call" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
                </svg>
                <div class="bandDetails__block bandDetails__block--phone">
                  <div class="bandDetails__description">
                    (323) 555-6789
                  </div>
                  <span class="bandDetails__blockTitle">Cell</span>
                </div>
              </div>
            </div>

            <div class="bandDetails__managerEmails">
              <div class="bandDetails__row bandDetails__row--personalEmail">
                <svg width="20px" height="16px" viewBox="0 10 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs></defs><path d="M18,10 L2,10 C0.9,10 0,10.9 0,12 L0,24 C0,25.1 0.9,26 2,26 L18,26 C19.1,26 20,25.1 20,24 L20,12 C20,10.9 19.1,10 18,10 L18,10 Z M18,14 L10,19 L2,14 L2,12 L10,17 L18,12 L18,14 L18,14 Z" id="email" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
                </svg>
                <div class="bandDetails__block bandDetails__block--promoter">
                  <div class="bandDetails__emails">
                    <div class="bandDetails__description">
                      garretvargas@example.com
                    </div>
                    <span class="bandDetails__blockTitle">Personal</span>
                  </div>

                  <div class="bandDetails__emails">
                    <div class="bandDetails__description">
                      garret@example.com
                    </div>
                    <span class="bandDetails__blockTitle">Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bandDetails__column bandDetails__column--second">
          <h4 class="bandDetails__title bandDetails__title--column bandDetails__title--members">Members</h4>
          <div class="bandDetails__member">
            <div class="bandDetails__name">
              <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M12,6 C12,7.7 10.7,9 9,9 C7.3,9 6,7.7 6,6 C6,4.3 7.3,3 9,3 C10.7,3 12,4.3 12,6 L12,6 Z M9,10.9 C11,10.9 15,12 15,14 L15,15 L3,15 L3,14 C3,12 7,10.9 9,10.9 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--name">
                <div class="bandDetails__description">
                  Gartett Vargas
                </div>
                <span class="bandDetails__blockTitle">Full Name</span>
              </div>
            </div>

            <div class="bandDetails__phone">
              <svg width="18px" height="20px" viewBox="0 1 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M10.2,16.5368421 L12.4,14.1631579 C12.7,13.8394737 13.1,13.7315789 13.4,13.9473684 C14.5,14.3789474 15.7,14.5947368 17,14.5947368 C17.6,14.5947368 18,15.0263158 18,15.6736842 L18,19.3421053 C18,19.9894737 17.6,20.4210526 17,20.4210526 C7.6,20.4210526 0,12.2210526 0,2.07894737 C0,1.43157895 0.4,1 1,1 L4.5,1 C5.1,1 5.5,1.43157895 5.5,2.07894737 C5.5,3.37368421 5.7,4.66842105 6.1,5.96315789 C6.2,6.28684211 6.1,6.71842105 5.9,7.04210526 L3.6,9.41578947 C5,12.4368421 7.4,14.9184211 10.2,16.5368421 Z" id="call" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--phone">
                <div class="bandDetails__description">
                  +1 (323) 555-6789
                </div>
                <span class="bandDetails__blockTitle">Cell</span>
              </div>
            </div>
          </div>

          <div class="bandDetails__member">
            <div class="bandDetails__name">
              <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M12,6 C12,7.7 10.7,9 9,9 C7.3,9 6,7.7 6,6 C6,4.3 7.3,3 9,3 C10.7,3 12,4.3 12,6 L12,6 Z M9,10.9 C11,10.9 15,12 15,14 L15,15 L3,15 L3,14 C3,12 7,10.9 9,10.9 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--name">
                <div class="bandDetails__description">
                  Gartett Vargas
                </div>
                <span class="bandDetails__blockTitle">Full Name</span>
              </div>
            </div>

            <div class="bandDetails__phone">
              <svg width="18px" height="20px" viewBox="0 1 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M10.2,16.5368421 L12.4,14.1631579 C12.7,13.8394737 13.1,13.7315789 13.4,13.9473684 C14.5,14.3789474 15.7,14.5947368 17,14.5947368 C17.6,14.5947368 18,15.0263158 18,15.6736842 L18,19.3421053 C18,19.9894737 17.6,20.4210526 17,20.4210526 C7.6,20.4210526 0,12.2210526 0,2.07894737 C0,1.43157895 0.4,1 1,1 L4.5,1 C5.1,1 5.5,1.43157895 5.5,2.07894737 C5.5,3.37368421 5.7,4.66842105 6.1,5.96315789 C6.2,6.28684211 6.1,6.71842105 5.9,7.04210526 L3.6,9.41578947 C5,12.4368421 7.4,14.9184211 10.2,16.5368421 Z" id="call" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--phone">
                <div class="bandDetails__description">
                  +1 (323) 555-6789
                </div>
                <span class="bandDetails__blockTitle">Cell</span>
              </div>
            </div>
          </div>

          <div class="bandDetails__member">
            <div class="bandDetails__name">
              <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M12,6 C12,7.7 10.7,9 9,9 C7.3,9 6,7.7 6,6 C6,4.3 7.3,3 9,3 C10.7,3 12,4.3 12,6 L12,6 Z M9,10.9 C11,10.9 15,12 15,14 L15,15 L3,15 L3,14 C3,12 7,10.9 9,10.9 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--name">
                <div class="bandDetails__description">
                  Gartett Vargas
                </div>
                <span class="bandDetails__blockTitle">Full Name</span>
              </div>
            </div>

            <div class="bandDetails__phone">
              <svg width="18px" height="20px" viewBox="0 1 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M10.2,16.5368421 L12.4,14.1631579 C12.7,13.8394737 13.1,13.7315789 13.4,13.9473684 C14.5,14.3789474 15.7,14.5947368 17,14.5947368 C17.6,14.5947368 18,15.0263158 18,15.6736842 L18,19.3421053 C18,19.9894737 17.6,20.4210526 17,20.4210526 C7.6,20.4210526 0,12.2210526 0,2.07894737 C0,1.43157895 0.4,1 1,1 L4.5,1 C5.1,1 5.5,1.43157895 5.5,2.07894737 C5.5,3.37368421 5.7,4.66842105 6.1,5.96315789 C6.2,6.28684211 6.1,6.71842105 5.9,7.04210526 L3.6,9.41578947 C5,12.4368421 7.4,14.9184211 10.2,16.5368421 Z" id="call" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--phone">
                <div class="bandDetails__description">
                  +1 (323) 555-6789
                </div>
                <span class="bandDetails__blockTitle">Cell</span>
              </div>
            </div>
          </div>

          <div class="bandDetails__member">
            <div class="bandDetails__name">
              <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M12,6 C12,7.7 10.7,9 9,9 C7.3,9 6,7.7 6,6 C6,4.3 7.3,3 9,3 C10.7,3 12,4.3 12,6 L12,6 Z M9,10.9 C11,10.9 15,12 15,14 L15,15 L3,15 L3,14 C3,12 7,10.9 9,10.9 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--name">
                <div class="bandDetails__description">
                  Gartett Vargas
                </div>
                <span class="bandDetails__blockTitle">Full Name</span>
              </div>
            </div>

            <div class="bandDetails__phone">
              <svg width="18px" height="20px" viewBox="0 1 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M10.2,16.5368421 L12.4,14.1631579 C12.7,13.8394737 13.1,13.7315789 13.4,13.9473684 C14.5,14.3789474 15.7,14.5947368 17,14.5947368 C17.6,14.5947368 18,15.0263158 18,15.6736842 L18,19.3421053 C18,19.9894737 17.6,20.4210526 17,20.4210526 C7.6,20.4210526 0,12.2210526 0,2.07894737 C0,1.43157895 0.4,1 1,1 L4.5,1 C5.1,1 5.5,1.43157895 5.5,2.07894737 C5.5,3.37368421 5.7,4.66842105 6.1,5.96315789 C6.2,6.28684211 6.1,6.71842105 5.9,7.04210526 L3.6,9.41578947 C5,12.4368421 7.4,14.9184211 10.2,16.5368421 Z" id="call" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--phone">
                <div class="bandDetails__description">
                  +1 (323) 555-6789
                </div>
                <span class="bandDetails__blockTitle">Cell</span>
              </div>
            </div>
          </div>

          <div class="bandDetails__member">
            <div class="bandDetails__name">
              <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M12,6 C12,7.7 10.7,9 9,9 C7.3,9 6,7.7 6,6 C6,4.3 7.3,3 9,3 C10.7,3 12,4.3 12,6 L12,6 Z M9,10.9 C11,10.9 15,12 15,14 L15,15 L3,15 L3,14 C3,12 7,10.9 9,10.9 Z" id="Shape" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--name">
                <div class="bandDetails__description">
                  Gartett Vargas
                </div>
                <span class="bandDetails__blockTitle">Full Name</span>
              </div>
            </div>

            <div class="bandDetails__phone">
              <svg width="18px" height="20px" viewBox="0 1 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs><path d="M10.2,16.5368421 L12.4,14.1631579 C12.7,13.8394737 13.1,13.7315789 13.4,13.9473684 C14.5,14.3789474 15.7,14.5947368 17,14.5947368 C17.6,14.5947368 18,15.0263158 18,15.6736842 L18,19.3421053 C18,19.9894737 17.6,20.4210526 17,20.4210526 C7.6,20.4210526 0,12.2210526 0,2.07894737 C0,1.43157895 0.4,1 1,1 L4.5,1 C5.1,1 5.5,1.43157895 5.5,2.07894737 C5.5,3.37368421 5.7,4.66842105 6.1,5.96315789 C6.2,6.28684211 6.1,6.71842105 5.9,7.04210526 L3.6,9.41578947 C5,12.4368421 7.4,14.9184211 10.2,16.5368421 Z" id="call" stroke="none" fill="#21CE99" fill-rule="evenodd"></path>
              </svg>
              <div class="bandDetails__block bandDetails__block--phone">
                <div class="bandDetails__description">
                  +1 (323) 555-6789
                </div>
                <span class="bandDetails__blockTitle">Cell</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </md-whiteframe>

    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<style scoped lang="stylus">
@import '../../../styles/App/Bands/bandDetails'

</style>

<script>
  import ReportIssue from '../ReportIssue'
  import InviteFriend from '../InviteFriend'
  export default {
    name: 'bandDetails',
    components: { ReportIssue, InviteFriend },
    data () {
      return {
        bandDetails: [
          {
            name: 'Hard Luck'
          },
          {
            name: 'RHCP'
          }
        ],
        confirmed: false,
        bandName: this.$route.params.name
      }
    }
  }
</script>
