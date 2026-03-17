let main = function () {
  // Map-------------------------------------------------------------------------------------
  // let map = new Map()
  // map.set('name', 'a')
  // map.set('age', 18)
  // // map.delete('age')  // 删除
  // // get(key) has(key) clear()
  // console.log(map.size)
  // // 遍历for...of
  // for (let [key, value] of map) {
  //   console.log(key, value)
  // }
  // // 遍历forEach
  // map.forEach((value, key) => {
  //   console.log(key, value)
  // })

  // // Set-------------------------------------------------------------------------------------
  // let set = new Set()
  // set.add('yyy')
  // set.add(18)
  // set.add(() => {
  //   console.log('aaa')
  // })

  // console.log(set)
  // console.log(set.size)

  // JSON-------------------------------------------------------------------------------------
  // let obj = {
  //   name: 'aaa',
  //   age: 19,
  // }
  // console.log(obj, typeof obj)
  // // obj => str
  // let str = JSON.stringify(obj)
  // console.log(str, typeof str)
  // // str => obj
  // let new_obj = JSON.parse(str)
  // console.log(new_obj, typeof new_obj)

  // 日期 (ms) -------------------------------------------------------------------------------------

  // console.log(Date.now())
  // console.log(Date.parse("2026-03-17T16:16:00.000+08:00"))

  let starttime = new Date()
  // console.log(starttime.getDay())  // 0-6 周日-周六
  // console.log(starttime.getDate())  // 1-31 日-月
  // console.log(starttime.getHours())  // 0-23 时
  // console.log(starttime.getMinutes())  // 0-59 分

  console.log(starttime.toLocaleString())
  console.log(starttime.toISOString())  // 标准时间格式
}


main()
// export {
//   main
// }