let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const bars = document.querySelectorAll('.bar');

    function showSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        bars.forEach(b => b.classList.remove('active'));
        
        slideIndex = (n + slides.length) % slides.length;
        
        slides[slideIndex].classList.add('active');
        bars[slideIndex].classList.add('active');
    }

    function moveSlide(n) { showSlide(slideIndex + n); }
    function currentSlide(n) { showSlide(n); }


    function scrollCardapio(botao, direcao) {
  
    const wrapper = botao.parentElement;
    const container = wrapper.querySelector('.container-cardapio');
    
   
    const dequantoEmQuanto = 320; 
   
    container.scrollBy({
        left: direcao * dequantoEmQuanto,
        behavior: 'smooth'
    });
}

function abrirModalDinamico(elemento) {
  
    const nome = elemento.getAttribute('data-nome');
    const descricao = elemento.getAttribute('data-desc');
    const preco = elemento.getAttribute('data-preco');
    const imagem = elemento.getAttribute('data-img');


    document.getElementById('modal-titulo').innerText = nome;
    document.getElementById('modal-descricao').innerText = descricao;
    document.getElementById('modal-preco').innerText = preco;
    document.getElementById('modal-imagem').src = imagem;
    document.getElementById('modal-imagem').alt = nome;

    
    document.getElementById('meuModal').showModal();
}