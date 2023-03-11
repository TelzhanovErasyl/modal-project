let bannerBtn = document.querySelector('.banner-btn')
let closeBtn = document.querySelector('.close-btn')
let modalOverlay = document.querySelector('.modal-overlay')

bannerBtn.addEventListener('click', function () {
    modalOverlay.classList.add('opened-modal')
})

closeBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('opened-modal')
})