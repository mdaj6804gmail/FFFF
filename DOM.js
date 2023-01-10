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

let menu_2 = document.querySelector("#Menu_2");

let li6 = document.createElement("li");
li6.textContent = "Home";

menu_2.replaceChild(li6, menu_2.firstElementChild);

let li7 = document.createElement("li");
li7.textContent = "About Us";
menu_2.replaceChild(li7, menu_2.lastElementChild);

// menu_2.removeChild(menu_2.lastElementChild);

let clonedMenu=menu_2.cloneNode(true);

clonedMenu.id='clonedId';
document.body.appendChild(clonedMenu);


let clonedMenu2=menu_2.cloneNode(true);
clonedMenu2.id='clonedId2';
document.body.appendChild(clonedMenu2);