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






let pog=['python', 'JavaScript', 'Php', 'Java','C++','R']

let menu=document.getElementById("menu");

 let fragment=new DocumentFragment();

pog.forEach((item)=>{
    let li=document.createElement("li");
li.innerHTML=item;
fragment.appendChild(li);
});

menu.appendChild(fragment);

console.log(menu)



