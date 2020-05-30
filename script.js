const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

//Our Cards

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  //console.log('>CARD: Start dragging')
}
function drag() {
  //console.log('>CARD: is dragging')
}
function dragend() {
  //console.log('>CARD: Stop drag!')

}

//Place where we will drop cards

