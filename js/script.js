// 'use strict';

// function titleClickHandler(){
//   const links = document.querySelectorAll('.titles a');
//   console.log(links);
// }

// const buttonTest = document.getElementById('button-test');

// buttonTest.addEventListener('click', titleClickHandler);


'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
  
  console.log('Link was clicked!');
  console.log(event);
  /*[DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /*[IN PROGRESS] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
 const activeArticles = document.querySelectorAll('.posts .active')

 for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
 }
  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector)
  console.log(targetArticle);
  console.trace(targetArticle)
  
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log(targetArticle)

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

// dlaczego to zostało wrzucone poza nawias? W ćwiczeniu nie działa bo jest poza nawiasem.

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

// dlaczego to zostało wrzucone poza nawias? W ćwiczeniu nie działa bo jest poza nawiasem.