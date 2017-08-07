<template>
  <div id="rules">
    <div class="row">
      <div class="twelve columns">
        <card>
          <h2>Rules<div class="add-on" @click="modals.newRule = true">Test</div></h2>
          <rule v-for="rule in rules" :rule="rule" :key="rule.path"></rule>
        </card>
      </div>
    </div>
    <modal :open="modals.newRule" @closeBtn="modals.newRule = false">
      <h4>New Rule</h4>
      <p>New Rule Form Here</p>
    </modal>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Rule from '../components/Rule.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'rules',
  data() {
    return {
      modals: {
        newRule: false
      }
    }
  },
  components: {
    Card,
    Rule,
    Modal
  },
  methods: {
    addRule() {
      this.$store.commit('ADD_RULE', {})
    }
  },
  computed: {
    rules() {
      return this.$store.getters.getRules
    }
  }
}
</script>

<style lang="scss">

</style>
