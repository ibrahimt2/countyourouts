//Clubs

const cA = require('cardsJS/cards/AC.svg')
const cK = require('cardsJS/cards/KC.svg')
const cQ = require('cardsJS/cards/QC.svg')
const cJ = require('cardsJS/cards/JC.svg')
const c10 = require('cardsJS/cards/10C.svg')
const c9 = require('cardsJS/cards/9C.svg')
const c8 = require('cardsJS/cards/8C.svg')
const c7 = require('cardsJS/cards/7C.svg')
const c6 = require('cardsJS/cards/6C.svg')
const c5 = require('cardsJS/cards/5C.svg')
const c4 = require('cardsJS/cards/4C.svg')
const c3 = require('cardsJS/cards/3C.svg')
const c2 = require('cardsJS/cards/2C.svg')

//Hearts

const hA = require('cardsJS/cards/AH.svg')
const hK = require('cardsJS/cards/KH.svg')
const hQ = require('cardsJS/cards/QH.svg')
const hJ = require('cardsJS/cards/JH.svg')
const h10 = require('cardsJS/cards/10H.svg')
const h9 = require('cardsJS/cards/9H.svg')
const h8 = require('cardsJS/cards/8H.svg')
const h7 = require('cardsJS/cards/7H.svg')
const h6 = require('cardsJS/cards/6H.svg')
const h5 = require('cardsJS/cards/5H.svg')
const h4 = require('cardsJS/cards/4H.svg')
const h3 = require('cardsJS/cards/3H.svg')
const h2 = require('cardsJS/cards/2H.svg')

//Spades

const sA = require('cardsJS/cards/AS.svg')
const sK = require('cardsJS/cards/KS.svg')
const sQ = require('cardsJS/cards/QS.svg')
const sJ = require('cardsJS/cards/JS.svg')
const s10 = require('cardsJS/cards/10S.svg')
const s9 = require('cardsJS/cards/9S.svg')
const s8 = require('cardsJS/cards/8S.svg')
const s7 = require('cardsJS/cards/7S.svg')
const s6 = require('cardsJS/cards/6S.svg')
const s5 = require('cardsJS/cards/5S.svg')
const s4 = require('cardsJS/cards/4S.svg')
const s3 = require('cardsJS/cards/3S.svg')
const s2 = require('cardsJS/cards/2S.svg')

//Diamonds

const dA = require('cardsJS/cards/AD.svg')
const dK = require('cardsJS/cards/KD.svg')
const dQ = require('cardsJS/cards/QD.svg')
const dJ = require('cardsJS/cards/JD.svg')
const d10 = require('cardsJS/cards/10D.svg')
const d9 = require('cardsJS/cards/9D.svg')
const d8 = require('cardsJS/cards/8D.svg')
const d7 = require('cardsJS/cards/7D.svg')
const d6 = require('cardsJS/cards/6D.svg')
const d5 = require('cardsJS/cards/5D.svg')
const d4 = require('cardsJS/cards/4D.svg')
const d3 = require('cardsJS/cards/3D.svg')
const d2 = require('cardsJS/cards/2D.svg')
const redBack = require('cardsJS/cards/Red_Back.svg')
const blueBack = require('cardsJS/cards/Blue_Back.svg')

const putCardStringGetImage = {
    "redBack": redBack,
    "blueBack": blueBack,
    "Ac": cA,
    "2c": c2,
    "3c": c3,
    "4c": c4,
    "5c": c5,
    "6c": c6,
    "7c": c7,
    "8c": c8,
    "9c": c9,
    "10c": c10,
    'Jc': cJ,
    'Qc': cQ,
    'Kc': cK,
    'Ah': hA,
    "2h": h2,
    "3h": h3,
    "4h": h4,
    "5h": h5,
    "6h": h6,
    "7h": h7,
    "8h": h8,
    "9h": h9,
    "10h": h10,
    "Jh": hJ,
    "Qh": hQ,
    "Kh": hK,
    "As": sA,
    "2s": s2,
    "3s": s3,
    "4s": s4,
    "5s": s5,
    "6s": s6,
    "7s": s7,
    "8s": s8,
    "9s": s9,
    "10s": s10,
    'Js': sJ,
    'Qs': sQ,
    'Ks': sK,
    'Ad': dA,
    "2d": d2,
    "3d": d3,
    "4d": d4,
    "5d": d5,
    "6d": d6,
    "7d": d7,
    "8d": d8,
    "9d": d9,
    "10d": d10,
    'Jd': dJ,
    'Qd': dQ,
    'Kd': dK,
  };



module.exports = {
    putCardStringGetImage: putCardStringGetImage
}