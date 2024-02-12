const textArea = document.getElementById('textarea');
const totalCount = document.getElementById('total-counter');
const totalRemaining = document.getElementById('Remaining');
textArea.addEventListener('keyup', (e) => {
    updateCounter()
});

function updateCounter() {
    totalCount.innerHTML = textArea.value.length;
    totalRemaining.innerText = textArea.getAttribute("maxLength")-textArea.value.length;
}