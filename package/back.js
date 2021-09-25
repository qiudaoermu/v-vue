export default {
  // 指令的定义
  bind(el, binding) {
    el.addEventListener('click', function() {
      window.history.go(-1);
    }, false)
  },
}
