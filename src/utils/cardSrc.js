//Clubs

const cA = require('../assets/cards/CLUB-1.svg')
const cK = require('../assets/cards/CLUB-13-KING.svg')
const cQ = require('../assets/cards/CLUB-12-QUEEN.svg')
const cJ = require('../assets/cards/CLUB-11-JACK.svg')
const c10 = require('../assets/cards/CLUB-10.svg')
const c9 = require('../assets/cards/CLUB-9.svg')
const c8 = require('../assets/cards/CLUB-8.svg')
const c7 = require('../assets/cards/CLUB-7.svg')
const c6 = require('../assets/cards/CLUB-6.svg')
const c5 = require('../assets/cards/CLUB-5.svg')
const c4 = require('../assets/cards/CLUB-4.svg')
const c3 = require('../assets/cards/CLUB-3.svg')
const c2 = require('../assets/cards/CLUB-2.svg')

//Hearts

const hA = require('../assets/cards/HEART-1.svg')
const hK = require('../assets/cards/HEART-13-KING.svg')
const hQ = require('../assets/cards/HEART-12-QUEEN.svg')
const hJ = require('../assets/cards/HEART-11-JACK.svg')
const h10 = require('../assets/cards/HEART-10.svg')
const h9 = require('../assets/cards/HEART-9.svg')
const h8 = require('../assets/cards/HEART-8.svg')
const h7 = require('../assets/cards/HEART-7.svg')
const h6 = require('../assets/cards/HEART-6.svg')
const h5 = require('../assets/cards/HEART-5.svg')
const h4 = require('../assets/cards/HEART-4.svg')
const h3 = require('../assets/cards/HEART-3.svg')
const h2 = require('../assets/cards/HEART-2.svg')

//Spades

const sA = require('../assets/cards/SPADE-1.svg')
const sK = require('../assets/cards/SPADE-13-KING.svg')
const sQ = require('../assets/cards/SPADE-12-QUEEN.svg')
const sJ = require('../assets/cards/SPADE-11-JACK.svg')
const s10 = require('../assets/cards/SPADE-10.svg')
const s9 = require('../assets/cards/SPADE-9.svg')
const s8 = require('../assets/cards/SPADE-8.svg')
const s7 = require('../assets/cards/SPADE-7.svg')
const s6 = require('../assets/cards/SPADE-6.svg')
const s5 = require('../assets/cards/SPADE-5.svg')
const s4 = require('../assets/cards/SPADE-4.svg')
const s3 = require('../assets/cards/SPADE-3.svg')
const s2 = require('../assets/cards/SPADE-2.svg')

//Diamonds

const dA = require('../assets/cards/DIAMOND-1.svg')
const dK = require('../assets/cards/DIAMOND-13-KING.svg')
const dQ = require('../assets/cards/DIAMOND-12-QUEEN.svg')
const dJ = require('../assets/cards/DIAMOND-11-JACK.svg')
const d10 = require('../assets/cards/DIAMOND-10.svg')
const d9 = require('../assets/cards/DIAMOND-9.svg')
const d8 = require('../assets/cards/DIAMOND-8.svg')
const d7 = require('../assets/cards/DIAMOND-7.svg')
const d6 = require('../assets/cards/DIAMOND-6.svg')
const d5 = require('../assets/cards/DIAMOND-5.svg')
const d4 = require('../assets/cards/DIAMOND-4.svg')
const d3 = require('../assets/cards/DIAMOND-3.svg')
const d2 = require('../assets/cards/DIAMOND-2.svg')
const redBack = require('../assets/cards/RED_BACK.svg')


const putCardStringGetImage = {
    "redBack": redBack,
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