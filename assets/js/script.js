//Selecting DOM Elements
const grid = document.querySelector(".content");
const logoutBtn = document.querySelector("#logout");
const loginBtn = document.querySelector("#user-section");

logoutBtn.addEventListener("click",(e)=>{
  localStorage.clear();
  window.location.href="./assets/html/login.html";
})

//check if logged in
if(localStorage.role){
    if(localStorage.role==="admin"){
        window.location.href="./assets/html/admin-page.html";
    }
    loginBtn.classList.add("display-none");
    logoutBtn.classList.remove("display-none");
  } else {
    loginBtn.classList.remove("display-none");
    logoutBtn.classList.add("display-none");
  }

const productsAPIUrl = 'https://65572f1fbd4bcef8b612350d.mockapi.io/shoestore'

fetchProducts(productsAPIUrl);


// attempts to fetch the products from the API then calls the display function
async function fetchProducts(url) {
    try {
        //fetch the products
        const result = await fetch(url + '/product');

        if (!result.ok) {
            throw new Error(`Failed to fetch data. Status: ${result.status}`);
        }

        //convert the fetched result format into JSON
        const resultJSON = await result.json();
        console.log(resultJSON);

        displayProducts(resultJSON);





    } catch (err) {
        console.error(err);
    }
}

function displayProducts(products) {
    clearChildren(grid);


    products.forEach(async product => {
        //Create the product card section
        const productSection = document.createElement("section");
        productSection.classList.add("box");
        grid.append(productSection);

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productSection.append(productImage);

        const nameHeader = document.createElement("h4");
        nameHeader.textContent = product.name;
        productSection.append(nameHeader);

        const priceHeader = document.createElement("h5");
        priceHeader.textContent = `$${product.price}`;
        productSection.append(priceHeader);

        //CART BUTTON SECTION
        const cartBtnSection = document.createElement("section");
        cartBtnSection.classList.add("cart");
        productSection.append(cartBtnSection);

        const cartAnchor = document.createElement("a");
        cartAnchor.href = "#";
        cartBtnSection.append(cartAnchor);

        const cartIcon = document.createElement("i");
        cartIcon.classList.add("bx");
        cartIcon.classList.add("bxs-cart");
        cartBtnSection.append(cartIcon);
        let name=product.name;       
        await about_item(productSection,product);


    })




}




async function about_item(o,product) {


    o.addEventListener('click', (e) => {
         localStorage.setItem('product',product.name);
        window.location.href="./assets/html/item.html";
    });






}




//removes all the children of an element
function clearChildren(element) {
    while (element.children.length > 0) {
        element.firstChild.remove();
    }
}
