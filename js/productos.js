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

<dialog id="${dialogId}" class="p-0 content-center bg-transparent border-none w-screen h-screen my-auto mx-auto">

  <!-- Contenedor interno centrado -->
  <div class="relative mx-auto my-[10vh] w-[350px] max-w-[90vw] p-8 rounded-2xl border-2 border-[#ef7a71] shadow-lg bg-white">
    
    <!-- Botón X para cerrar -->
    <button onclick="document.getElementById('${dialogId}').close()"
      class="absolute top-1 right-4 text-[#ef7a71] hover:text-[#c31644] text-2xl font-bold focus:outline-none">
      &times;
    </button>

    <h2 class="text-2xl font-bold mb-2">${producto.modal.titulo}</h2>
    <p class="mb-6">${producto.modal.descripcion}</p>

    <form method="dialog">
      <div class="flex justify-center items-center w-full">
        <a href="https://api.whatsapp.com/send?phone=51947907324" target="_blank"
          class="bg-[#25D366] hover:bg-[#178641] text-white px-4 py-2 rounded-md flex items-center text-sm md:text-base transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path
              d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
          <span class="ml-2 font-medium">Haz Tu Pedido</span>
        </a>
      </div>
    </form>

  </div>
</dialog>

    `;
        grid.appendChild(item);
    });
});
