//Creare array di automobili

const automobili = [
  {
    marca: "Fiat",
    modello: "Punto",
    alimentazione: "benzina",
  },
  {
    marca: "Ford",
    modello: "Fiesta",
    alimentazione: "benzina",
  },
  {
    marca: "Renault",
    modello: "Clio",
    alimentazione: "diesel",
  },
  {
    marca: "Volkswagen",
    modello: "Golf",
    alimentazione: "elettrico",
  },
  {
    marca: "BMW",
    modello: "Model 3",
    alimentazione: "ibrida",
  },
  {
    marca: "Tesla",
    modello: "Yaris",
    alimentazione: "gpl",
  },
  {
    marca: "Nissan",
    modello: "Corsa",
    alimentazione: "metano",
  },
  {
    marca: "Opel",
    modello: "500",
    alimentazione: "elettrico",
  },
  {
    marca: "fiat",
    modello: "Leaf",
    alimentazione: "diesel",
  },
  {
    marca: "toyota",
    modello: "i3",
    alimentazione: "benzina",
  },
];

const benzina = [];
const diesel = [];
const altre = [];

automobili.forEach((auto) => {
  switch (auto.alimentazione) {
    case "benzina":
      benzina.push(auto);
      break;
    case "diesel":
      diesel.push(auto);
      break;
    default:
      altre.push(auto);
      break;
  }
});

console.log("Auto a benzina:" , benzina);
console.log("Auto a diesel", diesel);
console.log("Altre auto" , altre);
