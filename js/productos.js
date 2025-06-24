import { productos } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productos-grid');
    if (!grid) return;

    productos.forEach((producto, idx) => {
        const dialogId = `modal-producto-${idx}`;
        const item = document.createElement('div');
        item.className = 'rounded-lg self-start flex flex-col items-center';

        item.innerHTML = `
    <button onclick="document.getElementById('${dialogId}').showModal()" class="focus:outline-none">
        <img src="${producto.imagen}" class="mb-6 mx-auto border rounded-lg shadow hover:shadow-lg hover:shadow-[#ef7a71]/30 transition w-[200px] h-[200px] object-cover">
        <h4 class="text-xl font-['Domine'] font-bold hover:scale-110 transition">${producto.nombre}</h4>
    </button>
    <dialog id="${dialogId}" closedby="any"
        class="m-auto w-[350px] max-w-[90vw] p-8 rounded-2xl border-2 border-[#ef7a71] shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 class="text-2xl font-bold mb-2">${producto.modal.titulo}</h2>
        <p class="mb-4">${producto.modal.descripcion}</p>
        <form method="dialog">
        <button class="bg-[#ef7a71] text-white px-4 py-2 rounded hover:bg-[#c31644] transition">Cerrar</button>
        </form>
    </dialog>
    `;
        grid.appendChild(item);
    });
});
