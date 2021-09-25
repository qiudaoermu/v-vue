import Back from './package/back.js'
import showTips from './package/show-tip.js'
import focus from './package/focus'

let dirctiveArray = [Back, showTips, focus]

for (let dirctive of dirctiveArray) {
  dirctive.install = function (Vue) {
    Vue.dirctive(dirctive + '', dirctive)
  }
}


export default dirctiveArray