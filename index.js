insert = (num) => {
    document.form.textinput.value = document.form.textinput.value + num;
};

clean = () => {
    document.form.textinput.value = "";
};

back = () => {
    let expression = document.form.textinput.value;
    document.form.textinput.value = expression.substring(0,expression.length-1);
};

equal = () => {
    let expression = document.form.textinput.value;
    if (expression) {
        document.form.textinput.value = eval(expression);
    }
}