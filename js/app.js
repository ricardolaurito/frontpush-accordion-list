//console.log("Olá Mundo");


// DOM (Document Object Model)

// É uma interface que representa o HTML por meio de objetos.
// Com ela é possível manipular a estrutura, conteúdo, 
// estilo

document.querySelectorAll('.accordion-content').forEach(item =>{
    item.style.maxHeight = 0;
})


document.querySelectorAll('.accordion-button').forEach((button) =>{
    
    button.addEventListener('click', () => {
        
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if(button.classList.contains('active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }else{
            accordionContent.style.maxHeight = 0;
        }
    })
})