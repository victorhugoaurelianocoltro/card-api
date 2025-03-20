'use strict'

const disciplinas = [
    { nome: 'ppdm', icon: 'img/icons8-ícones-médios-40.png', cor: 'blue' },
    { nome: 'PRO', icon: 'img/icons8-ícones-médios-80.png', cor: 'black' },
    { nome: 'PMBE', icon: 'img/icons8-icons-64 (1).png', cor: 'red' },
    { nome: 'PWFE', icon: 'img/icons8-icons-64.png', cor: 'pink' }
]

function criarMenu(disciplina) {
    const novoItem = document.createElement('li');
    const novaImagem = document.createElement('img');
    const novoSpan = document.createElement('span');
    const lista = document.getElementById('menu');

    novaImagem.src = `./img/${disciplina.icon}`;
    novoSpan.textContent = disciplina.nome;

    novoItem.appendChild(novaImagem);
    novoItem.appendChild(novoSpan);

    lista.appendChild(novoItem);
}

disciplinas.forEach(criarMenu);


const Product = {
    name: '',
    price: 30000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['white', 'blue', 'black'],
    image: 'img/xre.jpg',
    rating: 4
};

document.querySelector('.header').innerText = product.name;
document.querySelector('.price').innerText = `$${product.price}`;

let sizesText = "SIZE: " + product.sizes.join(" ");
document.querySelector('.sizes').innerText = sizesText;

let colorsContainer = document.querySelector('.colors');
colorsContainer.innerHTML = ""; 
product.colors.forEach(color => {
    let colorDiv = document.createElement('div');
    colorDiv.classList.add('color-option', color);
    colorsContainer.appendChild(colorDiv);
});


let ratingContainer = document.querySelector('.rating');
ratingContainer.innerHTML = ""; 
for (let i = 0; i < 5; i++) {
    let star = document.createElement('span');
    star.innerText = i < product.rating ? "★" : "☆";
    star.classList.add('star');
    ratingContainer.appendChild(star);
}


let imagePlaceholder = document.querySelector('.image-placeholder');
imagePlaceholder.innerHTML = `<img src="${product.image}" alt="Produto" style="width:100%;">`;

const product = [
    {name: '',
    price: '35000',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'black', 'purple'],
    image: 'img/CB1000-Hornet.png',
    rating: 4
    },
    
    {name: '',
        price: '28000',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['pink', 'orange', 'green'],
        image: 'img/mt03.jpg',
        rating: 4
        } ,

        {name: '',
            price: '45000',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['light blue', 'red', 'golden'],
            image: 'img/gs310.jpg',
            rating: 4
            }

            {name: '',
                price: '45000',
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                colors: ['light blue', 'red', 'golden'],
                image: 'img/gs310.jpg',
                rating: 4
                }
    
];