function tabuada() {
    let num = window.document.getElementById('txtn');
    let tab = window.document.getElementById('seltab');
    //Se o campo numero estiver vazio
    if (num.length == 0) {
        window.alert('Por favor, digite um número');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';

        while (c <= 10) {
            let item = window.document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item);
            c++;
        }
    }
}