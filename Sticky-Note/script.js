const note = document.getElementById('note');
let isDragging = false;
let offsetX, offsetY;

note.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'TEXTAREA') return; // Prevent dragging when clicking on textarea
    isDragging = true;
    offsetX = e.clientX - note.offsetLeft;
    offsetY = e.clientY - note.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) return;
    note.style.left = e.clientX - offsetX + "px";
    note.style.top = e.clientY - offsetY + "px";
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});