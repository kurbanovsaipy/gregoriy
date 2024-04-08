
/*const q1 = document.getElementById('q1');

const checkList = q1.querySelectorAll('input');

function removeCheck(e) {
    checkList.forEach(element => {    
        element.checked = false;
    });
    e.checked = true;
}*/


const form = document.querySelectorAll('.form_gird_item');


form.forEach((element) => element.addEventListener(('click'), (e) => {
    const target = e.target;
    const list = element.querySelectorAll('input');

    list.forEach(el => {
        if(target == el) {
            list.forEach(element => {    
                element.checked = false;
            });
            el.checked = true;
        }
    })
    
}));

