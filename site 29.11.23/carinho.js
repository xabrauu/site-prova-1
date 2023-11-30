function adicionarAoCarrinho(nomeProduto) {
    var carrinho = document.getElementById('itens-carrinho');

    
    var itemCarrinho = document.createElement('li');
    itemCarrinho.classList.add('item-carrinho');

    
    var nome = document.createElement('div');
    nome.textContent = nomeProduto;
    nome.classList.add('nome-produto');

   
    var remover = document.createElement('div');
    remover.innerHTML = '&#10006;'; // Ícone "X"
    remover.classList.add('remover-item');
    remover.onclick = function () {
        carrinho.removeChild(itemCarrinho);
    };

   
    itemCarrinho.appendChild(nome);
    itemCarrinho.appendChild(remover);

    
    carrinho.appendChild(itemCarrinho);
}


class Carrinho {
    constructor() {
        // Recupere os itens do carrinho do armazenamento local
        this.itens = JSON.parse(localStorage.getItem('carrinho')) || [];
    }

    adicionarItem(nome, preco) {
        this.itens.push({ nome, preco });
        this.atualizarCarrinho();
        this.salvarNoLocalStorage();
    }

    atualizarCarrinho() {
        const itensCarrinho = document.getElementById("itens-carrinho");
        itensCarrinho.innerHTML = "";

        this.itens.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
            itensCarrinho.appendChild(li);
        });
    }

    salvarNoLocalStorage() {
        // Salve os itens do carrinho no armazenamento local
        localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }
}

const carrinho = new Carrinho();

function adicionarEIrParaCarrinho(nome, preco) {
    carrinho.adicionarItem(nome, preco);
    window.location.href="carrinho.html"
}

// Atualize o carrinho ao carregar a página
carrinho.atualizarCarrinho();
