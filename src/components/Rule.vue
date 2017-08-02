<template>
  <div class="rule" @click="toggle" :class="[rule.method ? rule.method.toLowerCase() : '', { 'disabled': rule.disabled }]">
    <span class="method">{{ rule.method || 'ALL' }}</span>
    <span class="path">{{ rule.path }}</span>
    <div class="collapse" v-if="open">
      <div class="category">Body</div>
      <div class="category">Paramters</div>
    </div>
  </div>
</template>

<script>
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
      open: false
    }
  },
  methods: {
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




</style>
