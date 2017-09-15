<template>
  <div class="intercept">
    <span>{{ intercept.intercept.type }}</span>
    <span>{{ intercept.rule.path }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import * as types from '../store/types'

export default {
  name: 'Intercept',
  props: {
    intercept: {
      type: Object,
      required: true,
      validator(value) {
        return value.hasOwnProperty('intercept')
      }
    }
  },
  data() {
    return {
      open: false,
      editor: null
    }
  },
  mounted() {
    // let container = this.$refs.jsoneditor
    // let options = {
    //   search: false,
    //   modes: ['tree', 'code'],
    //   onChange: this.updateRuleBody,
    //   history: false
    // }
    // this.editor = new JSONEditor(container, options)
    // this.editor.set(this.rule.body)
  },
  methods: {
    ...mapMutations({
      resumeIntercept: types.RESUME_INTERCEPT
    })
  }
}
</script>

<style lang="scss" scoped>
  .intercept {

  }
</style>
