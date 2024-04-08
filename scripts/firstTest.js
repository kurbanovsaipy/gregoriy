const firstTest = document.getElementById('first_test');

const firstTestList = firstTest.querySelectorAll('input');

function removeCheck(e) {
    firstTestList.forEach(element => {    
        element.checked = false;
    });
    e.checked = true;
}