<template>
  <div>
    <h3>s孙组件</h3>
    <div>
      早安 {{amount}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'child',
  props: {
    grandNUmber: {
      type: String,
      default: '隆尧周'
    }
  },
  computed: {
    ...mapGetters([
      'amount'
    ])
  }
}
</script>
