let horasTrabsInput = document.getElementById('HrsTrabs');
let valHrsInput = document.getElementById('valHrs');
const BtnCalc = document.getElementById('calc');
const salBrutoOutput = document.getElementById('Sal-Bruto');
const descontoOutput = document.getElementById('Desconto');
const salLiqOutput = document.getElementById('Sal-Liq');



BtnCalc.addEventListener('click', function () {

    const hrsTrabs = parseFloat(horasTrabsInput.value);
    const valHrs = parseFloat(valHrsInput.value);

    if (isNaN(hrsTrabs) || isNaN(valHrs)) {

        alert("É NECESSÁRIO PREENCHER TODOS OS CAMPOS");
    }
    else {
        const salBruto = hrsTrabs * valHrs * 4.5;
        const desconto = (salBruto * 11) / 100;
        const salLiq = salBruto - desconto;

        salBrutoOutput.value = salBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        descontoOutput.value = desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salLiqOutput.value = salLiq.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }
});