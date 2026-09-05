
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
    