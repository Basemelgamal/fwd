//for (let i = 1; i <= 5; i++) { 
//  for (let j = 1; j <= 10; j++) {
//    console.log('i and j are ', i, j);
//  }
//}

//const startingTime = performance.now();
//
//const myNewDiv = document.createElement('div');
//
//function respondToTheClick(e){    
//    console.log('a pragraph was click : ' + e.target.textContent);
//};
//
//for(let i =0 ; i <= 200 ; i++){
//    const myElement = document.createElement('p');
//    myElement.textContent = 'the preagraph has been created ' + i ;
//    myNewDiv.appendChild(myElement);
//}
//document.body.appendChild(myNewDiv);
//myNewDiv.addEventListener('click',respondToTheClick);
//
//
//const endingTime = performance.now();
//console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

//function appendNewMessage() {
//    const para = document.createElement('p');
//    para.textContent = "Isn't that cool?";
//    addParagraph();
//    document.body.appendChild(para);
//}
//
//function addParagraph() {
//    const para = document.createElement('p');
//    para.textContent = 'JavaScript is single threaded!';
//    document.body.appendChild(para);
//    
//}
//
//
//function addSection() {
//    const para = document.createElement('h6');
//    para.textContent = 'JavaScript is single threaded!';
//    document.body.appendChild(para);
//    appendNewMessage();
//}
//
//addSection();
//
//let count = 1
//
//function generateParagraphs() {
//    const fragment = document.createDocumentFragment();
//
//    for (let i = 1; i <= 5; i++) {
//        const newElement = document.createElement('p');
//        newElement.textContent = 'This is paragraph number ' + count;
//        count = count + 1;
//
//        fragment.appendChild(newElement);
//    }
//
//    document.body.appendChild(fragment);
//
//    if (count < 20) {
//        setTimeout(generateParagraphs, 10000);
//    }
//}
//
//generateParagraphs();

// Count section and make navBar Buttons
var sections = document.querySelectorAll('[data-nav]');
var uls = document.querySelector('ul');
const fragment = document.createDocumentFragment();

sections.forEach((sections, i) => {
    const lis = document.createElement('li');
    const anchs = document.createElement('a');
    var links = document.createTextNode('Section' + (i + 1));
    anchs.appendChild(links);
    anchs.title = "Section" + (i + 1);
    anchs.href = "#section" + (i + 1);
    uls.appendChild(lis);
    lis.appendChild(anchs);
});


// activate navBar
var active_li = uls.querySelectorAll('li');
const li_array = Array.from(active_li);

li_array.forEach((active_li, i) => {
    li_array[0].classList.add("active"); //Initial Activate li1
    var active = document.getElementsByClassName('landing__container');
    active[0].classList.add("active"); //Initial Activate section 1


    li_array[i].addEventListener("click", function (e) {
        e.preventDefault();
        const current = document.getElementsByClassName('active');
        current[0].classList.remove('active');
        li_array[i].classList.add('active');
        //Activate section
        var active_sect = document.getElementsByClassName('landing__container active');
        active_sect[0].classList.remove('active');
        active[i].classList.add('active');
        active[i].scrollIntoView({});
    });
});


// var active_scrolls = document.querySelectorAll('.landing__container');
// const scroll_sections = Array.from(active_scrolls);
// //console.log(scroll_sections[0]);
// var x = scroll_sections[0].getBoundingClientRect();
// console.log(x);
//active_scrolls.getBoundingClientRect();
var active_scrolls = document.querySelectorAll('.landing__container');
const scroll_sections = Array.from(active_scrolls);
var ba5 = scroll_sections[0].getBoundingClientRect();
x = ba5.top;
x = Math.floor(x);
console.log(x);
if(x === 0 ){
    var active_scrolling = document.getElementsByClassName('landing__container active');
        console.log(active_scrolling);
        active_sect[0].classList.remove('active');
        active[i].classList.add('active');
}

//section navbar while scrolling

var active_croll_sect = document.getElementsByClassName('landing__container active');
window.addEventListener('scroll', function () {



    var active_croll_sect = document.querySelectorAll('section');
    const active_scroll = Array.from(active_croll_sect);
    active_scroll.forEach((scroll_sect, i) => {
        var active_scrolls = document.querySelector('#section' + (i + 1));
        var bounding = active_scrolls.getBoundingClientRect();
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

            var active_sect = document.querySelector('.landing__container.active');
            active_sect.classList.remove('active');
            var x = active_scrolls.querySelector('.landing__container');
            x.classList.add('active');
            const current = document.querySelector('.active');
            
            current.classList.remove('active');
            li_array[i].classList.add('active');
        } else {
            //            console.log(active_scroll);
        }
    });
})
//num.forEach((num,i)=>{
//    var section_scroll = document.getElementById('section'+ (i+1));
//    var x = section_scroll.scrollIntoView();
//    console.log(x);
//})
//
//document.getElementById("section1").scrollIntoView({
//  behavior: smooth | auto;
//  block: start | center | end | nearest;
//  inline: start | center | end | nearest;
//});
//var elmnt = document.getElementById("section");
//var x = getelement.scrollIntoView();
//console.log(elmnt);

//active_sect = document.querySelectorAll('section');
//const sect_array = Array.from(active_sect);
//
//active_sect.forEach((active_sect, i) => {
//    console.log(active_sect[i]);
//    //var topOfElement = active_sect[i].offsetTop - XX;
//    //window.scroll({ top: topOfElement, behavior: "smooth" });
//});
