<template>
  <div class="rule" :class="[rule.method ? rule.method.toLowerCase() : '', { 'disabled': rule.disabled }]">
    <span class="method">{{ rule.method || 'ALL' }}</span>
    <span class="path" @click="toggle">{{ rule.path }}</span>
    <div class="collapse" v-show="open">
      <div class="category">Quick Settings</div>
      <div class="row">
        <div class="two columns">
          <input type="checkbox" :checked="rule.disabled" @click="toggleRuleDisabled" /> Disabled
        </div>
        <div class="two columns">
          <input type="checkbox" :checked="rule.skipApi" @click="toggleRuleSkipApi" /> Skip API
        </div>
        <div class="three columns">
          <input type="checkbox" :checked="rule.interceptRequest"  @click="toggleRuleIntReq" /> Intercept Request
        </div>
        <div class="four columns">
          <input type="checkbox" :checked="rule.interceptResponse"  @click="toggleRuleIntRes" /> Intercept Response
        </div>
      </div>
      <div class="category">Resposne</div>
      <div class="item" v-if="rule.status">
        <div class="item-title">Status</div>
        <div class="item-content json">{{ rule.status }}</div>
      </div>
      <div class="item" v-if="rule.body">
        <div class="item-title">Body</div>
        <div class="item-content" ref="jsoneditor"></div>
      </div>
      <div class="category">Paramters</div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'Rule',
  props: {
    rule: {
      type: Object,
      required: true,
      validator(value) {
        return value.hasOwnProperty('path')
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
    let container = this.$refs.jsoneditor
    let options = {
      search: false,
      modes: ['text', 'tree'],
      onChange: this.updateRuleBody,
      history: false
    }
    this.editor = new JSONEditor(container, options)
    this.editor.set(this.rule.body)
  },
  methods: {
    updateRuleBody() {
      this.$store.commit(types.UPDATE_RULE_BODY, {
        rule: this.rule,
        newBody: this.editor.get()
      })
    },

    toggleRuleDisabled() {
      // this.disabled = true
      this.$store.commit(types.TOGGLE_RULE_DISABLED, this.rule)
    },

    toggleRuleSkipApi() {
      // this.disabled = true
      this.$store.commit(types.TOGGLE_RULE_SKIP_API, this.rule)
    },

    toggleRuleIntReq() {
      // this.disabled = true
      this.$store.commit(types.TOGGLE_RULE_INT_REQ, this.rule)
    },

    toggleRuleIntRes() {
      // this.disabled = true
      this.$store.commit(types.TOGGLE_RULE_INT_RES, this.rule)
    },

    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
  .rule {
    width: 100%;
    margin: 5px 0;
    padding: 5px;
    background-color: #ebf3fb;
    border: 1px solid #61affe;
    box-sizing: border-box;

    & > .method {
      text-align: center;
      display: inline-block;
      background-color: #61affe;
      padding: 3px 3px;
      width: 75px;
      box-sizing: border-box;
      color: #ffffff;
      font-weight: 600;
    }

    & > .path {
      color: #3d3d3d;
      font-weight: 600;
      margin-left: 5px;
    }

    & > .collapse {
      overflow-y: hidden;

      -webkit-transition: max-height 0.5s ease-in-out;
      -moz-transition: max-height 0.5s ease-in-out;
      -o-transition: max-height 0.5s ease-in-out;
      transition: max-height 0.5s ease-in-out;

      &.opened {
        -webkit-transition: max-height 0.5s ease-in-out;
        -moz-transition: max-height 0.5s ease-in-out;
        -o-transition: max-height 0.5s ease-in-out;
        transition: max-height 0.5s ease-in-out;
      }

      & > .category {
        background-color: rgba(255, 255, 255, .7);
        padding: 5px;
        margin: 5px 0;
      }

      & > .category:last-child {
        margin-bottom: 0;
      }
    }

    &.get {
      background-color: #e8f6f0;
      border-color: #49cc90;

      & > .method {
        background-color: #49cc90;
      }
    }

    &.post {
      background-color: #fbf1e6;
      border-color: #fca130;

      & > .method {
        background-color: #fca130;
      }
    }

    &.put {
      background-color: #f4e7fd;
      border-color: #b346ff;

      & > .method {
        background-color: #b346ff;
      }

    }

    &.patch {
      background-color: #fddef5;
      border-color: #ff4dd1;

      & > .method {
        background-color: #ff4dd1;
      }
    }

    &.delete {
      background-color: #fbe7e7;
      border-color: #f93e3e;

      & > .method {
        background-color: #f93e3e;
      }
    }

    &.disabled {
      background-color: #f9f9f9;
      border-color: #f0f0f0;

      & > .method {
        background-color: #f0f0f0;
      }

      & > .path {
        color: #828590;
        text-decoration: line-through;
      }
    }


  }

  .item {
    overflow-y: hidden;
  }

  .item-title {
    width: 50%;
    font-weight: 600;
    display: inline-block;
  }

  .item-content {
    width: 50%;
    float: right;
    display: inline-block;

    &.json {
      font-family: monospace;
      white-space: pre-wrap;
    }
  }




</style>
