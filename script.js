const favBtn = document.querySelector('.favorite-icon')
const loveIcon = favBtn.querySelector('span')

//add listener and change love button color 
favBtn.addEventListener('click', function() {
  loveIcon.classList.toggle('text-red-500')
})
