// function click1(){
//    document.getElementById("id1").innerHTML=Date();
// }

//Section 2. Selecting elements start

// let note = document.querySelector(".note").parentElement;

// console.log(note);

// let parent = document.querySelector(".parent").lastElementChild;
// console.log(parent);

// let m_ch = document.querySelector(".m_ch").previousElementSibling;
// let m_ch2 = document.querySelector(".m_ch").nextElementSibling;
// console.log(m_ch);

// console.log(m_ch2);

//Section 2. Selecting elements End

// /Section 4. Manipulating elements start

//JavaScript CreateElement

// let div = document.createElement("div");
// div.className="DivClass";
// div.id="DivId";

// div.innerHTML="<p> My Name is All Mubin </p>";
// let text=document.createTextNode("HI ALL MUBIN".toUpperCase())
// div.appendChild(text);

// document.body.appendChild(div);

//Section 4. Manipulating elements end

// let ul = document.createElement("ul");
// ul.id="menu";

// let li=document.createElement("li");
// li.textContent='Home';
// ul.appendChild(li)

// let li2=document.createElement("li");
// li2.textContent="Products";
// ul.appendChild(li2);

// let li3=document.createElement("li");
// li3.textContent="About Us";
// ul.appendChild(li3);
// document.body.appendChild(ul);

// let script=document.createElement("script");
// script.src="DOM.js";

// document.body.appendChild(script);

// function menu2(item){
//   let li=document.createElement("li");
//   li.textContent=  item;
//   return li;
// }
// let menu=document.querySelector("#menu");

// menu.appendChild(menu2("Home"));
// menu.appendChild(menu2("Products"));
// menu.appendChild(menu2("About Us"));

// console.log("Hello")

// let menu=document.querySelector("#menu");
// let menu2=(item)=>{
//     let li=document.createElement("li");
//     li.textContent=item;
//     return li;
// }

// menu.appendChild(menu2("Home".toUpperCase()));
// menu.appendChild(menu2("Products".toUpperCase()));

// menu.appendChild(menu2("About Us".toUpperCase()));
// console.log("Task completed")

// let text = document.querySelector("#note");
// text.innerHTML +='<h1>Hello All Mubin </h1>'.toLocaleLowerCase();

//====JavaScript DocumentFragment//===

//JavaScript DocumentFragment class 11 //==

// let menu = document.querySelector("#menu");

// let items = ["Python", "JavaScript", "PHP", "Html", "C", "C++", "R"];
// let fragment = new DocumentFragment();
// items.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerHTML = item;
//   fragment.appendChild(li);
// });
// menu.appendChild(fragment);

// console.log(" complete  Task!");

// //====JavaScript DocumentFragment  End//===

// let li = document.createElement("li");
// li.innerHTML = "CSS";
// menu.insertBefore(li, menu.firstElementChild);

// let li2 = document.createElement("li");
// li2.innerHTML += "JAVA".toLowerCase();
// menu.insertBefore(li2, menu.lastElementChild);

// let li3 = document.createElement("li");
// li3.innerHTML = "Pyscript";
// menu.after(li3);

// //============ Append prepend========================

// let menu2 = document.querySelector("#menu2");
// let li4 = ["All", "Mubin", "Rafi"];

// let ul2 = li4.map((li4) => {
//   let li = document.createElement("li");
//   li.textContent = li4;
//   return li;
// });
// menu.append(...ul2);

// let li5 = ["Theme Develop", "App Develop", " Web Develop", "Go"];

// let ul3 = li5.map((li5) => {
//   let li = document.createElement("li");
//   li.innerHTML = li5;
//   return li;
// });

// menu.prepend(...ul3);

// //JavaScript insertAdjacentHTML

// menu.insertAdjacentHTML("afterbegin", "afterbegin");
// menu.insertAdjacentHTML("beforebegin", "beforebegin");
// menu.insertAdjacentHTML("afterend", "afterend");
// menu.insertAdjacentHTML("beforeend", "beforeend");

// let menu_2 = document.querySelector("#Menu_2");

// let li6 = document.createElement("li");
// li6.textContent = "Home";

// menu_2.replaceChild(li6, menu_2.firstElementChild);

// let li7 = document.createElement("li");
// li7.textContent = "About Us";
// menu_2.replaceChild(li7, menu_2.lastElementChild);

// // menu_2.removeChild(menu_2.lastElementChild);

// let clonedMenu=menu_2.cloneNode(true);

// clonedMenu.id='clonedId';
// document.body.appendChild(clonedMenu);

// let clonedMenu2=menu_2.cloneNode(true);
// clonedMenu2.id='clonedId2';
// document.body.appendChild(clonedMenu2);

// let btn =document.querySelector("#btn");
// if(btn){
//     btn.setAttribute("class","Mubin")
// }

// if (btn){
//     let target =btn.getAttribute("class");
//     console.log(target)
// }
// if(btn){
// btn.removeAttribute("target");
// }

// if(btn){
// btn.removeAttribute("id");
// }

// console.log(btn.removeAttribute("class"));

// let result = btn.hasAttribute("id");
// console.log(result);

// let img=document.createElement("img");
// img.classList.add("All")
// img.setAttribute("class","Mubin");
// img.setAttribute("src","1.jpg");
// img.setAttribute("width","200");
// img.setAttribute("height","200");
// img.style.float="right";

// document.body.appendChild(img);
// console.log(img.className);

// let p1=document.querySelector("#gg");
// // let reg=getComputedStyle(p1)
// p1.classList.add('All Mubin')

// // console.log(reg.color);

// let mp=document.querySelector("#mp");
// mp.classList.add('All',"Mubin","Kalid","hadi");
// mp.classList.remove('hadi');

// let val;

// val = this;
// val = window;
// val = window.document;

// val = document;
// val = document.links;
// val = document.doctype;
// val = document.head;
// val = document.scripts[0];
// val = document.all;
// val = document.all[32];
// val = document.all.length;
// val = document.body;
// val = document.head;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[1].method;
// val = document.forms[0].action;
// val = document.links;
// val = document.links[1].href;
// val = document.all[12].className;
// val = document.all[12].classList[1];
// val = document.scripts;
// val = document.scripts[1];
// val = document.scripts[3].src;
// val = document.scripts[3].getAttribute("src");
// val = document.links[0].href;
// links = document.links;
// let linkArr=Array.from(links);
// linkArr.forEach(function(link) {
//     console.log(link)
// }  );

// console.log(val);

// let id=document.querySelector('#id');
// if(id){
//     let for1=id.getAttribute('for');
//     console.log(for1)
// }

// style css js

// document.getElementById('id').style.background='red';
// document.getElementById('id').style.color='#FFF';
// document.getElementById('id').style.padding='20px';
// document.getElementById('id').style.display='block';
// document.getElementById('id').style.fontStyle='italic';
// document.getElementById('id').textContent +='++';

//  let start=document.getElementById('id');
// //  start.style.fontWeight='700'
// // start.style.border='5px solid black'
// // start.style.fontSize='30px'
// // start.style.boxSizing='borderBox'
// start.style='border:5px solid black;background:red; font-size:30px; font-weight:900; '

// let ol =document.querySelector('ol').lastElementChild;
// ol.innerHTML +='  Hello'

// console.log(ol);

//  console.log(val);

// let list = document.getElementsByClassName("mubin1");
// list[2].style =
//   "background:red;color:white;padding:10px;font-size:20px;font-weight:900";
// list[2].textContent += " ALL MUBIN";
// console.log(list[0]);

// document.getElementsByTagName('')

// let tag=document.getElementsByTagName('li');

// tag[2].data;

// tag=document.querySelector('ol').getElementsByTagName('li')
// // let tag1=Array.from(tag)
// // tag1.forEach(function(item){
//     //     console.log(item);
//     // })

//     tag=document.querySelectorAll('ol li');

//     tag.forEach(function(item){
//         // console.log(item);
//     });

//     let liodd=document.querySelectorAll('li:nth-child(odd)');
// liodd.forEach(function(item){
//     item.style='background:#a5b1c2;text-align:center;padding:10px;font-size:20px;font-weight:900;color:#eb3b5a; border-radius: 10px;width:150px';
// })
// console.log(liodd)
// let liEve=document.querySelectorAll('li:nth-child(even)');
// liEve.forEach(function(item){
//     item.style='background:#a5b1c2;text-align:center;padding:10px;font-size:20px;font-weight:900;color:#eb3b5a; border-radius: 10px;width:250px;hover:background:#4b7bec';
// });
// console.log(liEve);

// let val;
// let list = document.querySelector("ul");
// let listitems=document.querySelectorAll('ul li');
// val = list;
// val=listitems
// val=list;
// val=list.children;
// val=list.childNodes[3].nodeName;
// val=list.childNodes[2].nodeType;

//1 Element
//2 Attributes
//3 Text node
// 8 comment
// 9 Document
// 10 Doctype
// val=list.children[2].children[0].href;
// // val=document.querySelector('ul').children[2].parentElement.parentElement.parentElement.parentElement;
// let listitem=document.querySelectorAll('ul li');
// val=listitem[0].nextElementSibling
// // console.log(val);

// let li1=document.createElement('li');
// li1.className='Li-Tag';
// li1.id='li-tag1';
// li1.innerHTML='JavaScript';
// li1.style='font-size:30px; font-weight:bold; font-style:italic;color:green;'
// document.querySelector('ol').appendChild(li1);

// // console.log(li1);

// let li2=document.createElement("li");
// document.querySelector("ul").appendChild(li2);
// li2.className='liTag_2 '

// li2.id='liID-tag2 ';
// let A_tag=document.createElement('a');
// A_tag.href='https://play.google.com/store/apps/details?id=com.imo.android.imoim&hl=en&gl=US&pli=1'
// A_tag.target="_blank";
// A_tag.textContent='Imo';
// A_tag.style='font-size:30px; font-weight:bold;font-style:italic;color:red;'
// let parent= document.querySelector("ul");
// li2.appendChild(A_tag);
// let rep=document.querySelector("li");

// let play_S=document.createElement('a');
// play_S.textContent='PlayStote_imo';

// // parent.replaceChild(play_S,rep)
// console.log(play_S)
// console.log(rep)

// let con=document.querySelector('ul');

// // let h1T=document.querySelector('li');
// let h2T=document.createElement('li');
// h2T.textContent='Imo';
// con.replaceChild(h2T,con.lastChild);
// // console.log(con)

// // console.log(h2T)

// con.removeChild(con.lastElementChild)

// let li_1=document.querySelectorAll('li');

// li_1[0].remove();
// li_1[1].remove();
// li_1[2].class='button';
// li_1[2].classList.add('All')
// li_1[2].classList.remove('All')
// li_1[2].classList.add('mubin')
// li_1[3].remove();
// li_1[2].hasAttribute('class')
// li_1[6].setAttribute('title','MOBIN')
// li_1[6].removeAttribute("title")
// console.log(li_1[6])

// Events of javascript

// function message(){
//     console.log('Mouse hover event');
// }

// document.querySelector('.container').addEventListener('mousemove',click22);
// document.querySelector('.container').style='background:red; color:white;font-size:20px;padding:10px';
// function click22(e){
//     let all=e;
//     // all=e.target;
// // all=e.target.id;
// all=e.timeStamp;
// all=e.type;
// all=e.clientY;
// all=e.clientX;
// all=e.offsetY;
// all=e.offsetX;
//  all =this;
//  all.style.background=`#${e.offsetX}`;
//  console.log(e.offsetX)
//  console.log(e.offsetY)
//  console.log(all);

// }
