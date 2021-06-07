<template>
  <div>
    <label for="">{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errorMessage"> {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'ElsFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  methods: {
    validate () {
      if(!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = { [this.prop] : rules}
      const validator = new AsyncValidator(descriptor)
      return validator.validate( { [this.prop] : value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>
