let heroi = "Link"
let xp = 9810;
let nivel = ""

if(xp <= 1000){
  nivel = "ferro"
}
if(xp >= 1001 && xp <= 2000){
  nivel = "Bronze"
}

if(xp >= 2001 && xp <= 5000){
    nivel = "Prata"
}

if(xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
}

if(xp >= 7001 && xp <= 8000){
    nivel = "Platina"
}

if(xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
}

if(xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}

if(xp > 10001){
    nivel = "Radiante"
}

console.log("O herói " + heroi + " está no nível: " + nivel)