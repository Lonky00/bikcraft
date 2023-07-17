// Ativar os links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
        link.classList.add("ativo");
        
    }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro){
    const elemento = document.getElementById(parametro);
    if (elemento){
        elemento.checked = true;
    }
    console.log(parametro);
    console.log(elemento);
    
}

parametros.forEach(ativarProdutos);