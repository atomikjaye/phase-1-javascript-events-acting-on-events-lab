// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "pink"

// document.addEventListener('keydown', e => {
//   if (e.key == "ArrowLeft") {
//     const leftNums = dodger.style.left.replace("px", "")
//     const left = parseInt(leftNums, 10)
//     dodger.style.left = `${left - 1}px`
//     if (dodger.style.left <= "0px") {
//       dodger.style.left = "0px"
//     }
//     console.log("hey")
//   }
// })

function moveDodgerLeft() {
  const leftNums = dodger.style.left.replace("px", "")
  const left = parseInt(leftNums, 10)

  if (left > 0) {
    dodger.style.left = `${left - 5}px`
  }
}

function moveDodgerRight() {
  const leftNums = dodger.style.left.replace("px", "")
  const left = parseInt(leftNums, 10)

  if (left < 360) {
    dodger.style.left = `${left + 5}px`
  }
}

function moveVertically(direction) {
  const bottomNums = dodger.style.bottom.replace("px", "")
  const bottom = parseInt(bottomNums, 10)


  if (direction === "up") {
    if (bottom < 380) {
      dodger.style.bottom = `${bottom + 5}px`
    }
  } else if (direction === "down") {
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 5}px`
    }
  }
}

document.addEventListener('keydown', e => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  } else if (e.key === "ArrowUp") {
    moveVertically("up");
  } else if (e.key === "ArrowDown") {
    moveVertically("down");
  }
})