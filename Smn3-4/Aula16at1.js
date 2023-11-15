// Classe Pai
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerSom() {
      console.log('Algum som genérico');
    }
  }
  
  // Classe Filha que herda de Animal
  class Gato extends Animal {
    constructor(nome, cor) {
      // Chama o construtor da classe pai usando super
      super(nome);
      this.cor = cor;
    }
  
    fazerSom() {
      console.log('Miau!'); // Sobrescreve o método da classe pai
    }
  
    ronronar() {
      console.log('Purrrr');
    }
  }
  
  // Criando uma instância da classe filha
  const meuGato = new Gato('Frajola', 'listrado');
  
  // Acessando propriedades e métodos
  console.log(meuGato.nome); // Saída: Frajola
  meuGato.fazerSom(); // Saída: Miau!
  meuGato.ronronar(); // Saída: Purrrr
  