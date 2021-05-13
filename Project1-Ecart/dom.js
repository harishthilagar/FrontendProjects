function div(id) {
  let container = document.getElementById('container1');
  let div = document.createElement('div');
  div.setAttribute('id',id);
  div.setAttribute('class','div_size');
  container.appendChild(div);
}
let j = 1;
 function divid(id) {
  let div1 = document.getElementById(id);
  return div1;
 }
 function name(id,name){
    let div1 = document.getElementById(id)
    let p = document.createElement('p')
    p.innerText = name;
    div1.appendChild(p)
}

 function image(id,image) {
    let div1 =divid(id);
    let image1 = document.createElement('img');
    image1.setAttribute("src",image)
    image1.setAttribute('alt','pic')
    image1.setAttribute('class','image_size')
    div1.appendChild(image1);
}
 function price(id,price) {
     let div1 =divid(id);
     let price1 = document.createElement('p')
     price1.setAttribute('class','price')
     div1.appendChild(price1);
     price1.innerText = "Rs. " +price;


}
function cartButton(id) {
    let div1 =divid(id);
    let div2 = document.createElement('div')
    div2.setAttribute('class','cart_div')
    let cart1 = document.createElement('button')
    cart1.setAttribute('class','cart_button1')
    cart1.setAttribute('onclick','cartMinus()')
    cart1.innerText = "-"
    let cart = document.createElement('p')
    cart.setAttribute('class','cart_button')
    let fab = document.createElement('i')
    fab.setAttribute('class','fas fa-cart-plus')
    cart.innerText = "Add To Cart"
    let cart2 = document.createElement('button')
    cart2.setAttribute('class','cart_button2')
    cart2.setAttribute('onclick','cartPlus()')
    cart2.innerText = "+"
    div1.appendChild(div2)
    div2.appendChild(cart1)
    div2.appendChild(cart)
    cart.appendChild(fab);
    div2.appendChild(cart2)
    j++;
 }
 let k = 0;
 function  cartPlus(){
    k++
    let cartP = document.getElementById('cartplus');
    cartP.innerText = k;
 }
function  cartMinus(){
  if(k>0){
    k--;
    let cartP = document.getElementById('cartplus');
    cartP.innerText = k;
  }
 }



let data=[
  {
    id:1,
    name:"Apple iphone 11 pro",
    price:"81,900",
    offer:10,
    image:"images/apple_iphone_11_pro_max.jpg"

  },
  {
    id:2,
    name:"Apple iphone 12 mini",
    price:"67,100",
    offer:10,
    image:"images/apple_iphone_12_mini.jpg"
  },
  {
    id:3,
    name:"Redmi 9",
    price:"8,799",
    offer:10,
    image:"images/mi_9.jpg"

  },
  {
    id:4,
    name:"Redmi Note 9 pro",
    price:"12,999",
    offer:10,
    image:"images/mi_note_9.jpg"

  },
  {
    id:5,
    name:"Redmi 10i 5G",
    price:"21,999",
    offer:10,
    image:"images/mi10i.jpg"

  },
  {
    id:6,
    name:"OnePlus 8T 5G",
    price:"42,999",
    offer:10,
    image:"images/oneplus_8t_5g.jpg"

  },
  {
    id:7,
    name:"OnePlus Nord 5G",
    price:"29,999",
    offer:10,
    image:"images/oneplus_nord_5g.jpg"
  },

  {
    id:8,
    name:"Oppo A31",
    price:"11,990",
    offer:10,
    image:"images/oppo_a31.jpg"
  },
  {
    id:9,
    name:"Oppo F19 Pro",
    price:"23,490",
    offer:10,
    image:"images/oppo_f19_pro.jpg"
  },
  {
    id:10,
    name:"Samsung Galaxy S21 5G",
    price:"69,999",
    offer:10,
    image:"images/samsung_galaxy_s21_5g.jpg"
  }
]

for(let i=0;i<data.length;i++){
       div(data[i].id);
       name(data[i].id,data[i].name)
       image(data[i].id,data[i].image)
       price(data[i].id,data[i].price)
       cartButton(data[i].id);
     }

function clear(){
  console.log("call1");
  let div = document.getElementById('container1');
  let arr = new Array();
  arr = div.getElementsByTagName('div');
  arlength = arr.length /2;
    for(let i=0;i<arlength;i++){
         let div1  = div.getElementsByTagName('div')[0];
         let value1 = div1.getElementsByTagName('p')[0].innerText;
             for(let j = 0;j < arr.length;j++){
                if((j%2 ) == 0) {
                   let div2  = div.getElementsByTagName('div')[j];
                   let value2 = div2.getElementsByTagName('p')[0].innerText;
                   if(value1 == value2 ){
                           div.removeChild(div1)
                           j -= 2;
                   }
                 }
          }
     }
}



 function searchkey() {
   console.log("call");
       let searchkey = document.getElementById('search_bar').value.toLowerCase();
       clear()
       for(let i=0;i<data.length;i++){
         let names = data[i].name.toLowerCase();
           if(names.includes(searchkey)){
             div(data[i].id);
             name(data[i].id,data[i].name)
             image(data[i].id,data[i].image)
             price(data[i].id,data[i].price)
             cartButton(data[i].id);
           }
       }
  }
