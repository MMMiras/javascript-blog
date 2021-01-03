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

// !!!!!!!!!!!!!!Dlaczego to działa, przecież to nawet nie jest funkcja?? :O !!!!!!!!!!



  /* [DONE] remove class 'active' from all articles */
 const activeArticles = document.querySelectorAll('.posts .active')

 for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');

 }
  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}