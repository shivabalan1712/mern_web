"use strict";
const options = document.getElementById('type');
options.addEventListener('change', () => {
    if (options.value === 'part') {
        document.getElementById("part").disabled = false;
        document.getElementById("contract").disabled = true;
    }
    else if (options.value === 'contract') {
        document.getElementById("part").disabled = true;
        document.getElementById("contract").disabled = false;
    }
    else {
        document.getElementById("part").disabled = true;
        document.getElementById("contract").disabled = true;
    }
});
function updateEmployee() {
    let fullTime;
    let partTime;
    let contract;
    fullTime = localStorage.getItem('fullTime') ? JSON.parse(localStorage.getItem('fullTime')) : [];
    partTime = localStorage.getItem('partTime') ? JSON.parse(localStorage.getItem('partTime')) : [];
    contract = localStorage.getItem('contract') ? JSON.parse(localStorage.getItem('contract')) : [];
    let eName = document.getElementById('empName').value;
    let eId = document.getElementById('empId').value;
    let eDept = document.getElementById('dept').value;
    let eSal = parseInt(document.getElementById('salary').value);
    console.log(eSal);
    let empType = document.getElementById('type').value;
    if (empType === 'part') {
        let hours = parseInt(document.getElementById('part').value);
        for (let i = 0; i < partTime.length; i++) {
            if (eId === partTime[i].empId) {
                if (!(eName === ""))
                    partTime[i].empName = eName;
                if (!(eDept === ""))
                    partTime[i].dept = eDept;
                if (!Number.isNaN(eSal))
                    partTime[i].salary = eSal;
                if (!Number.isNaN(hours))
                    partTime[i].hoursWorked = hours;
                alert("Updated Successfully!!");
                break;
            }
        }
    }
    else if (empType === 'contract') {
        let hours = parseInt(document.getElementById('contract').value);
        for (let i = 0; i < contract.length; i++) {
            if (eId === contract[i].empId) {
                if (!(eName === ""))
                    contract[i].empName = eName;
                if (!(eDept === ""))
                    contract[i].dept = eDept;
                if (!Number.isNaN(eSal))
                    contract[i].salary = eSal;
                if (!(Number.isNaN(hours)))
                    contract[i].contractTime = hours;
                alert("Updated Successfully!!");
                break;
            }
        }
    }
    else {
        for (let i = 0; i < fullTime.length; i++) {
            if (eId === fullTime[i].empId) {
                if (!(eName === ""))
                    fullTime[i].empName = eName;
                if (!(eDept === ""))
                    fullTime[i].dept = eDept;
                if (!(Number.isNaN(eSal)))
                    fullTime[i].salary = eSal;
                alert("Updated Successfully!!");
                break;
            }
        }
    }
    localStorage.setItem('fullTime', JSON.stringify(fullTime));
    localStorage.setItem('contract', JSON.stringify(contract));
    localStorage.setItem('partTime', JSON.stringify(partTime));
}
