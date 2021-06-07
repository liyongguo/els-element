<template>
  <div class="steps_wrap">
    <div class="steps_line"></div>
    <div 
    class="steps_item"
    v-for="index in count"
    :key="index"
    :style="{
      color: active >= index ? activeColor: defaultColor
    }"
    >
    {{index}}
    </div>
  </div>
</template>

<script>
import './step.css'
export default {
  name: 'steps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 1
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    defaultColor: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style>

</style>