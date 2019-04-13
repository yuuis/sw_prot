import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import '@/assets/sass/foundation/custom-elementui.scss'

export default () => {
  Vue.use(Element, { locale })
}
