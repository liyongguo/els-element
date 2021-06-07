<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElsButton',
  methods: {
    handleClick (e) {
      this.$emit('click', e)
      e.preventDefault()
    }
  },
}
</script>
