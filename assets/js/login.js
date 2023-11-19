const productsAPIUrl = 'https://65572bb0bd4bcef8b6122d2f.mockapi.io'

fetchProducts(productsAPIUrl);
async function fetchProducts(url) {
    try {
        //fetch the products
        const result = await fetch(url + '/ameen');

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


const registerName = document.getElementById("registerName").value;
const registerEmail = document.getElementById("registerEmail").value;
const registerPassword = document.getElementById("registerPassword").value;
const registerConPassword = document.getElementById("registerConPassword").value;

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const registerSubmitButton = document.getElementById("registerSubmit");
const registerButton = document.getElementById("registerButton");





function displayProducts(products) {
    products.forEach(async product => {


        loginForm.addEventListener("submit",  function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            let validEmail = product.Email;
            console.log(validEmail);
            let validPassword = product.Password;
            console.log(validPassword);
            admin="admin";
            const inValidMessage = document.getElementById("inValidMessage");

            if (email === validEmail && password === validPassword) { 

                const user = {
                    email: email,
                    password: password
                };

             about_item(admin,product);


                document.getElementById("loginForm").style.display = "none";
                document.getElementById("logoutButton").style.display = "block";
            } else {
                inValidMessage.style.display = "block";
                inValidMessage.classList.add('inValidMessage');
            }
        });

        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert(`Registration Successful!`);
            registerForm.style.display = "none";
            loginForm.style.display = "block";

        });

        registerButton.addEventListener("click", function () {
            document.getElementById("loginForm").style.display = "none";
            registerForm.style.display = "block";
            inValidMessage.style.display = "none";
        });

        document.getElementById("logoutButton").addEventListener("click", function () {
            localStorage.removeItem("user");
            document.getElementById("loginForm").style.display = "block";
            document.getElementById("logoutButton").style.display = "none";
        });




    })






}




async function about_item(admin,product) {
    


        if(admin===product.role)
        {

           window.location.href="../html/admin-page.html";


        }

else
{

    console.log("ameen");
    window.location.href="../../index.html";



}
    
            


}







