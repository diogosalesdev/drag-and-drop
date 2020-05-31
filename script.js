const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

//Our Cards

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  //console.log('>CARD: Start dragging')
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
  this.classList.add('is-dragging')
}
function drag() {
  //console.log('>CARD: is dragging')
}
function dragend() {
  //console.log('>CARD: Stop drag!')
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}

//Place where we will drop cards

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
});

function dragenter() {
  //console.log('>DROPZONE: enter in zone')
}
function dragover() {
  //console.log('>DROPZONE: Over')
}
function dragleave() {
  //console.log('>DROPZONE: Leave')
}
function drop() {
  //console.log('>DROPZONE: Dropped')
}

