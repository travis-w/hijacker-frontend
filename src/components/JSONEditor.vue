<template>
  <div ref="jsoneditor"></div>
</template>

<script>
import JSONEditor from 'jsoneditor'
import isEqual from 'lodash.isequal'

export default {
  name: 'JSONEditor',
  props: {
    json: {
      required: true
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    onChange: {
      type: Function
    }
  },
  data() {
    return {
      editor: null
    }
  },
  watch: {
    json: {
      handler (newJson) {
        if (this.editor && !isEqual(newJson, this.editor.get())) {
          this.editor.set(newJson)
        }
      },
      deep: true
    }
  },
  methods: {
    _onChange() {
      if (this.editor) {
        this.$emit('change', this.editor.get())
      }
    }
  },
  mounted() {
    const container = this.$refs.jsoneditor
    const options = {
      search: false,
      modes: ['tree', 'code'],
      onChange: this._onChange,
      history: false,
      navigationBar: false,
      statusBar: false
    }

    this.editor = new JSONEditor(container, options)
    this.editor.set(this.json)
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy()
      this.editor = null
    }
  }
}
</script>

<style lang="scss">
  @import '../vendor/scss/jsoneditor';
</style>
