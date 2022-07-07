/* header */
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
} 

window.addEventListener('scroll', scrollHeader)

/* modal */
const modalView = document.querySelectorAll('.projetos__modal');
const modalButton = document.querySelectorAll('.projetos__button');
const modalFechar = document.querySelectorAll('.projetos__modal-fechar');

function modal(modalClick){
    console.log(modalClick)
    modalView[modalClick].classList.add('active-modal')
}

modalButton.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        modal(indice)
    })
});

modalFechar.forEach((botaoFechar) => {
    botaoFechar.addEventListener('click', () => {
        modalView.forEach((mView) => {
            mView.classList.remove('active-modal')
        })
    })
});

/* projetos */ 
let mixerPortfolio = mixitup('.projetos__container', {
    selectors: {
        target: '.projetos__card'
    },
    animation: {
        duration: 300
    }
});

const linkProjetos = document.querySelectorAll('.projetos__item')
function activeProjetos(){
    linkProjetos.forEach(link => link.classList.remove('active-projetos'));
    this.classList.add('active-projetos')
}

linkProjetos.forEach(link => link.addEventListener('click', activeProjetos))

/*active menu */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)