window.onload = function() {
    fetchProducts();

    // how to get the submit element
    document.getElementById('addBtn').onclick = function(event){
        event.preventDefault();
        const productId = this.dataset.id;
        if(productId){ //data-id exists - edit a product
            console.log('---------------');

            // how to get al the info from browser and use fetch to request from server side
            fetch('http://localhost:3000/products/' + productId, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({   // convert it to json string
                    title: document.getElementById('title').value,
                    price: document.getElementById('price').value,
                    description: document.getElementById('description').value
                })
            })
            .then(data => data.json())
            .then(updatedProd => {
                console.log(updatedProd);
                //reset from
                document.getElementById('form-title').textContent = "Add a Product";
                document.getElementById('add-form').reset();
                document.getElementById('addBtn').dataset.id = '';
                location.reload();
            })
        } else{
            createNewProduct();
        }
    } 
}

function createNewProduct(){
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    fetch('http://localhost:3000/products', {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        // if you using post, you need body, make object into string
        body: JSON.stringify({
            title: title,
            price: price,
            description: description
        })

        // we return promise from fetch
    }).then(data => data.json())
    .then(prod => {  // success method
        console.log(prod);
        document.getElementById('add-form').reset();   // ones you submitted it delete from the table so you can add other elements
        attachSingleProduct(document.getElementById('product-list-body'), prod);
    });
}

// by default fetch is get request
async function fetchProducts(){
    const products = await (await fetch('http://localhost:3000/products')).json();
    const tbody = document.getElementById('product-list-body');
    products.forEach(prod => {
        attachSingleProduct(tbody, prod);
    })
}

function attachSingleProduct(parentNode, product){
    const tr = document.createElement('tr'); //<tr>
    const titleTd = document.createElement('td'); //<td>111</td>
    titleTd.textContent = product.title;
    tr.appendChild(titleTd); //

    const priceTd = document.createElement('td');
    priceTd.textContent = product.price;
    tr.appendChild(priceTd);

    const descriptionTd = document.createElement('td');
    descriptionTd.textContent = product.description;
    tr.appendChild(descriptionTd);

    const actionTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    // deleteButton.className = 'btn btn-primary';
    deleteButton.innerText = 'DELETE';
    deleteButton.dataset.id = product.id;
    actionTd.appendChild(deleteButton);

    const updateButton = document.createElement('button');
    updateButton.innerText = 'UPDATE';
    updateButton.dataset.id = product.id;
    actionTd.appendChild(updateButton);

    tr.appendChild(actionTd);

    deleteButton.addEventListener('click', function(){
        // console.log('DELETE button clicked');
        fetch('http://localhost:3000/products/'+product.id, {
            method: 'DELETE'
        })
        .then(data => {
           tr.remove();
        });

    });


    updateButton.addEventListener('click', function() {
        fetch('http://localhost:3000/products/'+ product.id)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            document.getElementById('form-title').textContent = "Edit a Product";
            document.getElementById('title').value = data.title;
            document.getElementById('price').value = data.price;
            document.getElementById('description').value = data.description;
            document.getElementById('addBtn').dataset.id= data.id;

        })
    })
   
    parentNode.appendChild(tr);
}