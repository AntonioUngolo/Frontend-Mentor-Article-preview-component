'use strict';

const footerArticle = document.querySelector('.footer.article');
const tooltip = document.getElementById('share-tooltip');
const shareIcon = document.querySelector('.share');

console.log(shareIcon);

shareIcon.addEventListener('click', function () {
  tooltip.classList.toggle('active');
  shareIcon.classList.toggle('active');
});
