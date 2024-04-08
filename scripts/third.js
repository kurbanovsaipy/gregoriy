const thirdTest = document.getElementById('third_test');

const thirdTestList = thirdTest.querySelectorAll('input');

function removeCheck(e) {
    thirdTestList.forEach(element => {    
        element.checked = false;
    });
    e.checked = true;
}