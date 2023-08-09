const stars = document.querySelectorAll('.star');
const stars2 = document.querySelectorAll('.star-2');
const stars3 = document.querySelectorAll('.star-3');
const stars4 = document.querySelectorAll('.star-4');

function handleStarClick() {
  const value = this.dataset.value;
  resetStars();

  for (let i = 0; i < value; i++) {
    stars[i].classList.add('active');
  }
}

function handleStarClick2() {
  const value = this.dataset.value;
  resetStars2();

  for (let i = 0; i < value; i++) {
    stars2[i].classList.add('active');
  }
}

function handleStarClick3() {
  const value = this.dataset.value;
  resetStars3();

  for (let i = 0; i < value; i++) {
    stars3[i].classList.add('active');
  }
}

function handleStarClick4() {
  const value = this.dataset.value;
  resetStars4();

  for (let i = 0; i < value; i++) {
    stars4[i].classList.add('active');
  }
}

function resetStars() {
  stars.forEach(star => star.classList.remove('active'));
}
function resetStars2() {
  stars2.forEach(star => star.classList.remove('active'));
}
function resetStars3() {
  stars3.forEach(star => star.classList.remove('active'));
}
function resetStars4() {
  stars4.forEach(star => star.classList.remove('active'));
}

stars.forEach(star => star.addEventListener('click', handleStarClick));
stars2.forEach(star => star.addEventListener('click', handleStarClick2));
stars3.forEach(star => star.addEventListener('click', handleStarClick3));
stars4.forEach(star => star.addEventListener('click', handleStarClick4));
