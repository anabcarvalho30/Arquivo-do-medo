document.getElementById('coverUpload').addEventListener('change', function (e) {
    const preview = document.getElementById('coverPreview');
    const file = e.target.files[0];

    if (file) {
        if (!file.type.match('image.*')) {
            alert('Por favor, selecione uma imagem (JPG ou PNG)');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('A imagem deve ter menos de 5MB');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            preview.innerHTML = `<img src="${e.target.result}" class="img-fluid rounded" style="object-fit: cover">`;
        };
        reader.readAsDataURL(file);
    }
});

// Gerenciamento de tags
const tagInput = document.getElementById('tagInput');
tagInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && this.value.trim()) {
        e.preventDefault();
        const tag = this.value.trim();

        if (!document.querySelector(`.tag[data-tag="${tag}"]`)) {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag badge bg-primary py-2 px-3 d-flex align-items-center';
            tagElement.dataset.tag = tag;
            tagElement.innerHTML = `
                            ${tag}
                            <button type="button" class="btn-close btn-close-white ms-2" aria-label="Remover"></button>
                        `;

            tagElement.querySelector('button').addEventListener('click', () => tagElement.remove());
            this.before(tagElement);
        }

        this.value = '';
    }
});