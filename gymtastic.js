let img = document.getElementById('t1')
let bold = document.getElementById('t11')
let p = document.getElementById('t12')
function myTraining(){
    img.src='./gymtasticAsset/weight.jpg'
    bold.innerHTML='First Training Class'
    p.innerHTML='Lifting an appropriate amount of weight. Start with a weight you can lift comfortably 12 to 15 times,<br> instructors would be around to guide you. Learn to do each exercise correctly.'
}
function myTraining1(){
    img.src='./gymtasticAsset/training-image-02.jpg'
    bold.innerHTML='Second Training Class'
    p.innerHTML='Yoga is a mind and body practice. Various styles of yoga combines physical postures, breathing<br> techniques, and meditation or relaxation.'
}
function myTraining2(){
    img.src='./gymtasticAsset/training-image-03.jpg'
    bold.innerHTML='Third Training Class'
    p.innerHTML='Your induction should include a brief how to for every machine. If there is one that was missed out<br> and you want to use it, do not try to figure it out on your own: ask a staff member to show you how to<br> use it properly.'
}
function myTraining3(){
    img.src='./gymtasticAsset/training-image-04.jpg'
    bold.innerHTML='Fourth Training Class'
    p.innerHTML='Warm ups are crucial as they prepare the body for the demands of exercise, loosening up<br> the muscles and reducing the risk of injury.'
}

//table
let fit1 = document.getElementById('fit1')
let fit2 = document.getElementById('fit2')
let mus1 = document.getElementById('mus1')
let mus2 = document.getElementById('mus2')
let bb1 = document.getElementById('bb1')
let bb2 = document.getElementById('bb2')
let ytc1 = document.getElementById('ytc1')
let ytc2 = document.getElementById('ytc2')
let adt1 = document.getElementById('adt1')
let adt2 = document.getElementById('adt2')

function monTime() {
    fit1.innerHTML='10:00AM - 11:30AM'
    fit2.innerHTML=''
    mus1.innerHTML=''
    mus2.innerHTML=''
    bb1.innerHTML=''
    bb2.innerHTML='2:00PM - 3:30PM'
    ytc1.innerHTML=''
    ytc2.innerHTML=''
    adt1.innerHTML=''
    adt2.innerHTML=''
}

function tueTime() {
    fit1.innerHTML=''
    fit2.innerHTML='2:00PM - 3:30PM'
    mus1.innerHTML=''
    mus2.innerHTML=''
    bb1.innerHTML='10:00AM - 11:30AM'
    bb2.innerHTML=''
    ytc1.innerHTML=''
    ytc2.innerHTML=''
    adt1.innerHTML=''
    adt2.innerHTML=''
}

// NAVBAR
let btn=document.querySelector('.sm-only i')
    let chk=false
    var nav=document.querySelector('.sm-only ul')
    btn.addEventListener('click',()=>{
        if(!chk){
            btn.classList.remove('fa-bars')
            btn.classList.add('fa-xmark')
            nav.style.display='block'
            chk=true
        }
        else{
            btn.classList.remove('fa-xmark')
            btn.classList.add('fa-bars')
            nav.style.display='none'
            chk=false
        }
    })
