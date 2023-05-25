const hide = document.querySelector('.hide');
const show = document.querySelector('.show');

let btn = document.querySelector('.shareButton');

function hideOrShow() {
  if (window.innerWidth <= 940) {
    if (hide.style.display === 'none') {
      hide.style.display = 'flex';
      show.style.display = 'none';
    } else {
      hide.style.display = 'none';
      show.style.display = 'flex';
    }
  }
}

btn.addEventListener('click', () => {
  if (window.innerWidth > 940) {
    if (show.style.display === 'flex') {
      show.style.display = 'none';
    } else {
      show.style.display = 'flex';
    }
  }
})