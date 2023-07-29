let parent = document.getElementById("products")

let cart = JSON.parse(localStorage.getItem("cart"));

let x = document.getElementById("basket");
x.innerText = cart.length + " Items";
function showProducts() {

    cart.forEach(function (product) {
       


        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.img;

        let product_price = document.createElement("p");
        product_price.textContent = "₹" + product.price;

        let product_name = document.createElement("p");
        product_name.setAttribute("class", "productNam")
        product_price.setAttribute("class", "productPri")
        product_name.textContent = product.name;



        div.append(img, product_name, product_price,);

        parent.append(div);

    });

};


let totalAmount = 0;
let totalItems = 0;
for (var i = 0; i < cart.length; i++) {
    totalAmount = totalAmount + Number(cart[i].price);
    totalItems++;
}

var sum = document.getElementById("checkout");
let item = document.createElement("p");
item.setAttribute("id", "cos")
item.innerText = "Subtotal (" + totalItems + " items): ₹" + Math.floor(totalAmount);
let amount = document.createElement("p");
amount.setAttribute("id", "savings")
amount.innerText = "Savings: ₹" + totalAmount * 0.25;


let promo = document.createElement("input");
promo.placeholder = "Enter Promo-code";

let valid = document.createElement("button");
valid.innerText = "Validate";
valid.style.backgroundColor = " #84c225";
valid.style.color = "white";
valid.style.marginLeft="10px"

valid.addEventListener("click", updateValue)

let check_btn = document.createElement("button");
check_btn.innerText = "Checkout";
check_btn.style.backgroundColor = "red";
check_btn.style.color = "aqua";
check_btn.style.marginLeft="230px"
check_btn.setAttribute("class", "ckbutton");
check_btn.addEventListener("click", success)

var gst = 0;

function updateValue() {
    var promoCode = promo.value;
    if (gst === 0 && promoCode == "mart20") {
        totalAmount = 0.80 * totalAmount;
        alert("Congrats you got 20% discount.")
        valid.innerText = "Applied";
        gst++;
    } else if (promoCode != "mart20") {
        alert("Invalid Promocode. Try again!");
        promo.value = "";
    }
    item.innerText = "Subtotal (" + totalItems + " items): ₹" + Math.floor(totalAmount);


}
sum.append(item, amount, promo, valid, check_btn);

showProducts();

function success() {
    window.location.href = "Payment.html";
}