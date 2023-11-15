class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  class Cliente {
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
    }
  }
  
  class Venda {
    constructor(cliente, produtos) {
      this.cliente = cliente;
      this.produtos = produtos;
    }
  
    total() {
      return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
  }
  
  const clientsStringJson = '[{"name":"Client 1", "cpf":"12345678901"},' +
    '{"name":"Client 2", "cpf":"10987654321"},' +
    '{"name":"Client 3", "cpf":"12345098765"},' +
    '{"name":"Client 4", "cpf":"12345098765"},' +
    '{"name":"Client 5", "cpf":"12345098765"},' +
    '{"name":"Client 6", "cpf":"12345098765"},' +
    '{"name":"Client 7", "cpf":"12345098765"},' +
    '{"name":"Client 8", "cpf":"12345098765"},' +
    '{"name":"Client 9", "cpf":"12345098765"},' +
    '{"name":"Client 10", "cpf":"12345098765"}]';
  
  const productsStringJson = '[{"name":"Product 1", "price":1.00},' +
    '{"name":"Product 2", "price":2.00},' +
    '{"name":"Product 3", "price":3.00},' +
    '{"name":"Product 4", "price":4.00},' +
    '{"name":"Product 5", "price":5.00},' +
    '{"name":"Product 6", "price":6.00},' +
    '{"name":"Product 7", "price":7.00},' +
    '{"name":"Product 8", "price":8.00},' +
    '{"name":"Product 9", "price":9.00},' +
    '{"name":"Product 10", "price":10.00}]';
  
  const clients = JSON.parse(clientsStringJson);
  const products = JSON.parse(productsStringJson);
  
  function criarVenda(cliente, produtos) {
    const venda = new Venda(cliente, produtos);
    console.log(`Valor total da venda para ${cliente.nome}: R$${venda.total().toFixed(2)}`);
  }
  
  function promptCliente() {
    console.log('Selecione o cliente:');
    clients.forEach((cliente, index) => {
      console.log(`${index + 1}. ${cliente.nome}`);
    });
    return parseInt(prompt('Digite o número do cliente:')) - 1;
  }
  
  function promptProduto() {
    console.log('Selecione o produto:');
    products.forEach((produto, index) => {
      console.log(`${index + 1}. ${produto.nome} - R$${produto.preco.toFixed(2)}`);
    });
    return parseInt(prompt('Digite o número do produto:')) - 1;
  }
  
  function exibirMenu() {
    while (true) {
      const escolha = parseInt(prompt(
        'Escolha uma opção:\n' +
        '1. Inserir Cliente\n' +
        '2. Inserir Produto\n' +
        '3. Realizar Venda\n' +
        '4. Sair'
      ));
  
      switch (escolha) {
        case 1:
          const nomeCliente = prompt('Digite o nome do cliente:');
          const cpfCliente = prompt('Digite o CPF do cliente:');
          const novoCliente = new Cliente(nomeCliente, cpfCliente);
          clients.push(novoCliente);
          console.log(`Cliente ${nomeCliente} inserido com sucesso!\n`);
          break;
        case 2:
          const nomeProduto = prompt('Digite o nome do produto:');
          const precoProduto = parseFloat(prompt('Digite o preço do produto:'));
          const novoProduto = new Produto(nomeProduto, precoProduto);
          products.push(novoProduto);
          console.log(`Produto ${nomeProduto} inserido com sucesso!\n`);
          break;
        case 3:
          if (clients.length === 0 || products.length === 0) {
            console.log('É necessário ter pelo menos um cliente e um produto cadastrado para realizar uma venda.\n');
            break;
          }
  
          const clienteIndex = promptCliente();
          const clienteVenda = clients[clienteIndex];
  
          const numProdutos = parseInt(prompt('Quantos produtos deseja adicionar à venda?'));
          const produtosSelecionados = [];
  
          for (let i = 0; i < numProdutos; i++) {
            const produtoIndex = promptProduto();
            produtosSelecionados.push(products[produtoIndex]);
          }
  
          criarVenda(clienteVenda, produtosSelecionados);
          break;
        case 4:
          return;
        default:
          console.log('Opção inválida. Tente novamente.\n');
      }
    }
  }
  
  
  exibirMenu();
  