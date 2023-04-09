//language & theme mode

let LanguageMode = 'en'
let ThemeMode = 'dark'
let languagebtn = document.getElementById('language')
let arbtn =document.getElementById('languageA')
let enbtn =document.getElementById('languageE')
let themebtn =document.getElementById('ChangeModeImage')


themebtn.onclick = function (){
    
 if(ThemeMode == 'dark'){ThemeMode = 'light' ;themebtn.src = './Untitled-2.png'}else{ThemeMode = 'dark' ;themebtn.src = './Untitled-1.png'}
 TheTheme()
};


languagebtn.onclick = function(){
    languagebtn.style.display = 'none'
    arbtn.style.display = 'inline-block'
    enbtn.style.display = 'inline-block'
}
function changelanguage(lan){

    languagebtn.style.display = 'inline-block'
    arbtn.style.display = 'none'
    enbtn.style.display = 'none'
    LanguageMode = lan

}

function TheTheme(){if(LanguageMode == 'en'){
    if(ThemeMode == 'dark'){TheStyle.innerHTML = `*{margin: 0px;padding: 0px;}
    body{font-family: system-ui;background-color: rgb(34, 34, 34);color: white;}
    #page{width: 85%;margin: auto;position: relative;}
    #page-title{text-align: center; text-transform:capitalize ;margin: 10px;}
    input{width: 100%;height: 40px;background-color: rgb(24, 24, 24);outline: none;border: none;border-radius: 5px;margin: 4px;font-size: 15px;color: white;text-indent: 7px}
    input:hover{background-color: rgb(14, 14, 14);}
    #price input{width: 160px;}
    input:focus{transform: scale(1.1);background-color: rgb(14, 14, 14);border: 1px solid rgb(18, 172, 126);}
    input::before{content:' ';}
    #total{background-color: #a81401;border-radius: 5px;padding: 5px;}
    #total::before {content: 'Total: ';}
    button{width: 100%;height: 22px;margin: 10px 0; background-color: #12ac7e;border: none;cursor: pointer;border-radius: 8px;transition: 0.3s;}
    button:hover{background-color: #17cc96;letter-spacing: 1.3px;}
    #mid{align-items: center;}
    table{width: 100%;text-align: center;margin: 10px ;}
    .btn-update{position: relative; right: 5px;}
    #Error{height: 50px;background-color: rgb(14, 14, 14);margin: 10px;position:relative ;right: 6px;border: #a81401 3px solid;text-align: start;text-indent: 7px;line-height: 47px;text-transform: capitalize;padding: 10px;font-size: 16px;position: relative;display:none;}
    #THEX{background-color: rgb(236, 14, 14);width: 13px;height: 13px;line-height: 4px;position: relative;left: 6px;bottom: 10px;}
    #PageText{margin: 10px}
    #ColspanPlace{text-align: left;font-size: 20px;opacity: 0.5;}
    input[type=number] {-moz-appearance: textfield;}
    input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {-webkit-appearance: none;margin: 0;}
    #ShowTitlePlace{text-transform: capitalize;}
    #item-count{display: none;}
    #language{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;}
    #languageA{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #languageE{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #ChangeModeImage{position: absolute;right: 10px;top: 10px;}`;total.style.backgroundColor = '#18a81f'}else{TheStyle.innerHTML = `*{margin: 0px;padding: 0px;}
    body{font-family: system-ui;background-color: rgb(245, 245, 245);color: rgb(0, 0, 0);}
    #page{width: 85%;margin: auto;position: relative;}
    #page-title{text-align: center; text-transform:capitalize ;margin: 10px;}
    input{width: 100%;height: 40px;background-color: rgb(201, 201, 201);outline: none;border: none;border-radius: 5px;margin: 4px;font-size: 15px;color: rgb(0, 0, 0);text-indent: 7px}
    input:hover{background-color: rgb(223, 223, 223);}
    #price input{width: 160px;}
    input:focus{transform: scale(1.1);background-color: rgb(241, 241, 241);border: 1px solid #10e7a7;}
    input::before{content:' ';}
    #total{background-color: #da0f00;border-radius: 5px;padding: 5px;}
    #total::before {content: 'المجموع: ';}
    button{width: 100%;height: 22px;margin: 10px 0; background-color: #10e7a7;border: none;cursor: pointer;border-radius: 8px;transition: 0.3s;}
    button:hover{background-color: #10e7a7;letter-spacing: 1.3px;}
    #mid{align-items: center;}
    table{width: 100%;text-align: center;margin: 10px ;}
    .btn-update{position: relative; right: 5px;}
    #Error{height: 50px;background-color: rgb(241, 241, 241);margin: 10px;position:relative ;right: 6px;border: #a81401 3px solid;text-align: start;text-indent: 7px;line-height: 47px;text-transform: capitalize;padding: 10px;font-size: 16px;position: relative;display:none;}
    #THEX{background-color: rgb(236, 14, 14);width: 13px;height: 13px;line-height: 4px;position: relative;left: 6px;bottom: 10px;}
    #PageText{margin: 10px}
    #ColspanPlace{text-align: left;font-size: 20px;opacity: 0.5;}
    input[type=number] {-moz-appearance: textfield;}
    input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {-webkit-appearance: none;margin: 0;}
    #ShowTitlePlace{text-transform: capitalize;}
    #item-count{display: none;}
    #language{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;}
    #languageA{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #languageE{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #ChangeModeImage{position: absolute;right: 10px;top: 10px;}`;total.style.backgroundColor = '#da0f00'}
    
}else{
    if(ThemeMode == 'dark'){TheStyle.innerHTML = `*{margin: 0px;padding: 0px;}
    body{font-family: system-ui;background-color: rgb(34, 34, 34);color: white;}
    #page{width: 85%;margin: auto;position: relative;}
    #page-title{text-align: center; text-transform:capitalize ;margin: 10px;}
    input{width: 100%;height: 40px;background-color: rgb(24, 24, 24);outline: none;border: none;border-radius: 5px;margin: 4px;font-size: 15px;color: white;text-indent: 7px}
    input:hover{background-color: rgb(14, 14, 14);}
    #price input{width: 160px;}
    input:focus{transform: scale(1.1);background-color: rgb(14, 14, 14);border: 1px solid rgb(18, 172, 126);}
    input::before{content:' ';}
    #total{background-color: #a81401;border-radius: 5px;padding: 5px;}
    #total::after {content: ' :المجموع';}
    button{width: 100%;height: 22px;margin: 10px 0; background-color: #12ac7e;border: none;cursor: pointer;border-radius: 8px;transition: 0.3s;}
    button:hover{background-color: #17cc96;letter-spacing: 1.3px;}
    #mid{align-items: center;}
    table{width: 100%;text-align: center;margin: 10px ;}
    .btn-update{position: relative; right: 5px;}
    #Error{height: 50px;background-color: rgb(14, 14, 14);margin: 10px;position:relative ;right: 6px;border: #a81401 3px solid;text-align: start;text-indent: 7px;line-height: 47px;text-transform: capitalize;padding: 10px;font-size: 16px;position: relative;display:none;}
    #THEX{background-color: rgb(236, 14, 14);width: 13px;height: 13px;line-height: 4px;position: relative;left: 6px;bottom: 10px;}
    #PageText{margin: 10px}
    #ColspanPlace{text-align: left;font-size: 20px;opacity: 0.5;}
    input[type=number] {-moz-appearance: textfield;}
    input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {-webkit-appearance: none;margin: 0;}
    #ShowTitlePlace{text-transform: capitalize;}
    #item-count{display: none;}
    #language{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;}
    #languageA{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #languageE{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #ChangeModeImage{position: absolute;right: 10px;top: 10px;}`;total.style.backgroundColor = '#18a81f'}else{TheStyle.innerHTML = `*{margin: 0px;padding: 0px;}
    body{font-family: system-ui;background-color: rgb(245, 245, 245);color: rgb(0, 0, 0);}
    #page{width: 85%;margin: auto;position: relative;}
    #page-title{text-align: center; text-transform:capitalize ;margin: 10px;}
    input{width: 100%;height: 40px;background-color: rgb(201, 201, 201);outline: none;border: none;border-radius: 5px;margin: 4px;font-size: 15px;color: rgb(0, 0, 0);text-indent: 7px}
    input:hover{background-color: rgb(223, 223, 223);}
    #price input{width: 160px;}
    input:focus{transform: scale(1.1);background-color: rgb(241, 241, 241);border: 1px solid #10e7a7;}
    input::before{content:' ';}
    #total{background-color: #da0f00;border-radius: 5px;padding: 5px;}
    #total::after {content: ' :الموجموع';}
    button{width: 100%;height: 22px;margin: 10px 0; background-color: #10e7a7;border: none;cursor: pointer;border-radius: 8px;transition: 0.3s;}
    button:hover{background-color: #10e7a7;letter-spacing: 1.3px;}
    #mid{align-items: center;}
    table{width: 100%;text-align: center;margin: 10px ;}
    .btn-update{position: relative; right: 5px;}
    #Error{height: 50px;background-color: rgb(241, 241, 241);margin: 10px;position:relative ;right: 6px;border: #a81401 3px solid;text-align: start;text-indent: 7px;line-height: 47px;text-transform: capitalize;padding: 10px;font-size: 16px;position: relative;display:none;}
    #THEX{background-color: rgb(236, 14, 14);width: 13px;height: 13px;line-height: 4px;position: relative;left: 6px;bottom: 10px;}
    #PageText{margin: 10px}
    #ColspanPlace{text-align: left;font-size: 20px;opacity: 0.5;}
    input[type=number] {-moz-appearance: textfield;}
    input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {-webkit-appearance: none;margin: 0;}
    #ShowTitlePlace{text-transform: capitalize;}
    #item-count{display: none;}
    #language{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;}
    #languageA{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #languageE{display: inline-block;width: 90px;border-radius: 12px;position: relative;right: 44px;top: 10px;display: none;}
    #ChangeModeImage{position: absolute;right: 10px;top: 10px;}`;total.style.backgroundColor = '#da0f00'}
    
};


}


arbtn.onclick = function(){changelanguage('ar');showitem();DADBTN();thelanguagex()}
enbtn.onclick = function(){changelanguage('en');showitem();DADBTN();thelanguagex()}




//style
let TheStyle = document.getElementById("TheStyle")



//thelanguage
let Thebody = document.getElementById('Thebody')
function thelanguagex(){
 if(LanguageMode == 'en'){
   
    languagebtn.innerHTML = `Language`
    arbtn.innerHTML = `العربية`
    enbtn.innerHTML = `English`
    title.placeholder ='Title'
    price.placeholder ='Price'
    expenses.placeholder ='Taxes'
    ads.placeholder ='Ads'
    discount.placeholder ='Discount'
    countx.placeholder ='Count'
    fakecount.placeholder ='Count'
    kind.placeholder ='Category'
    createBtn.innerHTML ='Create'
    switchbtn.innerHTML ='switch search mode'
    searchplace.placeholder ='Search By Title'
    UpdateBtn.innerHTML = 'Uptade'



 }else{    languagebtn.innerHTML = `اللغة`
 arbtn.innerHTML = `العربية`
 enbtn.innerHTML = `English`
 title.placeholder ='العنوان'
 price.placeholder ='السعر'
 expenses.placeholder ='التكلفة'
 ads.placeholder ='تكلفة الاعلانات'
 discount.placeholder ='التخفيض'
 countx.placeholder ='العدد'
 fakecount.placeholder ='العدد'
 kind.placeholder ='النوع'
 createBtn.innerHTML ='انشاء عنصر جديد'
 switchbtn.innerHTML ='تغيرر طريقة البحث'
 searchplace.placeholder ='البحث باستخدام العنوان'
 UpdateBtn.innerHTML = 'تحديث'
}}






























let UpdateBtn = document.getElementById('Uptade')
UpdateBtn.style.display = 'none'
let ShowTitlePlace = document.getElementById('ShowTitlePlace')
let ThereItemsOrNot = 'not'
if(localStorage.Saved != null){ThereItemsOrNot = 'There'}
//total
let price = document.getElementById('item-price')
let expenses = document.getElementById('item-expenses')
let ads = document.getElementById('item-ads')
let discount = document.getElementById('item-discount')
let total = document.getElementById('total')

 price.onkeyup = function(){Thetotalx()}
 expenses.onkeyup = function(){Thetotalx()}
 ads.onkeyup = function(){Thetotalx()}
 discount.onkeyup = function(){Thetotalx()}


function Thetotalx(){
if(ThemeMode == 'dark'){totalx(`#18a81f`,`#a81401`)}
else{totalx(`#2de236`,`#da0f00`)}

}


function totalx(color1,color2){
    if(price.value != ''){total.innerHTML = (+price.value + +expenses.value + +ads.value - +discount.value);total.style.backgroundColor = color1;}else{total.innerHTML = '';total.style.backgroundColor = color2}
    
}


//create
let createBtn = document.getElementById('create')
let title = document.getElementById('item-title')
let kind = document.getElementById('item-kind')
let items;
if(localStorage.Saved != null){items =JSON.parse(localStorage.Saved);ThereItemsOrNot = 'There'}else{items = [],ThereItemsOrNot = 'not'}
 ;

 createBtn.onclick = function(){if(title.value != '' && price.value != '' && kind.value != '' && countxmode != 'false'){
 create(),LS(),showitem(),DADBTN(),SlotVoid()}else{if(LanguageMode == 'en'){errorfct(`you need add ( title ) ( price ) ( Category ) to create item`);searchplace.value = ''}else{errorfct(`تحتاج لاضافة ( عنوان ) ( سعر ) ( نوع ) لانشاء عنصر`);searchplace.value = ''}
    
 }}


let countx = document.getElementById('item-count')
countx.value = 1
function create(){


if(expenses.value == ''){expenses.value = 0}
if(ads.value == ''){ads.value = 0}
if(discount.value == ''){discount.value = 0}

let newitem = {
Title: title.value,
price: price.value,
expenses: expenses.value,
ads: ads.value,
discount: discount.value,
total: total.innerHTML,
kind: kind.value,
}

    //Count

if(countx.value > 1){for(let i = 0; i < countx.value; i++){items.push(newitem)}}else{items.push(newitem)}

total.style.backgroundColor = '#a81401'
searchplace.value = ''
ThereItemsOrNot = 'There'

}
    
function SlotVoid(){countx.value = 1;title.value = '';price.value = '';expenses.value = '';ads.value = '';discount.value = '';total.innerHTML = '';kind.value = '';}




    //showitem
    function showitem2(lan1,lan2){let NewShowItem =``; for(i = 0 ;i < items.length ; i++){
          
        NewShowItem += `<tr> <td>${i + 1}</td> 
        <td>${items[i].Title}</td> 
        <td>${items[i].price}</td> 
        <td>${items[i].expenses}</td> 
        <td>${items[i].ads}</td> 
        <td>${items[i].discount}</td> 
        <td>${items[i].total}</td> 
        <td>${items[i].kind}</td> 
        <td><button onclick="updatebtn(${i})"class="btn-update">${lan1}</button></td>
        <td><button onclick="DelateItem(${i})" class="btn-delate">${lan2}</button></td> </tr>`
;}ShowPlace.innerHTML = (NewShowItem);
        
    }





    let ShowPlace = document.getElementById('place-show')
    function showitem(){
        if(LanguageMode == 'en'){showitem2('Uptade','Delate')}else{showitem2('تعديل','حذف')}


    }showitem()
        //saveitems
      function LS(){localStorage.setItem('Saved',JSON.stringify(items))}

//Delate
    //delate
function DelateItem(id){
    items.splice(id,1);
    localStorage.Saved = JSON.stringify(items);
    showitem()
    DADBTN()
}



    //delate all
    
    window.onload = function(){DADBTN();SlotVoid();thelanguagex(),Thetotalx()}
let DAD = document.getElementById('DAD')
function DADBTN2(dlan){if(items.length > 0){DAD.innerHTML = `<button onclick="DelateAll()">${dlan} (${items.length})</button>`}else{DAD.innerHTML = ``}}
function DADBTN(){
    if(LanguageMode == 'en'){DADBTN2('Delate all')}else{DADBTN2('حذف الكل')}
}


function DelateAll(){localStorage.clear();
    items = [];
    showitem();
    DADBTN();
    ThereItemsOrNot = 'not'
 }

let Cmode ;

let lupid ;
//update
function updatebtn(upid){
    title.value = items[upid].Title;
    price.value = items[upid].price;
    expenses.value = items[upid].expenses;
    ads.value = items[upid].ads;
    discount.value = items[upid].discount;
    total.innerHTML = items[upid].total;
    kind.value = items[upid].kind;
    countx.style.display = 'none';
    fakecount.style.display = 'none';
    UpdateBtn.style.display = 'block';
    createBtn.style.display = 'none';
    lupid = upid
    scroll({top:0,behavior:"smooth"})
    total.style.backgroundColor = '#18a81f'
    
}

UpdateBtn.onclick = function(){
    fakecount.style.display = 'block';
    countx.style.display = 'none'
    UpdateBtn.style.display = 'none';
    createBtn.style.display = 'block';
    update();
    total.style.backgroundColor = '#a81401'
    
 }

function update(){
    items[lupid].Title = title.value;
    items[lupid].price = price.value;
    items[lupid].expenses = expenses.value;
    items[lupid].ads = ads.value;
    items[lupid].discount = discount.value;
    items[lupid].total = total.innerHTML;
    items[lupid].kind = kind.value;
    SlotVoid()
    LS()
    showitem()
    
    
}




//Search
let searchplace = document.getElementById('search')
let Smode = 'stitle'
let switchbtn = document.getElementById('switch-search-mode')
switchbtn.onclick = function(){

if (Smode == 'stitle'){
    Smode = 'sCategory'; 
searchplace.placeholder = 'search by Category';
searchplace.value = '';
searchplace.focus()

}
else if(Smode == 'sCategory'){
    Smode = 'stitle'; 
    searchplace.placeholder = 'search by Title';
    searchplace.value = '';
    searchplace.focus()

}}


searchplace.onkeyup = function(){if(ThereItemsOrNot == 'not'){
    
    if(LanguageMode == 'en'){errorfct(`There is no data to search for`)}else{errorfct(`لا يوجد بيانات للبحث`)}


}else{searcht(searchplace.value)}}
//searchplace.onkeyup = function(){searcht(searchplace.value)}
function searcht(values){
        NewShowItem =``;
    for(let ss = 0 ; ss < items.length ; ss++)
    
    if(Smode == 'stitle'){
    
    {if(items[ss].Title.includes(values)){
        

        NewShowItem += `<tr> <td>${ss + 1}</td> 
        <td>${items[ss].Title}</td> 
        <td>${items[ss].price}</td> 
        <td>${items[ss].expenses}</td> 
        <td>${items[ss].ads}</td> 
        <td>${items[ss].discount}</td> 
        <td>${items[ss].total}</td> 
        <td>${items[ss].kind}</td> 
        <td><button onclick="updatebtn(${ss})"class="btn-update">Update</button></td>
        <td><button onclick="DelateItem(${ss})" class="btn-delate">Delate</button></td> </tr>`
        ;}
        
        let ColspanPlace = document.getElementById('ColspanPlace')
        if(NewShowItem != ``){ShowPlace.innerHTML = (NewShowItem);ShowTitlePlace.innerHTML = `
        <tr>
<td>  <h3> iD </h3>  </td>
<td>  <h3> title </h3>  </td>
<td>  <h3> price </h3>  </td>
<td>  <h3> Taxes </h3>  </td>
<td>  <h3> ads </h3>  </td>
<td>  <h3> discount </h3>  </td>
<td>  <h3> total </h3>  </td>
<td>  <h3> Category </h3>  </td>
</tr></tbody>`}else{ShowPlace.innerHTML = '';ColspanPlace.innerHTML = `There is nothing to see`;ShowTitlePlace.innerHTML = ''}
        



    }}
    
    
    else if(Smode == 'sCategory'){
    
        {if(items[ss].kind.includes(values)){
            
    
            NewShowItem += `<tr> <td>${ss + 1}</td> 
            <td>${items[ss].Title}</td> 
            <td>${items[ss].price}</td> 
            <td>${items[ss].expenses}</td> 
            <td>${items[ss].ads}</td> 
            <td>${items[ss].discount}</td> 
            <td>${items[ss].total}</td> 
            <td>${items[ss].kind}</td> 
            <td><button onclick="updatebtn(${ss})"class="btn-update">Update</button></td>
            <td><button onclick="DelateItem(${ss})" class="btn-delate">Delate</button></td> </tr>`
            ;}
            ShowPlace.innerHTML = (NewShowItem);}}}

            
            


//The Errors
let errord = document.getElementById('Error')


function errorfct(ErrorText){

       
     errord.style.display= 'inline';
    errord.innerHTML = `${ErrorText} <button id="THEX" onclick="DelateErrord()">x</button>`;
    }

function DelateErrord(){errord.style.display= 'none'}
function itemslan(tlan,tlan2){if(ShowPlace.innerHTML == ``){ColspanPlace.innerHTML = tlan2;ShowTitlePlace.innerHTML = ``}else{ShowTitlePlace.innerHTML = tlan ;ColspanPlace.innerHTML = ``}}
setInterval(function(){
    if(LanguageMode == 'en'){itemslan(`<tr><td>  <h3> iD </h3>  </td><td>  <h3> title </h3>  </td><td>  <h3> price </h3>  </td><td>  <h3> Taxes </h3>  </td><td>  <h3> ads </h3>  </td><td>  <h3> discount </h3>  </td><td>  <h3> total </h3>  </td><td>  <h3> category </h3>  </td></tr>`,`There is nothing to see`)}
    else{itemslan(`<tr><td>  <h3> iD </h3>  </td><td>  <h3> العنوان </h3>  </td><td>  <h3> السعر </h3>  </td><td>  <h3> التكلفة </h3>  </td><td>  <h3> تكلفة الاعلانات </h3>  </td><td>  <h3> التخفيض </h3>  </td><td>  <h3> المجموع </h3>  </td><td>  <h3> النوع </h3>  </td></tr>`,`لا يوجد عناصر`)}
    
},1)


let countxmode = 'ture'
setInterval( function(){
if(countx.value > 300 || countx.value < 1){countxmode = 'false';if(countx.value > 300){if(LanguageMode == 'en'){errorfct(`You cannot add a count greater than 300`)}else{errorfct(`لا يمكن انشاء اكثر من 300 عنصر في المرة الواحدة`)}}if(countx.value < 1){    if(LanguageMode == 'en'){errorfct(`You cannot add a count less than 1`)}else{errorfct(`لا يمكن اضفاة عدد اقل من 1`)}
}}
if(countx.value <= 300 && countx.value >= 1){countxmode = 'ture'}
},1)
setInterval( function(){if(items.length == 0){ThereItemsOrNot = 'not'}else{ThereItemsOrNot = 'There'}},1000)



let fakecount = document.getElementById('item-countF')
fakecount.onmouseenter = function(){
fakecount.style.display = 'none'
countx.style.display = 'block'
}
countx.onmouseleave = function(){
    fakecount.style.display = 'block'
    countx.style.display = 'none'
    
    }





   

    TheTheme()


