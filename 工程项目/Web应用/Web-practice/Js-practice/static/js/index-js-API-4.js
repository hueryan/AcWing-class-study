let main = () => {
  // // 存储用户浏览器中
  // // localStorage.setItem('name', 'aaa')
  // localStorage.removeItem('name')
  // console.log(localStorage.getItem('name'))
  // // localStorage.clear()
  // console.log(localStorage)

  let $div = $('div')

  // $div.css('cursor', 'pointer')
  $div.on('click', () => {
    // window.open('https://www.acwing.com')  // 新页面
    location.href = 'https://www.acwing.com'  // 当前页面
    // location.reload()
  })
}
export {
  main
}