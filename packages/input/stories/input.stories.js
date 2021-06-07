import ElsInput from '../'

export default {
  title: 'ElsInput',
  component: ElsInput
}

export const Text = () => ({
  components: { ElsInput },
  template: '<els-input v-model="value"></els-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const password = () => ({
  components: { ElsInput},
  template: '<els-input type="password" v-model="value"></els-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})