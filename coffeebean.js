document.querySelector('.top-menu2').addEventListener('mouseover',function(){
  document.querySelector('.sub-menu').classList.add('show');
})

document.querySelector('.top-menu2').addEventListener('mouseleave',function(){
  document.querySelector('.sub-menu').classList.remove('show');
})


let userForm = document.querySelector('.search-icon');
let count = 0;
let serchIcon = document.querySelector('.search-show');
let colseIcon = document.querySelector('.close-none');
let inputBox = document.querySelector('.user-input');

userForm.addEventListener('click',function(){
  count++

  if(count%2 !== 0 ){
    serchIcon.classList.add('search-none');
    colseIcon.classList.add('close-show');
    inputBox.classList.remove('input-none');
    inputBox.classList.add('input-show');
  }else if(count%2 == 0){
    serchIcon.classList.remove('search-none');
    serchIcon.classList.add('search-show');
    colseIcon.classList.remove('close-show');
    colseIcon.classList.add('close-none');
    inputBox.classList.remove('input-show');
    inputBox.classList.add('input-none');
  }
})


let userbtn1 = document.querySelector('.btn1');
let userbtn2 = document.querySelector('.btn2');
let userbtn3 = document.querySelector('.btn3');

let slideWrap = document.querySelector('.pick-menu');

userbtn1.addEventListener('click',function(){
  slideWrap.style.transform = 'translateX(0px)'; 
})

userbtn2.addEventListener('click',function(){
  slideWrap.style.transform = 'translateX(-1200px)'; 
})

userbtn3.addEventListener('click',function(){
  slideWrap.style.transform = 'translateX(-2400px)'; 
})

let nextBtn = document.querySelector('.next');
let preBtn = document.querySelector('.pre');
let currentImg = 0;

nextBtn.addEventListener('click',function(){
  currentImg++;
  console.log(currentImg);

  if(currentImg == 1){
    slideWrap.style.transform = 'translateX(-1200px)';
   } 
   if(currentImg == 2){
    slideWrap.style.transform = 'translateX(-2400px)';
   }
})

preBtn.addEventListener('click',function(){
  currentImg--;

  if(currentImg <= 2){
    slideWrap.style.transform = 'translateX(-1200px)';
  }
  if(currentImg == 1){
    slideWrap.style.transform = 'translateX(0)';
  }
})

let btnCircle1 = document.querySelector('.slide_btn1');
let btnCircle2 = document.querySelector('.slide_btn2');
let btnCircle3 = document.querySelector('.slide_btn3');

let slideContainer = document.querySelector('.wrap-slide');
console.log('slideContainer');
 

btnCircle1.addEventListener('click',function(){
  slideContainer.style.transform = 'translateX(0px)';
})


btnCircle2.addEventListener('click',function(){
  slideContainer.style.transform = 'translateX(-1200px)';
})

btnCircle3.addEventListener('click',function(){
  slideContainer.style.transform = 'translateX(-2400px)';
})

let clickImg = 0;

document.querySelector('.next2').addEventListener('click',function(){
  clickImg++;

  if(clickImg == 1){
  slideContainer.style.transform = 'translateX(-1200px)';
  }

  if(clickImg == 2){
    slideContainer.style.transform = 'translateX(-2400px)';
    }

})

document.querySelector('.pre2').addEventListener('click',function(){
  clickImg--;

 if(clickImg == 2){
    slideContainer.style.transform = 'translateX(-1200px)';
  } 

  if(clickImg == 1){
    slideContainer.style.transform = 'translateX(0px)';
  } 

})


//변수
//전체 문서 담아오고
//문서 높이
//스크롤 양
//스크롤 양이 1/4이 되는 타이밍
//

let btt = document.querySelector('.back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight; //문서의 높이

docHeight = docElem.scrollHeight;

if(docHeight != 0){
  offset=docHeight/4;
}

console.log(offset);

window.addEventListener('scroll',function(){
  scrollPos = docElem.scrollTop;

  btt.className = (scrollPos > offset) ? 'visible' : '';
})

btt.addEventListener('click',function(){
  let scrollInterval = setInterval(function(){
    if(scrollPos != 0){
      window.scrollBy(0,-80);
    }else{
      clearInterval(scrollInterval);
    }
  },15);
})