import ElsLink from '../src/link.vue'

export default {
  title: 'ElsLink',
  component: 'ElsLink'
}

export const Link = _ => ({
  components: { ElsLink },
  template:`
    <div>
      <els-link :disabled="true" href="http://www.baidu.com">百度</els-link>
    </div>
  `
})