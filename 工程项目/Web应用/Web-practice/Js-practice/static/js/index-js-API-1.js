let main = function () {
  // let div = document.querySelector('div')
  // console.log(div)

  // jQuery 选择器
  let $div = $('div')
  // console.log($div)

  // jQuery 事件绑定
  // $div.on("click", () => {
  //   console.log('click div')
  // })

  // $div.on("click", () => {
  //   console.log('click div')
  //   // 解绑 click
  //   $div.off("click")
  // })

  // JQuery 事件解除
  // $div.on("click.name1", () => {
  //   console.log("click div 1")
  //   $div.off("click.name2")
  // })
  // $div.on("click.name2", () => {
  //   console.log("click div 2")
  // })

  // // JQuery 阻止事件传递
  // $div.on("click", (e) => {
  //   console.log("click div")
  // })

  // $('a').on("click", (e) => {
  //   console.log('click a')
  //   // 阻止向上传递
  //   e.stopPropagation()
  //   // 阻止当前事件触发
  //   e.preventDefault()

  //   // 上两句等价于
  //   return false
  // })

  // // show and hide
  // let $btn_hide = $('#hide-btn')
  // let $btn_show = $('#show-btn')

  // $btn_hide.on("click", () => {
  //   $div.hide(2000)
  //   // $div.fadeOut(2000)
  // })

  // $btn_show.on("click", () => {
  //   $div.show(2000)
  //   // $div.fadeIn(2000)
  // })
  // let $a = $(`<a href="https://www.baidu.com">
  //         百度 
  //         <span>!!!</span>
  //     </a>`)

  // $div.on('click', () => {
  //   // 分布构造

  //   $div.append($a)

  //   // 统一 构造
  //   $div.append($(`<a href="https://www.baidu.com">
  //         百度 
  //         <span>!!!</span>
  //     </a>`))
  // })

  // $div.on('dblclick', () => {
  //   $div.remove()
  // })

  // $div.on('click', () => {
  //   $div.addClass('my-div')
  // })

  // $div.on('dblclick', () => {
  //   $div.removeClass('my-div')
  // })

  // $div.on('dblclick', () => {
  //   $div.hasClass('my-div')
  // })

}

export {
  main
}