const likebutton = document.querySelector('.btn-like');
const unlikebutton = document.querySelector('.btn-unlike');

const likeCount = document.querySelector('.like-count');

let likes = 0;



likebutton.addEventListener('click', () => {
    console.log('Like button clicked');

    likes++;

    likeCount.innerHTML = `${likes} Likes`;
});


unlikebutton.addEventListener('click', () => {
    console.log('Unlike button clicked');
    
    if (likes > 0){
    likes--;
    }

    likeCount.innerHTML = `${likes} Likes`;
});

