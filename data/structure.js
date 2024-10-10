import { biznez_lunch } from "./menuItems/biznez_lunch.js";
import { desertler } from "./menuItems/desertler.js";
import { isti_ickiler } from "./menuItems/isti_ickiler.js";
import { isti_qelyanalti_pive_ile } from "./menuItems/isti_qelyanalti_pive_ile.js";
import { isti_yemekler } from "./menuItems/isti_yemekler.js";
import { kokteyl_shot } from "./menuItems/kokteyl_shot.js";
import { murebbeler } from "./menuItems/murebbeler.js";
import { pive_cellek } from "./menuItems/pive_cellek.js";
import { pive_qelyanaltilari } from "./menuItems/pive_qelyanaltilari.js";
import { qarnirler } from "./menuItems/qarnirler.js";
import { qelyanlar } from "./menuItems/qelyanlar.js";
import { salatlar } from "./menuItems/salatlar.js";
import { serablar } from "./menuItems/serablar.js";
import { serin_ickiler } from "./menuItems/serin_ickiler.js";
import { setler } from "./menuItems/setler.js";
import { souslar } from "./menuItems/souslar.js";
import { spirtli_ickiler } from "./menuItems/spirtli_ickiler.js";
import { suse_piveler } from "./menuItems/suse_piveler.js";
import { viskiler } from "./menuItems/viskiler.js";

export const structure = [

  {
    row: 1,
    label: "Spİrtlİ İçkİlər",
    data: spirtli_ickiler
  },

  {
    row: 2,
    label: "Şərablar",
    data: serablar
  },

  {
    row: 3,
    label: "İstİ İçkİlər",
    data: isti_ickiler
  },

  {
    row: 4,
    label: "Pİvə Çəllək",
    data: pive_cellek
  },

  {
    row: 5,
    label: "Pİvə Qəlyanaltİlarİ",
    data: pive_qelyanaltilari
  },

  {
    row: 6,
    label: "İstİ Qəlyanaltı Pİvə İlə",
    data: isti_qelyanalti_pive_ile
  },

  {
    row: 7,
    label: "Bİznes Lunch",
    data: biznez_lunch
  },

  {
    row: 8,
    label: "Salatlar",
    data: salatlar
  },

  {
    row: 9,
    label: "Şüşə Pİvələr",
    data: suse_piveler
  },

  {
    row: 10,
    label: "Qarnİrlər",
    data: qarnirler
  },

  {
    row: 11,
    label: "Setlər",
    data: setler
  },

  {
    row: 12,
    label: "Vİskİlər",
    data: viskiler
  },

  {
    row: 13,
    label: "Qəlyanlar",
    data: qelyanlar
  },

  {
    row: 14,
    label: "İstİ Yeməklər",
    data: isti_yemekler
  },

  {
    row: 15,
    label: "Souslar",
    data: souslar
  },

  {
    row: 16,
    label: "Sərİn İçkİlər",
    data: serin_ickiler
  },

  {
    row: 17,
    label: "Mürəbbələr",
    data: murebbeler
  },

  {
    row: 18,
    label: "Desertlər",
    data: desertler
  },

  {
    row: 19,
    label: "Kokteyl və Shot",
    data: kokteyl_shot
  },

]

structure.sort((a,b) => a.row - b.row);



var menuList = document.querySelector(".menu-list");
var menuListData = "";

for(let i =0; i<structure.length; i++){
    let listData = "";

    structure[i].data.map((item)=>{
        listData+= `
        <div class="price-food-part">
        
        <p class="food-name">
            ${item.title}
            <span>${item.gram} </span>
        </p>

        <p class="food-price">${item.price} azn</p>
    </div>`
    })
    

menuListData += `
<div class="col-12 col-sm-12 col-md-6">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#${removeSpaces(structure[i].label)}"
                      aria-expanded="false"
                      aria-controls="${removeSpaces(structure[i].label)}"
                    > 
                      <span>${structure[i].label.toUpperCase()}</span>
                    </button>
                  </h2>
                  <div
                    id="${removeSpaces(structure[i].label)}"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="list">
                        ${listData}
                      </div>
                    </div>
                  </div>
                </div>
              </div>`

}

function removeSpaces(str) {
    return str.replace(/ /g, '');
}

menuList.innerHTML = menuListData;
