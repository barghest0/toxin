console.log();
$('.like__custom-input').on('click', e => {
  const target = e.target;
  let likes = Number(target.innerHTML);
  if (target.classList.contains('active')) {
    likes -= 1;
  } else {
    likes += 1;
  }

  target.classList.toggle('active');

  target.innerHTML = likes;
});
