

function clientSubmit(){
    // Client Data
    let name = document.getElementById("clientName").value
    let cpf = document.getElementById("clientCPF").value
    let adress = document.getElementById("clientAdrs").value
    let email = document.getElementById("clientEmail").value
    // =====================================
    if(name !==  '' && cpf !== '' && adress !==  '' && email !== ''){
        if(validateEmail(email) === false){
            return alert('Put a valid E-mail like: augusto@gmail.com')
        }else{
            let client = {
                name: name,
                cpf: cpf,
                adress: adress,
                email: email,
            }
            localStorage.setItem('userData', JSON.stringify(client))
            alert('Customer registred!')
            window.location.replace("./index.html")
        }   
    }else{
        return alert('Answer all inputs!')
    }
}


function productSubmit(){
    // Product Data
    let name = document.getElementById("productName").value
    let code = document.getElementById("productCode").value
    let quantity = document.getElementById("productQuantity").value
    let price = document.getElementById("productPrice").value
    // =====================================
    if(name !==  '' && code !== '' && quantity !==  '' && price !== ''){
        if(quantity <= 0){
            return alert("The quantity can't be less or equal than 0 !")
        }else{
            let product = {
                name: name,
                code: code,
                quantity: quantity,
                price: price ,
            }
            localStorage.setItem('productData', JSON.stringify(product))
            alert('Product registred!')
            window.location.replace("./index.html")
        }   
    }else{
        return alert('Answer all inputs!')
    }
}

// Validating E-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
