const pessoa = {
    nome: "Carlos",
    idade: 28,
    saudar: function() {
      console.log("Olá, meu nome é " + this.nome);
    }
  };
  
  pessoa.saudar(); 