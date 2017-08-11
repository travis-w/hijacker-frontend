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
              :value="path"
              @input="updatePath"
            />
          </div>
          <div class="three columns">
            <label>Method</label>
            <select
              class="u-full-width"
              :value="method"
              @input="updateMethod"
            >
              <option v-for="method in methods" :value="method">{{ method }}</option>
            </select>
          </div>
          <div class="three columns">
            <label>Status</label>
            <input
              class="u-full-width"
              type="text"
              :value="status"
              @input="updateStatus"
            />
          </div>
        </div>
        <label>Body</label>
        <textarea
          class="u-full-width"
          :value="body"
          @input="updateBody"
        ></textarea>
      </form>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
    updatePath(e) {
      this.$store.commit(types.UPDATE_PATH, e.target.value)
    },

    updateMethod(e) {
      this.$store.commit(types.UPDATE_METHOD, e.target.value)
    },

    updateStatus(e) {
      this.$store.commit(types.UPDATE_STATUS, e.target.value)
    },

    updateBody(e) {
      this.$store.commit(types.UPDATE_BODY, e.target.value)
    },

    addRule() {
      this.$store.commit('ADD_RULE', {})
    }
  },
  computed: {
    ...mapState({
      path: state => state.newRule.path,
      method: state => state.newRule.method,
      status: state => state.newRule.status,
      body: state => state.newRule.body
    }),
    rules() {
      return this.$store.getters.getRules
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
