const btns = document.getElementsByClassName('btn');
const show = document.getElementById('show');

Array.from(btns).forEach(e => {
    e.addEventListener('click', () => {
        if (e.value == "AC") {
            show.value = "";
        } else if (e.value == "=") {
            let eq = show.value;
            eq = eq.replace('×', '*');
            eq = eq.replace('÷', '/');
            eq = eq.replace('%', "/100*");
            try {
                eq = eval(eq);
                (eq - Math.floor(eq) != 0) ? show.value = eq.toFixed(2) : show.value = eq;
            } catch (error) {
                show.value = "Error!";
            }
        } else if (e.value == "«") {
            let str = String(show.value);
            show.value = str.substring(0, str.length - 1);
        } else {
            show.value += e.value;
        }
    })
})

