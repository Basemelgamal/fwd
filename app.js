
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
