let string = "";
let buttons = document.querySelectorAll('.button');
Array.buttons.forEach((button) => {
    button.addEventListner('click', (e) => {

        if (e.target.innerHtml == '='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        if (e.target.innerHtml == '='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        if (e.target.innerHtml == '='){
            string = eval(string);
            document.querySelector('input').value=string;
        }

    })
});