const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

const quantityInputs = document.querySelectorAll("#cart input");
const rows = document.querySelectorAll("#cart input");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

quantityInputs.forEach((input) => {
    input.addEventListener("change", () => {
        const row = input.closest("tr");
        const price = parseFloat(row.children[3].innerText.replace("₹", ""));
        const quantity = input.value;

        row.children[5].innerText = "₹" + (price * quantity).toFixed(2);
    });
});

let total = 0;
rows.forEach(row => {
    const price = parseFloat(row.children[5].innerText.replace("₹",""));
    total += price;
});

document.querySelector("#subtotal strong").innerText = "₹" + total;