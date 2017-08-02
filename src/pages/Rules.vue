<template>
  <div id="rules">
    <div class="row">
      <div class="twelve columns">
        <card>
          <h2>Rules<div class="add-on" @click="addRule">Test</div></h2>
          <rule v-for="rule in rules" :rule="rule" :key="rule.path"></rule>
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
  },
  computed: {
    rules() {
      return this.$store.getters.getRules;
    }
  }
}
</script>

<style lang="scss">

</style>
