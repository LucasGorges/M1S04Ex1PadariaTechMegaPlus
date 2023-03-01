class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.itensRegistrados = [];
      this.totalConta = 0;
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const novoProduto = { codigoBarra, preco, nome };
      this.estoque.push(novoProduto);
    }
  
    iniciarAtendimento(nomeCliente) {
      this.cliente = nomeCliente;
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
      if (produto) {
        for (let i = 0; i < quantidade; i++) {
          this.itensRegistrados.push(produto);
          this.totalConta += produto.preco;
        }
        console.log(`${quantidade} unidades do produto ${produto.nome} foram adicionadas à conta.`);
      } else {
        console.log(`Produto com código de barras ${codigoBarra} não encontrado no estoque.`);
      }
    }
  
    verificarTotalConta() {
      console.log(`O valor total da conta de ${this.cliente} é R$ ${this.totalConta.toFixed(2)}.`);
    }
  
    fecharConta(dinheiroRecebido) {
      const troco = dinheiroRecebido - this.totalConta;
      if (troco < 0) {
        console.log(`Dinheiro insuficiente para pagar a conta de R$ ${this.totalConta.toFixed(2)}.`);
      } else {
        console.log(`O troco é de R$ ${troco.toFixed(2)}. Obrigado pela preferência!`);
        this.itensRegistrados = [];
        this.totalConta = 0;
      }
    }
  }
  
  // Exemplo de uso da classe CaixaRegistradora:
  
  const caixa = new CaixaRegistradora();
  caixa.adicionarProduto(1, 2.5, 'Refrigerante');
  caixa.adicionarProduto(2, 5, 'Hambúrguer');
  caixa.iniciarAtendimento('João');
  caixa.adicionarItem(1, 2);
  caixa.adicionarItem(2, 1);
  caixa.verificarTotalConta(); // O valor total da conta de João é R$ 10.00.
  caixa.fecharConta(15); // O troco é de R$ 5.00. Obrigado pela preferência!
  