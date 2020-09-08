let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = "sim";

  let person = {
      personagem: "Margarida e Tio Patinhas",
      origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota:"Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
      recorrente : "Ambos recorrentes"
  }

  for (let key in person){
        console.log(person[key])
  }
  //Exercicio parte I