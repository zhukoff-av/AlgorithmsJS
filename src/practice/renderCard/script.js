var cardsData = [
    {
        inStock: true,
        imgUrl: 'gllacy/img.png',
        text: 'Сливочно-кофейное с кусочками шоколада',
        price: 310,
        isHit: true,
        specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
        inStock: false,
        imgUrl: 'gllacy/img_1.png',
        text: 'Сливочно-лимонное с карамельной присыпкой',
        price: 125,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/img.png',
        text: 'Сливочное с брусничным джемом',
        price: 170,
        isHit: false
    },

];

let list = document.querySelector('.goods');

let createElement = function (tagName, className, text) {
    let element = document.createElement(tagName, className)
    if (text) {
        element.textContent = text;
    }
    return element
}


let createCard = function (data){
    let card = createElement('li', 'good')
    let title = createElement('h2', 'title', data.text)
    let image = createElement('img', 'good__image')
    let p = createElement('p', data.price);
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(p);

    list.appendChild(card);
}

for(let i = 0; i < cardsData.length; i++){
     createCard(cardsData[i])
}

console.log(list)

/* Technical Specification

Meow! Do you remember the ice cream store? We need to create product cards based on the data received from the server.

The data is an array of objects called `cardsData`, where each element corresponds to one product. Each object has the following properties:

- `inStock` — product availability. If the value is `true`, the product is available (for such a product, the designer has prepared the class `good--available`), if `false`, the product is out of stock (a product with the class `good--unavailable`).
- `imgUrl` — the URL to the product's image.
- `text` — the name of the product.
- `price` — the price.
- `isHit` — whether the product is a bestseller. If the value is `true`, the product is a "hit." For such products, a class `good--hit` has been prepared.
- `specialOffer` — a special offer that is only available for bestsellers. This should be placed in a paragraph with the class `good__special-offer` and should be the last child element inside the product card.

Here's an example of the markup for one product card in the catalog:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Creamy coffee with chocolate chunks</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Creamy coffee with chocolate chunks">
    <p class="good__price">110₽/kg</p>
  </li>
  ...
</ul>

Note that the text in the `alt` attribute of the image should be the same as the product's name.

Create a function `renderCards`, which will accept an array of data, call this function passing `cardsData`, and render the ice cream product cards on the page.

*/