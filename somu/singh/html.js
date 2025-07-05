let fname = document.getElementById("form1")
let lname = document.getElementById("form2")
let age = document.getElementById("form3")
let gender = document.getElementById("form4")
let btn = document.getElementById("form5")
let Datas = [];
let edita = null;

function myfunction() {
    let user ={
        fullname : fname.value +" "+lname.value,
        age: age.value,
        gender: gender.value,
    }
    if(edita !== null){
        localStorage.clear();
        Datas[edita]=user;
          localStorage.setItem('data',JSON.stringify(Datas))
        edita=null;
    }else{
        Datas.unshift(user)
          localStorage.setItem('data',JSON.stringify(Datas))

    }
    fname.value=''
    lname.value=''
    age.value =''
    gender.value=''
    if (btn.value=="Update"){
        btn.value="Submit"
    }

    showtable()
}
showtable()
function showtable(){
    let local_data = localStorage.getItem('data');
    local_data=JSON.parse(local_data);
    if(local_data){
        Datas = local_data;
    }
    let tbody = document.getElementById("tbody");
    let row ="";
    for (let i =0; i < Datas.length; i++){
        let store = Datas[i].fullname.split(' ');
        let firstname = store[0];
        let lastname = store.slice(1).join(' ');
        row +=` <tr>
                        <td>${firstname} ${lastname}</td>
                        <td>${Datas[i].age}</td>
                        <td>${Datas[i].gender}</td>
                        <td>
                        <button onclick="edit1(${i})">Edit</button>
                        <button onclick="delete1(${i})">Delete</button>
                        </td>
                    </tr>`
    }
    tbody.innerHTML=row;
}


function delete1(index){
        Datas.splice(index,1)
        localStorage.setItem('data',JSON.stringify(Datas))
        showtable()
}
function edit1(index){
    btn.value="Update";
   let store = Datas[index].fullname.split(' ');
        let firstname = store[0];
        let lastname = store.slice(1).join(' ');
        fname.value=firstname;
        lname.value=lastname;
        age.value= Datas[index].age;
        gender.value=Datas[index].gender; 
        edita=index;
}