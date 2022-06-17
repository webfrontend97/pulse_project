function openModal(modalConsult, overlay) {
    const modal = document.querySelector(modalConsult);
    const bgOverlay = document.querySelector(overlay);
    modal.style.display = 'block'
    bgOverlay.classList.toggle('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalConsult, overlay) {
    const modal = document.querySelector(modalConsult);
    const bgOverlay = document.querySelector(overlay);
    modal.style.display = 'none'
    bgOverlay.classList.toggle('show');
    document.body.style.overflow = '';
}

function modal(btn, modalConsult, overlay, closeBtn) {
    const btnsModal = document.querySelectorAll(btn);
    const closeModalBtn = document.querySelector(closeBtn);

    btnsModal.forEach(item => {
        item.addEventListener('click', () => openModal(modalConsult, overlay))
    })

    closeModalBtn.addEventListener('click', () => closeModal(modalConsult, overlay));
}

export default modal;