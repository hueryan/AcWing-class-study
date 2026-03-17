let div = document.querySelector('div')
let input = document.querySelector('input')

let main = () => {
  div.addEventListener('mousedown', (event) => {
    console.log(event.type, event.button)
  })

  input.addEventListener('keydown', (event) => {
    console.log(event.type, event.code, event.ctrlKey)
  })
}

export {
  main
}