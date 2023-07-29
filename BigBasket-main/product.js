let data = [
    {
        name: "Eggs -Regular",
        price: "245",
        img: "https://www.bigbasket.com/media/uploads/p/m/1205938_1-fresho-eggs-regular.jpg?tr=w-1920,q=80",
    },
    {
        name: "Eggs - Brown, Antibiotic Free",
        price: "60",
        img: "https://www.bigbasket.com/media/uploads/p/m/40131159_3-just-laid-eggs-brown-antibiotic-free.jpg?tr=w-1920,q=80",
    },
    {
        name: "Chicken Breast",
        price: "458",
        img: "https://www.bigbasket.com/media/uploads/p/m/10001001_7-fresho-chicken-breast-boneless-antibiotic-residue-free.jpg?tr=w-1920,q=80",
    },
    {
        name: "Chicken Curry Cut",
        price: "109",
        img: "https://www.bigbasket.com/media/uploads/p/m/10000927_7-fresho-chicken-curry-cut-with-skin-antibiotic-residue-free.jpg?tr=w-1920,q=80",
    },
    {
        name: "Rohu Fish Curry Cut",
        price: "429",
        img: "https://www.bigbasket.com/media/uploads/p/m/40119262_1-fresho-rohu-cut-pieces-medium.jpg?tr=w-1920,q=80",
    },
    {
        name: "River Salmon- Boneless Curry Cut",
        price: "789",
        img: "https://www.bigbasket.com/media/uploads/p/m/20001407_1-fresho-river-salmon-boneless-curry-cut-preservative-free-10-15-pcs.jpg?tr=w-1920,q=80",
    },
    {
        name: "Basa Fish Fillet",
        price: "598",
        img: "https://www.bigbasket.com/media/uploads/p/m/40048878_4-fresho-basa-fish-fillet-preservative-free.jpg?tr=w-1920,q=80",
    },
    {
        name: "Eggs - Free Range",
        price: "269",
        img: "https://www.bigbasket.com/media/uploads/p/m/40117922_2-farm-made-eggs-free-range.jpg?tr=w-1920,q=80",
    },
    {
        name: "Farm Eggs - Brown, Medium",
        price: "89",
        img: "https://www.bigbasket.com/media/uploads/p/m/40038379_9-fresho-farm-eggs-brown-medium-antibiotic-residue-free.jpg?tr=w-1080,q=80",
    },
    {
        name: "Eggs - Organic, Farm Fresh",
        price: "120",
        img: "https://www.bigbasket.com/media/uploads/p/m/40131160_5-hita-farms-eggs-organic-farm-fresh-country.jpg?tr=w-1080,q=80",
    },
    {
        name: "River Salmon - Boneless",
        price: "419",
        img: "https://www.bigbasket.com/media/uploads/p/m/20000993_2-fresho-river-salmon-boneless-preservative-free.jpg?tr=w-1080,q=80",
    },
    {
        name: "Chicken - Boneless Brest",
        price: "216",
        img: "https://www.bigbasket.com/media/uploads/p/m/20001219_2-starchik-chicken-boneless-breast.jpg?tr=w-1080,q=80",
    },
    {
        name: "Mackerel Fish",
        price: "209",
        img: "https://www.bigbasket.com/media/uploads/p/m/10000703_33-fresho-mackerel-fish-large-whole-cleaned-preservative-free-3-4-pcs.jpg?tr=w-1080,q=80",
    },
    {
        name: "Chicken - Soup Pieces",
        price: "109",
        img: "https://www.bigbasket.com/media/uploads/p/m/40163311_1-fresho-chicken-soup-pieces.jpg?tr=w-1080,q=80",
    },
    {
        name: "Eggs - Free Range",
        price: "95",
        img: "https://www.bigbasket.com/media/uploads/p/m/40131161_1-ayur-eggs-free-range-brown-country.jpg?tr=w-1080,q=80",
    },
    {
        name: "Fresho Chicken - Biryani Cut",
        price: "209",
        img: "https://www.bigbasket.com/media/uploads/p/m/40227603_1-fresho-chicken-biryani-cut-soft-tender.jpg?tr=w-1920,q=80",
    },
    {
        name: "Fresho Kolkata/Bengali Pabda Fish",
        price: "779",
        img: "https://www.bigbasket.com/media/uploads/p/l/40048856_3-fresho-pabda-whole-cut-pieces.jpg?tr=w-384,q=80",
    },
    {
        name: "Fresho Peri-Peri Chicken Wings",
        price: "329",
        img: "https://www.bigbasket.com/media/uploads/p/l/40231702_2-fresho-peri-peri-chicken-wings-juicy-fresh.jpg?tr=w-384,q=80",
    },

];

let parent = document.getElementById('products');

function showProducts(meat) {

    parent.innerHTML = null;

    meat.forEach(function (product) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.img;

        let product_price = document.createElement("p");
        product_price.textContent ="₹" + product.price;

        let product_name = document.createElement("p");
        product_name.textContent = product.name;

        let add_to_cart = document.createElement("button");
        add_to_cart.innerText = "Add to Cart";

        add_to_cart.onclick = function () {
            addToCart(product);
        }

        div.append(img, product_name, product_price, add_to_cart);

        parent.append(div);

    });

}

showProducts(data);

if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
}
let cart = JSON.parse(localStorage.getItem("cart"));
let alimul = document.getElementById("basket");
alimul.innerText= cart.length + " Items";

function addToCart(p) {
    let products_cart = JSON.parse(localStorage.getItem("cart"));

    products_cart.push(p);

    localStorage.setItem("cart", JSON.stringify(products_cart));
    console.log(products_cart);
    let bak = products_cart.length;
    let bsk = document.getElementById("basket");
    bsk.innerText = bak + " Items";


}


function sortLH() {
    let arr = data.sort(function (a, b) {
        return a.price - b.price;
    });
    showProducts(arr);
}

function sortHL() {


    let arr1 = data.sort(function (a, b) {
        return b.price - a.price;
    });
    showProducts(arr1);
}
