<template>
  <div id="rules">
    <div class="row">
      <div class="twelve columns">
        <card>
          <h2>Rules<div class="add-on" @click="addRule">Test</div></h2>
          <rule></rule>
          <rule></rule>
        </card>
      </div>
    </div>

  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Rule from '../components/Rule.vue'

export default {
  name: 'rules',
  components: {
    Card,
    Rule
  },
  methods: {
    addRule() {
      this.$store.commit('ADD_RULE', {})
    }
  }
}
</script>

<style lang="scss">

</style>
