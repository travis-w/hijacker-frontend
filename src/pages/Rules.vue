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
      <form class="new-rule">
        <div class="row">
          <div class="six columns">
            <label for="path">Path*</label>
            <input
              class="u-full-width"
              type="text"
              v-model="path"
            />
          </div>
          <div class="three columns">
            <label>Method</label>
            <select
              class="u-full-width"
              v-model="method"
            >
              <option v-for="method in methods" :value="method">{{ method }}</option>
            </select>
          </div>
          <div class="three columns">
            <label>Status</label>
            <input
              class="u-full-width"
              type="text"
              v-model="status"
            />
          </div>
        </div>
        <label>Body</label>
        <textarea
          class="u-full-width"
          v-model="body"
        ></textarea>
      </form>
    </modal>
  </div>
</template>

<script>
import { mapModels } from '../util/customStateMaps'

import Card from '../components/Card.vue'
import Rule from '../components/Rule.vue'
import Modal from '../components/Modal.vue'

import * as types from '../store/types'

export default {
  name: 'rules',
  data() {
    return {
      methods: ['ALL', 'POST', 'GET', 'DELETE', 'PUT', 'PATCH'],
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
    ...mapModels({
      path: ['newRule.path', types.UPDATE_PATH],
      method: ['newRule.method', types.UPDATE_METHOD],
      status: ['newRule.status', types.UPDATE_STATUS],
      body: ['newRule.body', types.UPDATE_BODY]
    }),
    rules() {
      return this.$store.getters.getRules
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
