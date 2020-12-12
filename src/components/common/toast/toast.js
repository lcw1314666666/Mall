import Toast from './toast.vue'
const toast = {}

export default toast

toast.install = function (vue) {

    //创建组件构造器
    var toastConstructor = vue.extend(Toast)
    //创建组件对象
    var toast = new toastConstructor()
    //将组将对象挂载到页面上
    toast.$mount(document.createElement('div'))
    //对应的toast.$el就是div
    document.body.appendChild(toast.$el)
    vue.prototype.$toast = toast
}