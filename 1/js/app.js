const bill = document.getElementById('inp-bill');
const tip8tns = document.querySelectorAll('.tip');

bill.addEventListener('input', setBillValue);

let billValue = 0.0;

function validateFloat(s){
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function setBillValue(){
    if (bill.value.includes(',')){
        bill.value = bill.value.replace(',','.');
    }

    if(!validateFloat(bill.value)){
        bill.value = bill.value-substring(0, bill.value.length - 1);
    }

    billValue = parseFloat(bill.value);
    
}
