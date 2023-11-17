//Selecting DOM Elements
const grid = document.querySelector(".content");

const productsAPIUrl = 'https://65572f1fbd4bcef8b612350d.mockapi.io/shoestore'

fetchProducts(productsAPIUrl);

async function fetchProducts(url){
  try{
    //fetch the products
    const result = await fetch(url+'/product');

    if (!result.ok) {
      throw new Error(`Failed to fetch data. Status: ${result.status}`);
    }

    //convert the fetched result format into JSON
    const resultJSON = await result.json();
    console.log(resultJSON);

  } catch(err){
    console.error(err);
  }
}