const likedToast = () => `
    <div class="toast" id="liked-toast">
        <p class="text">Berhasil ditambahkan ke daftar restoran favorit!</p>
    </div>
`;

const unlikedToast = () => `
    <div class="toast" id="unliked-toast">
        <p class="text">Berhasil dihapus dari daftar restoran favorit!</p>
    </div>
`;

export {likedToast, unlikedToast};
