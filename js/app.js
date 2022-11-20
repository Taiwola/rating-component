const form = document.querySelector('.form')
const radioInput = document.querySelectorAll('.form-radio-input')
const ratingCard = document.querySelector('.wrapper')



let  ratingValue;

radioInput.forEach(input => {
    input.addEventListener('change', (e) => {
        ratingValue = e.target.value;
    })
})

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!ratingValue) return
    renderThankYouContent(ratingCard, ratingValue)
})

function renderThankYouContent (container, ratingValue){
    container.innerHTML = `
    <div class="wrapper">
  
      <div class="thank_you-img">
      <img src="images/illustration-thank-you.svg" alt="thank-you" class="thank-you-img" />
    </div>
      <div class="thank-you">
          <p class="result">
            You selected ${ratingValue} out of 5
          </p>

        <h2 class="thank-you-title">Thank you!</h2>

        <p class="thank-you-description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>

      </div>
    </div>
    `
}

console.log(radioInput);