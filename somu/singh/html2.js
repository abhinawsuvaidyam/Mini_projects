let fname = document.getElementById("form1");
let lname = document.getElementById("form2");
let age = document.getElementById("form3");
let gender = document.getElementById("form4");
let btn = document.getElementById("form5");
let Datas = JSON.parse(localStorage.getItem('data')) || [];
let edita = null;

// Initial render
showTable();

btn.addEventListener("click", handleFormSubmit);

function handleFormSubmit() {
    const firstNameVal = fname.value.trim();
    const lastNameVal = lname.value.trim();
    const ageVal = age.value.trim();
    const genderVal = gender.value;

    // Basic validation
    if (!firstNameVal || !lastNameVal || !ageVal || !genderVal) {
        alert("Please fill in all fields correctly.");
        return;
    }

    if (isNaN(ageVal) || +ageVal <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    const user = {
        fullname: `${firstNameVal} ${lastNameVal}`,
        age: ageVal,
        gender: genderVal
    };

    if (edita !== null) {
        Datas[edita] = user;
        edita = null;
        btn.value = "Submit";
    } else {
        Datas.unshift(user);
    }

    updateLocalStorage();
    resetForm();
    showTable();
}

function showTable() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    if (!Datas.length) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center">No data found</td></tr>`;
        return;
    }

    Datas.forEach((data, index) => {
        const [first, ...rest] = data.fullname.split(" ");
        const last = rest.join(" ");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${first} ${last}</td>
            <td>${data.age}</td>
            <td>${data.gender}</td>
            <td>
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteEntry(index) {
    if (confirm("Are you sure you want to delete this entry?")) {
        Datas.splice(index, 1);
        updateLocalStorage();
        showTable();
    }
}

function editEntry(index) {
    const [first, ...rest] = Datas[index].fullname.split(" ");
    fname.value = first;
    lname.value = rest.join(" ");
    age.value = Datas[index].age;
    gender.value = Datas[index].gender;
    edita = index;
    btn.value = "Update";
}

function updateLocalStorage() {
    localStorage.setItem("data", JSON.stringify(Datas));
}

function resetForm() {
    fname.value = "";
    lname.value = "";
    age.value = "";
    gender.value = "";
}
