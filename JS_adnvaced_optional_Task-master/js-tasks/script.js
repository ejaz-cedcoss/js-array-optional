import{id, name, salary} from './script2.js ';

let userArr=[];   
let jsonAr = "";

console.log(id);
let obj = {"id": id, 'name':name, 'salary': salary};
jsonAr= JSON.stringify(obj);

document.getElementById('jsonD').addEventListener('click', () =>{
    addTable(obj);
})

class User {
     
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    } 

    addData(){
        let row = document.createElement('tr');

        row.innerHTML = `<td>${this.id + '.'}</td>
                    <td>${this.name}</td>
                    <td>${this.salary}</td>
                    <td>--</td>
                    <td>--</td>
                    <td><a href='#'>Delete</a></td> 
    `
        document.getElementById("userTable").appendChild(row);
    }
     
}
let employee1  = new User(1, 'John', 50000);
employee1.addData();
let employee2 = new User(2, "Michael", 10000);
employee2.addData();


document.getElementById("adBtn").addEventListener("click", add);

    
function add() {
    let uid = document.getElementById("userId").value;
    let uname = document.getElementById("userName").value;
    let usal = document.getElementById("userSal").value;
    let updatedSal1 = "";
    let updatedSal2 = "";

    try {
        if(uid == '' || uname == '' || usal == ''){
            document.getElementById("err-msg").innerHTML = "All fields must be filled";
            return;
        }
        if(isNaN(uid)){
            document.getElementById("err-msg").innerHTML = "Enter valid Employee Id.";
            return;
        }
        if(isNaN(usal)){
            debug();
            document.getElementById("err-msg").innerHTML = "Enter valid Employee Salary.";
            return;
        }
        
        
    } catch (error) {
        alert(error) 
    }
    
    let data = new User(uid, uname, usal, updatedSal1, updatedSal2);
    
    userArr.push(data);
    jsonAr = JSON.stringify(userArr);   
    addTable(data);
    

}
function addTable(data) {

    document.getElementsByTagName("tbody").innerHTML = "";

    let row = document.createElement('tr');

    row.innerHTML = `<td>${data.id + '.'}</td>
                    <td>${data.name}</td>
                    <td>${data.salary}</td>
                    <td>--</td>
                    <td>--</td>
                    <td><a href='#'>Delete</a></td> 
    `
    document.getElementById("userTable").appendChild(row);

    document.getElementById("userId").value = '';
    document.getElementById("userName").value = '';
    document.getElementById("userSal").value = '';
}

const calculate1 = () => {
    document.getElementsByTagName("tbody").innerHTML = "";

    try {
        userArr.forEach((val) => {
            val.updatedSal1 = (val.salary * 1.1).toFixed(2); 
            
            document.getElementsByTagName("tbody").innerHTML = "";
        
            let row = document.createElement('tr');
            
            row.innerHTML = `<td>${val.id + '.'}</td>
                    <td>${val.name}</td>
                    <td>${val.salary}</td>
                    <td>${val.updatedSal1}</td>
                    <td>${(val.updatedSal2)?val.updatedSal2:"--"}</td>
                    <td><a href='#'>Delete</a></td> 
                                                    `
            document.getElementById("userTable").appendChild(row);
    })  
    } catch (error) {
        alert(error);
    }  
}
document.getElementById("cal1").addEventListener("click", calculate1);
document.getElementById("cal2").addEventListener("click", calculate2);
function calculate2() {
   
    userArr.forEach((val) => {
        val.updatedSal2 = (val.salary * 15 / 100).toFixed(3);

        document.getElementsByTagName("tbody").innerHTML = "";
        
        let row = document.createElement('tr');
        
        row.innerHTML = `<td>${val.id + '.'}</td>
                <td>${val.name}</td>
                <td>${val.salary}</td>
                <td>${(val.updatedSal1)?val.updatedSal1:"--"}</td>
                <td>${val.updatedSal2}</td>
                <td><a href='#'>Delete</a></td> 
                                                `
        document.getElementById("userTable").appendChild(row);
    })
}

let uid = document.getElementById("userId").value;
let uname = document.getElementById("userName").value;
let usal = document.getElementById("userSal").value;


let debug = () => {alert('salary is less than 0'); return;};

document.getElementById("sal30K").addEventListener('click', sal30);

function sal30(){
    try {
        userArr.forEach((val) => {
            val.salary = 30000; 
            let row = document.createElement('tr');
            
            row.innerHTML = `<td>${val.id + '.'}</td>
                    <td>${val.name}</td>
                    <td>${val.salary}</td>
                    <td>--</td>
                    <td>--</td>
                    <td><a href='#'>Delete</a></td> 
                                                    `
            document.getElementById("userTable").appendChild(row);
    })  
    } catch (error) {
        alert(error);
    }
}