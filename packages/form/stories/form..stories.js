import ElsForm from '../'
import ElsFormItem from '../../formitem'
import ElsInput from '../../input'
import ElsButton from '../../button'

export default {
  title: 'ElsForm',
  component: ElsForm
}

export const Login = () => ({
  components: { ElsForm, ElsFormItem, ElsInput, ElsButton },
  template: `
  <els-form class="form" ref="form" :model="user" :rules="rules">
    <els-form-item label="用户名" prop="username">
      <!-- <els-input v-model="user.username"></els-input> -->
      <els-input :value="user.username" @input="user.username = $event" placeholder="请输入用户名"></els-input>
    </els-form-item>
    <els-form-item label="密码" prop="password">
      <els-input type="password" v-model="user.password"></els-input>
    </els-form-item>
    <els-form-item >
      <els-button type="primary" @click="login()">登录</els-button>
    </els-form-item>
  </els-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(valid => {
        if(valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})