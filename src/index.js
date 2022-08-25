import './index.html';
import './index.scss'
import code from './img/code.jpg'
import {mult, sum} from "./modules/calc";

const imgWrap = document.querySelector('.img')
const  img = new Image();
img.width = 700
img.src = code;
imgWrap.append(img)

console.log(mult(2,4))
console.log(sum(3,5))
