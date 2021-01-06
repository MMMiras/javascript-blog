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









//Część druga







const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
const titleList = document.querySelector (optTitleListSelector)

function clearMessages(){
	document.getElementById('messages').innerHTML = 'titleList';
}
console.log(titleList)

// document.getElementById('.list .titles').innerHTML = titleList;
// W sumie nie wiem czy działa czy nie, co znaczy wyczyścić zawartość linków?

  /* for each article */
 const articles = document.querySelectorAll (optArticleSelector)
let html = '';
for(let article for articles){
 

// Podobną operację wykonywaliśmy już kilka razy, więc możesz wzorować się na kodzie stworzonym w poprzednim submodule. Zadeklaruj nową stałą articles i zapisz do niej odniesienie do wszystkich elementów pasujących do selektora zapisanego w stałej optArticleSelector.

//Następnie wykorzystaj pętlę for-of do wykonania pozostałych operacji z osobna dla każdego z artykułów. W dalszej części submodułu założymy, że w deklaracji pętli pojedynczy artykuł został nazwany article.


// jakich operacji!

//to ma byc funkcja i nawias ma się konczyc za


    /* get the article id */

    const articleId = clickedElement.getAttribute('id');
  console.log(articleId);

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */
      /// Jaką mam stworzyć stałą? const =article.getAttribute(articleTitle)
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML)
    /* insert link into titleList */

    titleList.innerHTML = titleList.innerHTML + linkHTML;

    // var d1 = document.getElementById('one');
    // d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
    //Nie wiem jak użyć.
  }
    titleList.innerHTML = html;
}

generateTitleLinks();
console.log(html)