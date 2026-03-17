let nums = [1, 32, 5, 23, 3, 7]

let main = function () {

  console.log(nums.reverse())

  nums.sort(function (a, b) {
    return b - a
  })

  nums.sort((a, b) => b - a)

  console.log(nums)

  let num = nums.map(x => { return parseInt(x) })  // 将内容转化为数字
  // 简化写法（省略花括号和 return）
  let num2 = nums.map(x => parseInt(x));
  // 更简洁：直接使用 Number 函数
  let num3 = nums.map(Number);   // Number 会将任何值转为数字

  let n = [...num]  // 如果只是复制数组，用展开运算符
  console.log(n)





  // reduce

  let sum1 = nums.reduce((a, b) => { return a + b; }, 0);
  // 简化写法
  let sum2 = nums.reduce((a, b) => a + b, 0);
  console.log(sum2)
  /* 
  其他 reduce 用途
  求最大值：nums.reduce((max, cur) => cur > max ? cur : max, -Infinity)

  统计出现次数：nums.reduce((acc, cur) => { acc[cur] = (acc[cur] || 0) + 1; return acc; }, {}) 
  */

  let max = nums.reduce((max, cur) => cur > max ? cur : max, -Infinity)
  console.log(max)
}

main()