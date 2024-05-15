"use strict";
function deleteEmployee() {
    let fullTime;
    let partTime;
    let contract;
    fullTime = localStorage.getItem('fullTime') ? JSON.parse(localStorage.getItem('fullTime')) : [];
    partTime = localStorage.getItem('partTime') ? JSON.parse(localStorage.getItem('partTime')) : [];
    contract = localStorage.getItem('contract') ? JSON.parse(localStorage.getItem('contract')) : [];
    let eId = document.getElementById('empId').value;
    let empType = document.getElementById('type').value;
    if (empType === 'part') {
        for (let i = 0; i < partTime.length; i++) {
            if (eId === partTime[i].empId) {
                partTime.splice(i, 1);
                alert("Deleted Successfully!!");
                break;
            }
        }
    }
    else if (empType === 'contract') {
        for (let i = 0; i < contract.length; i++) {
            if (eId === contract[i].empId) {
                contract.splice(i, 1);
                alert("Deleted Successfully!!");
                break;
            }
        }
    }
    else {
        for (let i = 0; i < fullTime.length; i++) {
            if (eId === fullTime[i].empId) {
                fullTime.splice(i, 1);
                alert("Deleted Successfully!!");
                break;
            }
        }
    }
    localStorage.setItem('fullTime', JSON.stringify(fullTime));
    localStorage.setItem('contract', JSON.stringify(contract));
    localStorage.setItem('partTime', JSON.stringify(partTime));
}
