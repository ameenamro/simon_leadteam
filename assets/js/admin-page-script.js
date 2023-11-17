//TO DO: CHECK IF LOGGED IN USER IS ADMIN, THEN DISPLAY THIS STUFF.

//Selecting DOM Elements
const productsList = document.querySelector("#list-of-products");

const productsAPIUrl = 'https://65572f1fbd4bcef8b612350d.mockapi.io/shoestore'

fetchProducts(productsAPIUrl);

// attempts to fetch the products from the API then calls the display function
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

    displayProducts(resultJSON);

  } catch(err){
    console.error(err);
  }
}

function displayProducts(products){
  clearChildren(productsList);

  products.forEach( product =>{
    //Create the product card section
    const productCard = document.createElement("section");
    productCard.classList.add("product-card");
    productsList.append(productCard);

    //product image
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.add("product-img-small");
    productCard.append(productImage);
    
    //product info table 
    const infoTable = document.createElement("table");
    productCard.append(infoTable);

    //tr Name
    const tableRowName = document.createElement("tr");
    infoTable.append(tableRowName);
    const tableHeadName = document.createElement("th");
    tableHeadName.textContent = "Name:"
    tableRowName.append(tableHeadName);
    const tableDataName = document.createElement("td");
    tableDataName.textContent = product.name;
    tableRowName.append(tableDataName);

    //tr Price
    const tableRowPrice = document.createElement("tr");
    infoTable.append(tableRowPrice);
    const tableHeadPrice = document.createElement("th");
    tableHeadPrice.textContent = "Price ($):"
    tableRowPrice.append(tableHeadPrice);
    const tableDataPrice = document.createElement("td");
    tableDataPrice.textContent = product.price;
    tableRowPrice.append(tableDataPrice);

    //tr Rating
    const tableRowRating = document.createElement("tr");
    infoTable.append(tableRowRating);
    const tableHeadRating = document.createElement("th");
    tableHeadRating.textContent = "Rating:"
    tableRowRating.append(tableHeadRating);
    const tableDataRating = document.createElement("td");
    tableDataRating.textContent = product.rating;
    tableRowRating.append(tableDataRating);

    //tr Description
    const tableRowDescription = document.createElement("tr");
    infoTable.append(tableRowDescription);
    const tableHeadDescription = document.createElement("th");
    tableHeadDescription.textContent = "Description:"
    tableRowDescription.append(tableHeadDescription);
    const tableDataDescription = document.createElement("td");
    tableDataDescription.textContent = product.description;
    tableRowDescription.append(tableDataDescription);

    //Edit Button
    const editButton = document.createElement("button");
    editButton.id = product.id;
    editButton.textContent = "Edit";
    productCard.append(editButton);
    
    //Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.id = product.id;
    deleteButton.textContent = "Delete";
    productCard.append(deleteButton);
 
  });

}

//removes all the children of an element
function clearChildren(element){
  while(element.children.length>0){
    element.firstChild.remove();
  }
}