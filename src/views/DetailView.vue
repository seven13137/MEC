<template>
  <div class="detail-view has-header">
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '../components/Banner'

export default {
  name: 'detail-view',
  components: { Banner},
  data () {
    return {
      showLoading: true
    }
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  computed: {
    content: function () {
      // Careful XSS
      // Remove copyright imgs
      return this.eventItem.content.replace(/<img.+?>/ig, '')
    },
    // Getting Vuex State from store/modules/activities
    ...mapState({
      eventItem: state => state.activities.eventItem
    })
  },
  created () {
    // Getting route params
    const id = this.$route.params.id

    // Dispatching getSingleEvent
    this.$store.dispatch({
      type: 'getSingleEvent',
      id: id
    }).then(res => {
      // Success handle
      this.showLoading = false
    })
  }
}
</script>

<style scoped>

</style>
