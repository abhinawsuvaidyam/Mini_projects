let fname = document.getElementById("form1");
let lname = document.getElementById("form2");
let age = document.getElementById("form3");
let gender = document.getElementById("form4");
let btn = document.getElementById("form5");

let edita = null;
let datas = [];

function myfunction() {
    // if(fname.value=''){
    //     alert("firstname");
    //     return
    // }
    // if(lname.value=''){
    //     alert("lastname");
    //     return
    // }
    // if(age.value=''){
    //     alert("age");
    //     return
    // }
    // if(gender.value=''){
    //     alert("gender");
    //     return
    // }
    let user = {
        fullname: fname.value + " " + lname.value,
        age: age.value,
        gender: gender.value,
    }
    if (edita !== null) {
        localStorage.clear()
        datas[edita] = user;
        localStorage.setItem('data', JSON.stringify(datas))
        edita = null;
    } else {
        datas.unshift(user);
        localStorage.setItem('data', JSON.stringify(datas))
    }
    fname.value = ''
    lname.value = ''
    age.value = ''
    gender.value = ''
    if (btn.value == "Update") {
        btn.value = "submit";
    };
    showtable()
    console.log(user);
};
showtable()
let local_data = localStorage.getItem('data')

if (local_data) {
   datas = JSON.parse(local_data);
}
function showtable() {
    let tbody = document.getElementById("tbody");
    let row = "";
    for (let i = 0; i < datas.length; i++) {
        let store = datas[i].fullname.split(' ');
        let firstname = store[0];
        let lastname = store.slice(1).join(' ');
        row += `  <tr>
                        <td>${firstname} ${lastname}</td>
                        <td>${datas[i].age}</td>
                        <td>${datas[i].gender}</td>
                        <td>
                        <button onclick="edit1(${i})">edit</button>
                        <button onclick="delete1(${i})">delete</button>
                        </td>
                    </tr>`
    }
    tbody.innerHTML = row;
};
function delete1(index) {
    datas.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(datas))
    showtable();
}
function edit1(index) {
    btn.value = "Update"
    let store = datas[index].fullname.split(' ');
    let firstname = store[0];
    let lastname = store.slice(1).join(' ');
    fname.value = firstname;
    lname.value = lastname;
    age.value = datas[index].age;
    gender.value = datas[index].gender;
    edita = index;
}
