const en = document.querySelector('.en');
const az = document.querySelector('.az');
const h2 = document.querySelector('h2');
const user = document.querySelector('.user');
const pass =document.querySelector('.pass');
const btn = document.querySelector('.btn');



const changeEn = () =>{
    h2.innerHTML = "Member Login";
    user.setAttribute('placeholder','Username');
    pass.setAttribute('placeholder','Password');
    en.classList.add('outline');
    az.classList.remove('outline');
    btn.innerHTML = "Log In"
}

const changeAz = () =>{
    h2.innerHTML = "İstifadeçi Girişi";
    user.setAttribute('placeholder','İstıfadeçi Adı');
    pass.setAttribute('placeholder','Şifreniz');
    az.classList.add('outline');
    en.classList.remove('outline');
    btn.innerHTML = 'Daxil Ol'
}


en.addEventListener('click',changeEn);
az.addEventListener('click',changeAz);