import ElsLink from './src/link.vue'

ElsLink.install = vue => {
  vue.component(ElsLink.name, ElsLink)
}

export default ElsLink