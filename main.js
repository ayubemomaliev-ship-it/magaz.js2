const a = [
    { title: "Арбуз", emoji: "🍉", price: 15, inStock: true },
    { title: "Яблоко", emoji: "🍎", price: 8, inStock: true },
    { title: "Банан", emoji: "🍌", price: 12, inStock: false },
    { title: "Виноград", emoji: "🍇", price: 20, inStock: true },
    { title: "Персик", emoji: "🍑", price: 9, inStock: true },
    { title: "Клубника", emoji: "🍓", price: 25, inStock: false }
];

const a0 = document.querySelector('body')
a0.classList.add('bg-[#F6FEE7]')

const a1 = document.createElement("div");
a1.className = "max-w-[1400px] mx-auto p-10";
document.body.appendChild(a1);


const a2 = document.createElement("h1");
a2.className = "text-3xl md:text-5xl font-bold text-green-700 mb-3";
a2.innerHTML = "🍉 Фруктовая лавка";
a1.append(a2);


const b1 = document.createElement("p");
b1.className = "text-gray-500 text-lg mb-8";

let b3 = 0;

a.map(function(fruit) {
    if (fruit.inStock) {
        b3++;
    } else {
        b3 += 0;
    }
});

b1.innerHTML = "Всего фруктов: " + a.length +
    ", в наличии: " + b3;
a1.append(b1);


const b = document.createElement("div");
b.className = "flex flex-wrap gap-5";
a1.append(b);


function createCard(fruit) {
    const a = document.createElement("div");

    a.className = "bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100 w-full sm:w-[calc(33.333%-14px)]";

    let a1 = "";

    if (fruit.inStock) {
        a1 = "✅ Есть в наличии";
    } else {
        a1 = "❌ Нет в наличии";
    }

    a.innerHTML = `
        <p class="text-7xl mb-3">${fruit.emoji}</p>
        <h2 class="text-2xl font-bold mb-2">${fruit.title}</h2>
        <p class="text-xl text-gray-700">${fruit.price} сомони/кг</p>
        <p class="mt-2 text-lg">${a1}</p>
    `;

    return a;
}


const a3 = a.map(function(fruit) {
    return createCard(fruit);
});

a3.map(function(card) {
    b.append(card);
});


const a4 = document.createElement("h2");
a4.className = "text-2xl text-3xl font-bold mt-10 mb-4";
a4.innerHTML = "🔥 Хиты до 10 сомони";
a1.append(a4);


const b2 = document.createElement("div");
b2.className = "flex flex-wrap gap-3";
a1.append(b2);

const a6 = document.createElement("div");
a6.className = "bg-green-600 text-white font-bold text-lg md:text-2xl p-5 rounded-2xl mt-4";
a1.append(a6);


let a7 = 0;

a.map(function(fruit) {
    if (fruit.inStock) {
        a7 += fruit.price;
    } else {
        a7 += 0;
    }
});

a6.innerHTML = "🧺 Корзина «по 1 кг каждого»: " +
    a7 + " сомони";

a0.append(a1)