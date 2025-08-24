// ==UserScript==
// @name         Modificar estilos en YouTube
// @namespace    https://youtube.com/
// @version      1.0
// @description  Cambia estilos de #container y #full-bleed-container al entrar en YouTube
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    // Función para aplicar los estilos, esperando que los elementos existan
    function applyStyles() {
        // #container
        const container = document.getElementById('container');
        if (container) {
            container.style.height = "20px";
        }

        // #full-bleed-container
        const fullBleed = document.getElementById('full-bleed-container');
        if (fullBleed) {
            fullBleed.style.maxHeight = "95vh";
        }

        const content = document.querySelector('#content.ytd-app');
        if (content) {
            content.style.marginTop = '-30px';
        }

        const headerb = document.querySelector('#background');
        if (headerb) {
            headerb.style.marginTop = '-50px';
        }
        const frosted = document.querySelector('#frosted-glass');
        if (frosted) {
            frosted.style.height = '60px';
        }

    }

    // Ejecutar al cargar la página
    window.addEventListener("load", applyStyles);

    // Ejecutar si el contenido cambia dinámicamente (YouTube usa mucho AJAX)
    const observer = new MutationObserver(applyStyles);
    observer.observe(document.body, { childList: true, subtree: true });

})();
