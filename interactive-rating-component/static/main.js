const ratingCard = document.querySelector("#rating-card")
const thankYouCard = document.querySelector("#thankyou-card")
const form = document.querySelector("#rating-form")
const ratingPlaceholder = document.querySelector("#rating-placeholder")
const btn = document.querySelector(".btn")


form.addEventListener("submit", async (e) => {
  let rating
  e.preventDefault()
  rating = e.target.elements["rating"].value
  if (!rating) {
    // wiggle btn
    btn.animate([
      {transform: "translateX(0px)"},
      {transform: "translateX(20px)"},
      {transform: "translateX(-20px)"},
      {transform: "translateX(0px)"},
    ], {
      duration: 180,
      easing: 'ease-out'
    })
  } else {
    // show thankyou card
    ratingPlaceholder.innerText = rating
    let ratingcCardAnimation = ratingCard.animate([
      {transform: "scale(1)", opacity: "1"},
      {transform: "scale(1.1)", opacity: "0"},
    ], {
      duration: 80,
      easing: 'ease-in'
    })
    
    await ratingcCardAnimation.finished
    ratingCard.dataset.visible = "false"
    thankYouCard.dataset.visible = "true"
    thankYouCard.animate([
      {transform: "scale(.8)", opacity: "0"},
      {transform: "scale(1)", opacity: "1"},
    ], {
      duration: 80,
      easing: 'ease-out',
    })
  }
})

