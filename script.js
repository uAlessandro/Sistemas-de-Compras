
const vendas = document.getElementById("vendas");
const fabricaçao = document.getElementById("fabricacao");
const conteudo = document.getElementById("conteudo");

vendas.addEventListener("click",function() {
conteudo.innerHTML=
`
    <h2>Produtos para Vendas</h2>

    <div class="produto">
<span class="nome-produto">Arroz</span>

<div class="controle">
    <button type="button" class="menos">−</button>

    <span class="quantidade">0</span>

    <button type="button" class="mais">+</button>
</div>

</div>

    <div class="produto">
        <span>Refrigerante</span>
    </div>

    <div class="produto">
        <span>Biscoito</span>
    </div>
`;
const menos = document.querySelector(".menos");
const mais = document.querySelector(".mais");
const quantidade = document.querySelector(".quantidade");

let valor = 0;

mais.addEventListener("click", function() {
    valor++;
    quantidade.textContent = valor;
});

menos.addEventListener("click", function() {
    if (valor > 0) {
        valor--;
        quantidade.textContent = valor;
    }
}); 
});


fabricaçao.addEventListener("click", function() {
conteudo.innerHTML = `
    <h2>Produtos para Fabricação</h2>

    <div class="produto">
        <span>Farinha</span>
    </div>

    <div class="produto">
        <span>Açúcar</span>
    </div>

    <div class="produto">
        <span>Fermento</span>
    </div> `;
});

    


fabricacao.addEventListener("click", function() {
conteudo.innerHTML =
`
    <h2>Produtos para Fabricação</h2>

    <div class="produto">
        <span>Farinha</span>
    </div>

    <div class="produto">
        <span>Açúcar</span>
    </div>

    <div class="produto">
        <span>Fermento</span>
    </div>
`;
;});
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
   

    conteudo.insertAdjacentHTML("beforeend",
        `
        <div class="produto">
            <span class="nome-produto">${nome}</span>

            <div class="controle">
                <button type="button" class="menos">−</button>
                <span class="quantidade">0</span>
                <button type="button" class="mais">+</button>
            </div>
        </div>
        `
    );


    nomeProduto.value = "";

const novoProduto = conteudo.lastElementChild;

const menos = novoProduto.querySelector(".menos");
const mais = novoProduto.querySelector(".mais");
const quantidade = novoProduto.querySelector(".quantidade");

let valor = 0;

mais.addEventListener("click", function() {
    valor++;
    quantidade.textContent = valor;
});

menos.addEventListener("click", function() {
    if (valor > 0) {
        valor--;
        quantidade.textContent = valor;
    }
});
});
        