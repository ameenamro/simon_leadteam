item_name = localStorage.getItem('product');

const about = document.querySelector(".content");
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

    const photoItem = document.querySelector(".photo");
    const nameprodact = document.querySelector("h4");
    const salary = document.querySelector("h5");
    const about = document.querySelector(".store");
    const rat = document.querySelector(".rate");


    const myImage = new Image(500, 500);
    products.forEach(async product => {
        if (product.name === item_name) {
            salary.textContent = `$${product.price}`;
            rat.textContent = `${product.rating}`;
            about.textContent = `${product.description}`;
            nameprodact.textContent = `${product.name}`;
            myImage.src = `${product.image}`;
            photoItem.appendChild(myImage);


        }



    })






}



//removes all the children of an element
function clearChildren(element) {
    while (element.children.length > 0) {
        element.firstChild.remove();
    }
}