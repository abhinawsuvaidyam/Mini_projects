let fname =document.getElementById("form1")
let lname =document.getElementById("form2")
let age =document.getElementById("form3")
let gender =document.getElementById("form4")
let btn =document.getElementById("form5")

let datas=[];
let edita=null;

function myfunction(){
    let user={
        fullname:fname.value+ ' '+ lname.value,
        age:age.value,
        gender:gender.value
    };
    if (edita !== null){
        localStorage.clear();
        datas[edita]=user;
        localStorage.setItem('data',JSON.stringify(datas));
        edita=null;

    }else{
        datas.unshift(user);
        localStorage.setItem('data',JSON.stringify(datas))
    }
    fname.value=''
    lname.value=''
    age.value=''
    gender.value=''
    if (btn.value=="Update"){
        btn.value="Submit"
    }
    showtable()
}
showtable()
function showtable(){
    let local_data=localStorage.getItem('data',)
     local_data=JSON.parse(local_data);
     if(local_data){
        datas=local_data
     }
    let tbody= document.getElementById("tbody");
    let row ="";
    for(let i=0; i<datas.length; i++){
        let store=datas[i].fullname.split(' ');
        let firstname=store[0];
        let lastname= store.slice(1).join(' ')
        row += `
        <tr>
            <td>${firstname} ${lastname}</td>
            <td>${datas[i].age}</td>
            <td>${datas[i].gender}</td>
            <td>
            <button onclick="delete1(${i})";>Delete</button>
            <button onclick="edit1(${i})">Edit</button>
            </td>
        </tr>
        `
    }
    tbody.innerHTML=row;
}
function delete1(index){
      datas.splice(index,1)
        localStorage.setItem('data',JSON.stringify(datas))
      showtable();
}

function edit1(index){
    localStorage.setItem('data',JSON.stringify(datas))
    btn.value="Update";
      let store=datas[index].fullname.split(' ');
        let firstname=store[0];
        let lastname= store.slice(1).join('')
         fname.value=firstname;
         lname.value=lastname;
         age.value= datas[index].age;
         gender.value= datas[index].gender;
         edita=index;
}
