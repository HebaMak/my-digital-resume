const containers = document.querySelectorAll('.container');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');

// function add class active to clicked button and remove from siblings
const PageTransition = (elements) => {
  
  elements.forEach(el => {
    el.addEventListener('click' , () => {
      elements.forEach(x => {
        x.classList.remove('active');
      })
      el.classList.add('active');
    })
  })
}

PageTransition(secBtn)


//show active section and hide other siblings according to clicked control button
secBtns.forEach( element => {
  element.addEventListener('click' , e => {
    const id = e.target.dataset.id;
    const element = document.getElementById(id);

    if(id) {
      containers.forEach(container => container.classList.remove('active'));
      element.classList.add('active');
    }
  })
})


/* skills section progress bars*/ 
//catch the skills section on scrolling and apply width to the progress bars
const mySkills = document.getElementById('about-stats');

window.addEventListener("scroll", () => {
    if (mySkills.getBoundingClientRect().top < 300) {   // or we can use if (ourSkills.scrollTop < 300)
        const progressSpans = document.querySelectorAll(' .about-stats .progress-bars .progress span');
        progressSpans.forEach(pSpan => pSpan.style.width = pSpan.dataset.progress);
    }
});

// toggle the app theme dark/light 

const themeBtn = document.getElementById('themeBtn')
themeBtn.addEventListener('click' , () => {
  document.body.classList.toggle("light-mode");
} )
