function Ninja(name, clan) {
  this.name = name;
  this.clan = clan;
}

  function Uchiha(name, clan, jutsu, characteristics) {    
    Ninja.call(this, name, clan);

    this.characteristics = function() {
      console.log(`${name}, é do clan ${clan} e tem como jutsu mais poderoso o ${jutsu}.`)
    }
  }

  function Hyuga(name, clan, jutsu) {
    Uchiha.call(this, name, clan, jutsu);

    this.characteristics = function(){
      console.log(`${name}, é do clan ${clan} e tem como jutsu mais poderoso o ${jutsu}.`)
      console.log(`Com o Byakugan, os integrantes do Clã ${clan} ganham um campo de visão que alcança 360 graus, com a exceção de um pequeno ponto cego que fica na altura da nuca.`);
    }
  }

const sasuke = new Uchiha("Sasuke", "Uchiha", "Susanoo");
const neji = new Hyuga("Neji", "Hyuga", "Byakugan");
const hinata = new Hyuga("Hinata", "Hyuga", "Byakugan")

console.log(sasuke);
sasuke.characteristics();

console.log(neji);
neji.characteristics();

console.log(hinata);
hinata.characteristics();