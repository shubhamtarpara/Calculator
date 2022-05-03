let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        console.log(e)
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText)
        if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            console.log(screenValue)
            console.log(screen.value);
            // const temp = eval(screenValue);
            // console.log(temp);
            // if (!temp) {
            //     screen.value = 'Error';
            // } else {
            //     screen.value = temp;
            // }
            try {
                screen.value = eval(screenValue);
            } catch (err) {
                screen.value = "Error";
            }
            // if (screen.value)
            // console.log(typeof screen.value);
            // console.log(screen.value);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}