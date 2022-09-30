const form = document.forms['form'];

let productionDate;
let productName;
let responsibleName;
let selectedPackage;
let selectedType;
let productPosition;
let products = [];

showTime();
//doSubmit();

$(document).ready(function() { // esta función es para evitar que haya problemas con alguna etiqueta html antes de ejecutar la consulta
    $("#save_product").click(function() {
        selectedType = $('[name="type"]').val();
        $("#p1").text(products);
    });

});

form.onsubmit = function(e){
    
    e.preventDefault();
    console.log(e.submitter.id);  
    // createProduct();
    // console.log(products);
    // $("#p1").text(JSON.stringify(products)); // 'convertir' un objeto o JSON en string

    if (e.submitter.id === "save_product") {
        createProduct();
        console.log(products);
        $("#p1").text(JSON.stringify(products)); // 'convertir' un objeto o JSON en string
    } else {
        console.log(products);
        $("#p1").text(JSON.stringify(products)); // 'convertir' un objeto o JSON en string
    }
}

// form.onsubmit = function(e){  //onsibmit and onclick obsoletos (DOM0), usar addeventlistener
//     e.preventDefault();
//     createProduct();
//     console.log(products);
//     $("#p1").text(JSON.stringify(products)); // 'convertir' un objeto o JSON en string
// }

// $("#save_product").click(function() { 
//     createProduct();

//     console.log(products);

//     $("#p1").text(JSON.stringify(products)); // 'convertir' un objeto o JSON en string
// });

$("#edit_button").click(function() {
    // document.getElementById("save_changes_button").hidden =false; 
    $("#save_product").toggle();
    $("#save_changes").toggle();
    
    let targetPosition = document.getElementById("edit_input").value;
    let targetProduct = products[targetPosition];
    console.log(targetProduct);

    editedProduct = editProduct(targetPosition);
    editProductByPosition(targetPosition, editedProduct);

    // $("#product_name").text("hhhh");
    // document.getElementById("product_name").text(targetProduct.productName);
    // document.getElementById("responsible_name").text(targetProduct.responsibleName);
    // document.getElementsByName("type").text(targetProduct.type);
});

$("#delete_button").click(function() {
    let targetPosition = document.getElementById("edit_input").value;
    deleteProductByPosition(targetPosition, products);
    console.log(products);
    $("#p1").text(JSON.stringify(products)); // 'convertir' un objeto o JSON en string
});

// $("#edit_button").click(function() {
//     document.getElementById("#save_changes_button").hidden = "false";
//     document.getElementById("#save_product").hidden = "true";
// });

// form.onsubmit = function(e){
    
//     e.preventDefault();

//     $("#save_product").click(function() {
//         createProduct();
//         console.log(products);
//         $("#p1").text(JSON.stringify(products)); // 'convertir' un objeto o JSON en string
//     });
    
//     $("#save_changes").click(function() {
//         console.log(products);
//         $("#p1").text("editando");
//     });
// }

function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    productionDate = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock_display").innerText = productionDate;
    document.getElementById("clock_display").textContent = productionDate;
    
    setTimeout(showTime, 1000);
}

function createProduct(){
    productName = document.getElementById("product_name").value;
    responsibleName = document.getElementById("responsible_name").value;
    selectedPackage = document.form.packages.value;
    selectedType = $('[name="type"]').val();   
    
    // no funciona de esta forma, investigar el porqué
    // let selectedType; 
    // $(document).ready(function(){

    //     selectedType = $('[name="type"]').val();      
    
    // });

    //console.log(productName + " " + responsibleName + " " + selectedPackage + " " + selectedType + " " + productionDate);

    let product = {
        position: productPosition,
        name: productName,
        type: selectedType,
        date: productionDate,
        responsible: responsibleName,
        package: selectedPackage,
    };
    
    console.table(product);

    product.position = products.length;
    products = [...products, product];
}

function editProduct(targetPosition){
    productName = document.getElementById("product_name").value;
    responsibleName = document.getElementById("responsible_name").value;
    selectedPackage = document.form.packages.value;
    selectedType = $('[name="type"]').val();   
    
    // no funciona de esta forma, investigar el porqué
    // let selectedType; 
    // $(document).ready(function(){

    //     selectedType = $('[name="type"]').val();      
    
    // });

    //console.log(productName + " " + responsibleName + " " + selectedPackage + " " + selectedType + " " + productionDate);

    let product = {
        position: targetPosition,
        name: productName,
        type: selectedType,
        date: productionDate,
        responsible: responsibleName,
        package: selectedPackage,
    };
    
    return product;
}

function deleteProductByPosition(targetPosition){
    
    products.splice(targetPosition, 1);

}

function editProductByPosition(targetPosition, editedProduct){
        

    products.splice(targetPosition, 1, editedProduct);
}



// https://codepen.io/afarrar/pen/JRaEjP
// https://stackoverflow.com/questions/18239430/cannot-set-property-innerhtml-of-null

