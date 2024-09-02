import {pive_mezeleri} from './menuItems/pive_mezeleri.js'
import {baliq_mehsullari} from './menuItems/baliq_mehsullari.js'
import {biznes_lunch} from './menuItems/biznes_lunch.js'
import {desertler} from './menuItems/desertler.js'
import {isti_ickiler} from './menuItems/isti_ickiler.js'
import {pive_cellek} from './menuItems/pive_cellek.js'
import {qarnirler} from './menuItems/qarnirler.js'
import {qelyan} from './menuItems/qelyan.js'
import {sac_yemekleri} from './menuItems/sac_yemekleri.js'
import {salatlar} from './menuItems/salatlar.js'
import {serablar} from './menuItems/serablar.js'
import {serin_ickiler} from './menuItems/serin_ickiler.js'
import {setler} from './menuItems/setler.js'
import {soyuq_qelyanalti} from './menuItems/soyuq_qelyanalti.js'
import {spirtli_ickiler} from './menuItems/spirtli_icki.js'
import {suse_piveler} from './menuItems/suse_piveler.js'
import {viskiler} from './menuItems/viskiler.js'
import { et_yemekleri } from './menuItems/et_yemekleri.js'

export const structure = [

    {
        row : 1,
        label : "Soyuq qəlyanaltı",
        data : soyuq_qelyanalti
    },

    {
        row : 2,
        label : "Salatlar",
        data : salatlar
    },

    {
        row : 3,
        label : "Qarnİrlər",
        data : qarnirler
    },

    {
        row : 4,
        label : "Sac Yeməklərİ",
        data : sac_yemekleri
    },
    {
        row : 4,
        label : "Ət Yeməklərİ",
        data : et_yemekleri
    },
    {
        row : 5,
        label : "Balıq Məhsulları",
        data : baliq_mehsullari
    },

    {
        row : 6,
        label : "Bİznes Lunch",
        data : biznes_lunch
    },

    {
        row : 7,
        label : "Desertlər",
        data : desertler
    },

    {
        row : 8,
        label : "İstİ İçkİlər",
        data : isti_ickiler
    },

    {
        row : 9,
        label : "Sərİn İçkİlər",
        data : serin_ickiler
    },

    {
        row : 10,
        label : "Spİrtlİ İçkİlər",
        data : spirtli_ickiler
    },

    {
        row : 11,
        label : "Şərablar",
        data : serablar
    },

    {
        row : 12,
        label : "Şüşə Pİvələr",
        data : suse_piveler
    },

    {
        row : 13,
        label : "Pİvə Çəllək",
        data : pive_cellek
    },
    
    {
        row : 14,
        label : "Pİvə Məzələrİ",
        data : pive_mezeleri
    },
    
    {
        row : 15,
        label : "Vİskİlər",
        data : viskiler
    },
    
    {
        row : 16,
        label : "Qəlyan",
        data : qelyan
    },
        
    {
        row : 17,
        label : "Setlər",
        data : setler
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
        <p class="food-name">${item.title}</p>
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

