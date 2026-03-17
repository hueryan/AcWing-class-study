let main = function () {
  // // setInterval setTimeout
  let $div = $('div')

  // let func_id
  // $div.on('click', () => {
  //   if (func_id) return false

  //   func_id = setInterval(() => {
  //     console.log('hhh')
  //   }, 200)
  // })

  // $div.on('dblclick', () => {
  //   clearInterval(func_id)
  // })

  // requestAnimationFrame
  // let last_timestep = 0
  // let step = (timestam) => {
  //   console.log(timestam - last_timestep)
  //   last_timestep = timestam
  //   $div.width($div.width() + 1)
  //   if (timestam / 1000 <= 5)
  //     requestAnimationFrame(step)
  //   console.log(timestam)
  // }

  // requestAnimationFrame(step) 单击停止

  let func_id;
  let last_timestep = 0
  let step = (timestam) => {
    console.log(timestam - last_timestep)
    last_timestep = timestam
    $div.width($div.width() + 1)
    if (timestam / 1000 <= 10)
      func_id = requestAnimationFrame(step)
  }

  func_id = requestAnimationFrame(step)
  $div.on('click', () => {
    cancelAnimationFrame(func_id)
  })

}

export {
  main
}