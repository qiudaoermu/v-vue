
## vue 自定义指令集锦 an collection of v-direction
1. v-back back to last page
2. v-show-tips  show left content if text is omit
3. v-focus foucs with input element

useage:
```
import directives from "v-vue"

directives.forEach(dv => {
  Vue.use(dv)
})
```

