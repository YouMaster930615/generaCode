<template>
  <div class="about">
    <h1>{{amount}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'about',
  data () {
    return {
      name: 'jack'
    }
  },
  computed: {
    ...mapGetters([
      'amount'
    ])
  }
}
</script>
