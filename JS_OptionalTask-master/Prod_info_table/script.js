const mobiles = [{
                    "company" : "Samsung",
                    "model" : "Galaxy",
                    "memory" : "64",
                    "price" : "15000",
                    "rating" : "4",
                    "quantity" : "20"
                },
                {
                    "company" : "Nokia",
                    "model" : "S730",
                    "memory" : "128",
                    "price" : "22000",
                    "rating" : "3",
                    "quantity" : "15"
                },
                {
                    "company" : "Xiaomi",
                    "model" : "Note",
                    "memory" : "32",
                    "price" : "12000",
                    "rating" : "5",
                    "quantity" : "21"
                },
                {
                    "company" : "Motorola",
                    "model" : "G10",
                    "memory" : "32",
                    "price" : '15000',
                    "rating" : "4",
                    "quantity" : "13"
                },
                {
                    "company" : "Apple",
                    "model" : "S12",
                    "memory" : "64",
                    "price" : "25000",
                    "rating" : "3",
                    "quantity" : "18"
                }]

addItem();


//  <---------------ADDING ITEM INTO THE TABLE--------------------->               

function addItem() {
    document.getElementById("prod_Table").querySelector("tbody").innerHTML = "";
    for (let i=0; i < mobiles.length; i++) {
        
        row = document.createElement('tr');

        col1 = document.createElement('td');
        col1.className = "col";
    
        col2 = document.createElement('td');
        col2.className = "col";
    
        col3 = document.createElement('td');
        col3.className = "col";
    
        col4 = document.createElement('td');
        col4.className = "col";

        col5 = document.createElement('td');
        col5.className = "col";

        col6 = document.createElement('td');
        col6.className = "col";

        col7 = document.createElement("td");
        col7.className = "col";
        col7.innerHTML = "<input type='checkbox' class='action'>";
        
        txt1 = document.createTextNode(mobiles[i].company);
        txt2 = document.createTextNode(mobiles[i].model);
        txt3 = document.createTextNode(mobiles[i].memory);
        txt4 = document.createTextNode(mobiles[i].price);
        txt5 = document.createTextNode(mobiles[i].rating);
        txt6 = document.createTextNode(mobiles[i].quantity);

    
        col1.appendChild(txt1);
        col2.appendChild(txt2);
        col3.appendChild(txt3);
        col4.appendChild(txt4);
        col5.appendChild(txt5);
        col6.appendChild(txt6);
    
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        document.getElementById("prod_Table").querySelector("tbody").appendChild(row);
    }
}

let tr =  document.getElementById("prod_Table").querySelector("tbody").rows;


//<-----------Funtion to perform Searching items through the table--------->

function search() {
    let select = document.getElementById("dropdown").value;
    let searchTxt = document.getElementById("search").value.toUpperCase();
    
    if (select == "-Select Field-"){
        alert("Please select a field.");
        return;
    }
    if (searchTxt == ""){
        alert("Please enter the field.");
        return;
    }

    mobiles.forEach(function(val,i){
        if(val[select].toUpperCase().indexOf(searchTxt) > -1)
        tr[i].style.display="";
        else
        tr[i].style.display="none";
    });  
}


//<---------function to perform sorting in the table----------->
function sort(){

    let selection1 = document.getElementById("sort1").value;
    let selection2 = document.getElementById("sort2").value;
    
    if(selection1 == -1){
        alert("Please select how you want to sort");
        history.go(0);
    }
    else
    if(selection1 == "ascending") {
        
        if(selection2 == "company"){
            mobiles.sort((a,b)=> (a.company > b.company ? 1 : -1))
        }
    
        else if(selection2 == "model"){
            mobiles.sort((a,b) => (a.model > b.model ? 1 : -1))
        }
        else if(selection2 == "memory"){
            
            mobiles.sort((a,b) => (parseInt(a.memory) > parseInt(b.memory) ? 1 : -1))
        }
        else if(selection2 == "price"){
            mobiles.sort((a,b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1))
        }
        addItem();
    }

    else {

        if(selection2 == "company"){
            mobiles.sort((a,b)=> (a.company < b.company ? 1 : -1))
        }
    
        else if(selection2 == "model"){
            mobiles.sort((a,b) => (a.model < b.model ? 1 : -1))
        }
        else if(selection2 == "memory"){
            mobiles.sort((a,b) => (parseInt(a.memory) < parseInt(b.memory) ? 1 : -1))
        }
        else if(selection2 == "price"){
            mobiles.sort((a,b) => (parseInt(a.price) < parseInt(b.price) ? 1 : -1))
        }
        addItem();
    }
    
}

//<-----Function to take inputs from the user and display it in the table----->

function add() {

    let user_company = document.getElementById("usr_company").value;

    let user_model = document.getElementById("usr_model").value;

    let user_memory = document.getElementById("usr_memory").value;
    
    let user_price = document.getElementById("usr_price").value;

    let user_quantity = document.getElementById("usr_quantity").value;

    if(user_company == "" && user_model == "" && user_memory == "" && user_price == ""  && user_quantity == ""){
        alert("please enter the details of the mobile.");
        return;
    }
else
    if(isNaN(user_memory)){
        alert("please enter valid memory.");
        document.getElementById("usr_memory").style.border = "1px solid red";
    }
    if(isNaN(user_price)){
        alert("please enter valid price.");
        document.getElementById("usr_price").style.border = "1px solid red";
    }
    if(isNaN(user_quantity)){
        alert("please enter valid quantity.");
        document.getElementById("usr_quantity").style.border = "1px solid red";
    }else{
        let obj = {"company" : user_company,
        "model" : user_model,
        "memory" : user_memory,
        "price" : user_price,
        "quantity" : user_quantity};

        mobiles.splice(2, 0, obj);
        addItem();
        displayInDropDown();

        document.getElementById("usr_company").value = "";
        document.getElementById("usr_model").value = "";
        document.getElementById("usr_memory").value = "";
        document.getElementById("usr_price").value = "";
        document.getElementById("usr_quantity").value = "";
    }
}
displayInDropDown();
displayInDropDown1();
displayInDropDown2();

//<-----Function to add item dynamically into dropdown from the above array--------->

function displayInDropDown(){
    document.getElementById("select_prod").innerHTML = "";
    let op = document.createElement("option");
    op.innerHTML = "-Select Product-";
    op.value = -1;

    document.getElementById("select_prod").appendChild(op);
    mobiles.forEach(function(val){
        
        let op = document.createElement("option");
        op.innerHTML = val.company + " " + val.model;
        document.getElementById("select_prod").appendChild(op);
    })
}


function displayInDropDown1(){
    document.getElementById("select_dd").innerHTML = "";
    let op = document.createElement("option");
    op.innerHTML = "-Select Product-";
    op.value = -1;

    document.getElementById("select_dd").appendChild(op);
    mobiles.forEach(function(val){
        
        let op = document.createElement("option");
        op.innerHTML = val.company + " " + val.model;
        document.getElementById("select_dd").appendChild(op);
    })
}


function displayInDropDown2(){
    document.getElementById("rate_select").innerHTML = "";
    let op = document.createElement("option");
    op.innerHTML = "-Select Product-";
    op.value = -1;

    document.getElementById("rate_select").appendChild(op);
    mobiles.forEach(function(val){
        
        let op = document.createElement("option");
        op.innerHTML = val.company + " " + val.model;
        document.getElementById("rate_select").appendChild(op);
    })
}

//<--------------function to add quantity for generating the bill-------------->

let billArr = [];
function addQuantity(){
    let quantity = document.getElementById("quantity").value;
    let selected_product = document.getElementById("select_prod").value;

    if(isNaN(quantity)){
        alert("Quantity must be in numbers.");
    }
    if(quantity == ""){
        alert("Please enter the quantity");
    }
    else{
        mobiles.forEach(function(val){
            if(selected_product == val.company + " " + val.model){

                let obj1 = {"description" : val.company + " " + val.model,
                            "quantity" : quantity,
                            "amount" : val.price * quantity} 

                            billArr.push(obj1);
                val.quantity -= quantity;
                addItem();
            }
        })
    }   
    document.getElementById("quantity").value = "";  
console.log(billArr);
}   

document.getElementById("bill").style.display = "none";

//<----------------Function to generate Bill------------------> 

function generateBill() {
    let totalAmt = 0;
    document.getElementById("bill").style.display = "";
    for(i = 0; i < billArr.length; i++){
        let row = document.createElement("tr");
        let col1 = document.createElement('td');
        let col2 = document.createElement('td');
        let col3 = document.createElement('td');

        col1.appendChild(document.createTextNode(billArr[i].description));
        col2.appendChild(document.createTextNode(billArr[i].quantity));
        col3.appendChild(document.createTextNode(billArr[i].amount));

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);

        document.getElementById("bill_table").appendChild(row);
        totalAmt += billArr[i].amount; 
    }

    
    let row2 = document.createElement("tr");
        let col12 = document.createElement('td');
        let col22 = document.createElement('td');
        let col32 = document.createElement('td');

        col12.appendChild(document.createTextNode("Total:"));
        col22.appendChild(document.createTextNode(""));
        col32.appendChild(document.createTextNode(totalAmt));
        
        row2.appendChild(col12);
        row2.appendChild(col22);
        row2.appendChild(col32);

        document.getElementById("bill_table").appendChild(row2);
}


//<---------Function to delete checked rows------------->
function deleteRow(){
    let checkedRow = document.getElementsByClassName("action");
    Array.from(checkedRow).forEach(function(item){
        if(item.checked)
        item.parentNode.parentNode.remove();
    })
    console.log(checkedRow);

}

function update() {

    let quantity = document.getElementById("inventory-quan").value;
    let selected_product = document.getElementById("select_dd").value;

    if(isNaN(quantity)){
        alert("Quantity must be in numbers.");
    }
    if(quantity == ""){
        alert("Please enter the quantity");
    }

    else{
        mobiles.forEach(function(val){
            if(selected_product == val.company + " " + val.model){
                val.quantity = +val.quantity+ parseInt(quantity);
                addItem();
            }
        })
    }
    document.getElementById("inventory-quan").value = null; 
    document.getElementById("select_dd").value = -1;

}

function rating() {

    let select = document.getElementById("rate_select").value;
    let select_rate = document.getElementById("giveRate").value;

    mobiles.forEach(function(val){
        if(select == val.company + " " + val.model){
            val.rating = select_rate;
            console.log(val.rating);
            addItem();
        }
    })
    document.getElementById("rate_select").value = -1;
    document.getElementById("giveRate").value = null;
}

function maxMin() {

    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    // let tr = document.getElementById("prod_Table").rows;
    console.log(tr);

    min = (min == "" || max !="")?0:min;
    max = (min != 0 || max == 0)? Infinity:max;

    if(isNaN(max) || isNaN(min)){
        alert("Input must be in numbers.");
        document.getElementById("min").value = '';
        document.getElementById("max").value = "";
    }

    if(max == "" && min == ""){
        alert("Please enter the inputs.");
    }

    else {
        
        mobiles.forEach(function(val,i){

            if(val.price <= max && val.price >= min){

                tr[i].style.display="";
            }
            else{
            tr[i].style.display="none";
            }
        })
    }
}
