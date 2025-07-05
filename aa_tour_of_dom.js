
/* 

=> DOM (Document Object Model) is a programming interface that represent webpage as a tree of object(every object in dom is a node) and lets JavaScript interact(manipulate) with HTML/CSS. 
A node can be element, text, comment, etc.

=> To get elements(html tags[div,a,p,,,etc]) from html we can use the below 5 way:
1. getElementsByTagName
2. getElementsByClassName
3. getElementById
4. querySelector: take single or first element(like getElement ById)
5. querySelectorAll

above 1,2,5 return a collection(like array) of elements/html tag or DOM node while 3,4 return a single element/html tag.

*/


/* get elements by tag name */
const x = document.getElementsByTagName('footer');

const sz = x.length; // return : how many footer tag it's get

console.log(x)
console.log(sz)
for(let i=0 ; i<sz; i++) console.log(x[i].innerHTML)
for(let i=0 ; i<sz; i++) console.log(x[i].innerText)
//or
for(const vl of x) console.log(vl.innerText)


/* get elements by class name */
const y = document.getElementsByClassName('nav-li')

console.log(y)
for(let i=0 ; i<y.length; i++) console.log(y[i].innerHTML)
//or
for(const vl of y) console.log(vl.innerHTML)
for(const vl of y) console.log(vl.innerText)


/* get element by ID */
const z = document.getElementById('footer-title')
console.log(z)
console.log(z.innerText)


/* query selector */
const q1 = document.querySelector('#main-title');
const q2 = document.querySelector('.nav-li');
console.log(q1.innerText);
console.log(q2.innerText)

/* query selector all */
const qs1 = document.querySelectorAll('.nav-li');
console.log(qs1);
for(const vl of qs1) console.log(vl.innerText)


/* Now, let's set or modify the style */
const a = document.getElementById('title');

a.style.color = 'red';
a.style.background = 'green';
a.style.maxWidth = '1350px'
a.style.border = '3px solid black'
a.style.padding = '5px'

/* let's, remove or add elements */
const b = document.getElementById('id1')

console.log(b);
console.log(b.classList); // or console.log(b.getAttribute('class'))

b.classList.remove('bg-color');
console.log(b.classList);

b.classList.add('border-shdow');
console.log(b.classList);

b.innerHTML = '<section> Hello shagor </section>' // to change the whole html
b.innerText = 'Hi shagor' // to change the text only


/* 
We knew that dom represent webpage as a tree structure and evry parts of the tree is a node. 
now let's learn some basic stuff about how we can handle the tree's node.

To traverse the DOM tree we can use:
1. parentNode
2. childNodes
3. firstChild
4. lastChild
5. nextSibling
6. previousSibling

To Create new node:
1. document.createElement()
2. document.createTextNode()
For example:
    const x = document.createElement('div') // <div></div>
    x.innerHtml = '<p> Hello Shagor </p>'   // <div><p> Hello Shagor </p></div>

To Add node:
1. appendChild()
2. append() // use for add multiple node at a time ex: x.append(a,b,c);
3. insertBefore()

To Remove node:
1. removeChild()
2. replaceChild()


Let's visualize the tree for our index.html.

                         (document)           
        (<!DOCTYPE html>)          (html)
                             (head)      (body)
   (meta, meta, title, style)                  (h1, header,main,footer,comment,script,comment,script)
......................................................................................................
            ..............................................
                    ...........................
*/

/* Now Let's make a list of li and add to the footer section */
const nd = document.getElementById('footer-x')

console.log(nd.childNodes)

const cnd = document.createElement('ul')
cnd.innerHTML = '<li>item-1</li> <li>item-2</li> <li>item-3</li>'

console.log(cnd)

nd.appendChild(cnd)
console.log(nd)

