
const vendas = document.getElementById("vendas");
const fabricacao = document.getElementById("fabricacao");
const conteudo = document.getElementById("conteudo");
const quantidades = {};

vendas.addEventListener("click",function() {
conteudo.innerHTML=
`
    <h2>Produtos para Vendas</h2>

    <div class="produto">
<span class="nome-produto">Arroz</span>

<div class="controle">
    <button type="button" class="menos">-</button>

    <span class="quantidade">0</span>

    <button type="button" class="mais">+</button>
</div>

</div>

    <div class="produto">
        <span class="nome-produto">Refrigerante</span>
        <div class="controle">
            <button type="button" class="menos">-</button>

            <span class="quantidade">0</span>

            <button type="button" class="mais">+</button>
        </div>
    </div>

    <div class="produto">
        <span class="nome-produto">Biscoito</span>
        <div class="controle">
            <button type="button" class="menos">-</button>

            <span class="quantidade">0</span>

            <button type="button" class="mais">+</button>
    </div>
    </div>
`;
    produtosVendas.forEach(function(nome) {
    conteudo.insertAdjacentHTML("beforeend", `
        <div class="produto">
            <span class="nome-produto">${nome}</span>

            <div class="controle">
                <button type="button" class="menos">-</button>
                <span class="quantidade">0</span>
                <button type="button" class="mais">+</button>
            </div>
        </div>
    `);
    });
    const produtos = conteudo.querySelectorAll(".produto");

    produtos.forEach(function(produto) {

    const menos = produto.querySelector(".menos");
    const mais = produto.querySelector(".mais");
    const quantidade = produto.querySelector(".quantidade");

    let valor = quantidades[produto.querySelector(".nome-produto").textContent] || 0;quantidade.textContent = valor;

    mais.addEventListener("click", function() {
        valor++;
        quantidade.textContent = valor;

        const nome = produto.querySelector(".nome-produto").textContent;    
        quantidades[nome] = valor;
    });

    menos.addEventListener("click", function() {
        if (valor > 0) {
            valor--;
            quantidade.textContent = valor;

            const nome = produto.querySelector(".nome-produto").textContent;
            quantidades[nome] = valor;
        }
    });
    });
});







fabricacao.addEventListener("click", function() {
conteudo.innerHTML = `
    
    <h2>Produtos para Fabricação</h2>

    <div class="produto">
        <span class="nome-produto">Farinha</span>

        <div class="controle">
            <button type="button" class="menos">-</button>
            <span class="quantidade">0</span>
            <button type="button" class="mais">+</button>
        </div>
    </div>

    <div class="produto">
        <span class="nome-produto">Açúcar</span>

        <div class="controle">
            <button type="button" class="menos">-</button>
            <span class="quantidade">0</span>
            <button type="button" class="mais">+</button>
        </div>
    </div>

    <div class="produto">
        <span class="nome-produto">Fermento</span>

        <div class="controle">
            <button type="button" class="menos">-</button>
            <span class="quantidade">0</span>
            <button type="button" class="mais">+</button>
        </div>

        
    </div>
     `;
   produtosFabricacao.forEach(function(nome) {
        conteudo.insertAdjacentHTML("beforeend", `
            <div class="produto">
                <span class="nome-produto">${nome}</span>

                <div class="controle">
                    <button type="button" class="menos">-</button>
                    <span class="quantidade">0</span>
                    <button type="button" class="mais">+</button>
                </div>
            </div>
        `);
    });

    const produtos = conteudo.querySelectorAll(".produto");

produtos.forEach(function(produto) {

    const menos = produto.querySelector(".menos");
    const mais = produto.querySelector(".mais");
    const quantidade = produto.querySelector(".quantidade");

    let valor = quantidades[produto.querySelector(".nome-produto").textContent] || 0;
    quantidade.textContent = valor;

    mais.addEventListener("click", function() {
        valor++;
        quantidade.textContent = valor;

        const nome = produto.querySelector(".nome-produto").textContent;
        quantidades[nome] = valor;

    });
    
    

    menos.addEventListener("click", function() {
        if (valor > 0) {
            valor--;
            quantidade.textContent = valor;

             const nome = produto.querySelector(".nome-produto").textContent;
            quantidades[nome] = valor;
        }
    });
    });




            
    

   
    });
    



    



const nomeProduto = document.getElementById("nomeProduto");
const categoriaProduto = document.getElementById("categoriaProduto");
const adicionarProduto = document.getElementById("adicionarProduto");
let produtosVendas = [];
let produtosFabricacao = [];

adicionarProduto.addEventListener("click", function() {

    const nome = nomeProduto.value.trim();
    const categoria = categoriaProduto.value;

    if (nome === "") {
        alert("Digite o nome do produto.");
        return;
    }
    if (categoria === "vendas") {
        if (produtosVendas.includes(nome)) {
        alert("Esse produto já está cadastrado.");
        return;
    }
        
    produtosVendas.push(nome);
    
    }else {

        if (produtosFabricacao.includes(nome)) {
            alert("Esse produto já está cadastrado.");
            return;
        }

    produtosFabricacao.push(nome);
    }
   

    nomeProduto.value = "";
    });
    