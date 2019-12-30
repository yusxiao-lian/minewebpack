//引入需要渲染的模板
import first from "./component/first.vue"
//映入vue
import Vue from 'vue'

//实现渲染
let vm = new Vue({
    el: '#mine', //所选择的结构将会被替换
    render: (fn)=>{
        return fn(first)
    }
})