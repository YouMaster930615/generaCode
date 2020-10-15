<template>
  <div>
    <h3>子组件{{sendName}}</h3>
    <div>
      晚安 {{amount}}
    </div>
    <grand />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import grand from './grand'

export default {
  name: 'child',
  props: {
    sendName: {
      type: Number,
      default: 0
    }
  },
  components: {
    grand
  },
  computed: {
    ...mapGetters([
      'amount'
    ])
  }
}
</script>
