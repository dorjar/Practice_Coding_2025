const colorInput = document.getElementById('colorInput');
const colorPreview = document.getElementById('colorPreview');
const hexValue = document.getElementById('hexValue');
const hexBox = document.getElementById('hexBox');
const tooltip = document.getElementById('tooltip');

colorInput.addEventListener('input', (e) => {
    const color = e.target.value;
    colorPreview.style.background = color;
    hexValue.textContent = color;
});

hexBox.addEventListener('click', () => {
    const hex = hexValue.textContent;
    navigator.clipboard.writeText(hex).then(() => {
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 1500);
    });
});
