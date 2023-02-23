const length = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formular = document.querySelector('.content');
const result = document.querySelector('#result');

// display formular hints
const hints = [{
    // 0
    sameUnit:'gives the same value'
},
{
    // 1 millimeter to centimeter
    ml_c:'Divide the lenght by 10'
},
{
    // 2 millimeter to meter
    ml_m:'Divide the lenght by 1000'
},
{
    // 3 centimeter to millimeter
    c_ml:'multiply the length by 10'
},
{
    // 4 centimeter to meter
    c_m:'multiply the length by 100'
},
{
    // 5 meter to centemeter
    m_c:'divide the length by 100'
},
{
    // 6 meter to millimeter
    m_ml:'divide the length by 1000'
}];

// --get options value--
const units = [
    'millimeter',
    'centimeter',
    'meter',
];

const selectElem=document.querySelectorAll('select');

for (let i = 1; i >= 0; i--) {
    let option = '<option value=${units[i]}>${units[i]}</option>';
    selectElem[0].firstElementChild.insertAdjacentHTML('afterend',option);
}
for (let i = 1; i >= 0; i--) {
    let option = '<option value=${units[i]}>${units[i]}</option>';
    selectElem[1].firstElementChild.insertAdjacentHTML('afterend',option);
}
for (let i = 1; i >= 0; i--) {
    let option = '<option value=${units[i]}>${units[i]}</option>';
    selectElem[2].firstElementChild.insertAdjacentHTML('afterend',option);
}


// function to convert units
function convertunits (){
    if (
        (convertFrom.value=== 'millimeter') && (convertTo.
            value === 'millimeter') ||
        (convertFrom.value=== 'centimeter') && (convertTo.
            value === 'centimeter') ||
        (convertFrom.value=== 'meter') && (convertTo.
            value === 'meter')  
    ){
        result.value=lenght.value;
        formular.textContent=hints[0].sameUnit;
    }
    else if ((convertFrom.value=== 'millimeter') && (convertTo.
            value === 'centimeter')){
                result.value=lenght.value/10;
                formular.textContent=hints[1].ml_c;
            }
    else if ((convertFrom.value=== 'millimeter') && (convertTo.
            value === 'meter')){
                result.value=lenght.value/1000;
                formular.textContent=hints[2].ml_m;
            }
    else if ((convertFrom.value=== 'centimeter') && (convertTo.
            value === 'millimeter')){
                result.value=lenght.value*10;
                formular.textContent=hints[3].c_ml;
            }
    else if ((convertFrom.value=== 'centimeter') && (convertTo.
            value === 'meter')){
                result.value=lenght.value*100;
                formular.textContent=hints[4].c_m;
            }
    else if ((convertFrom.value=== 'meter') && (convertTo.
            value === 'centimeter')){
                result.value=lenght.value/100;
                formular.textContent=hints[5].m_c;
            }
    else if ((convertFrom.value=== 'meter') && (convertTo.
            value === 'milimeter')){
                result.value=lenght.value/1000;
                formular.textContent=hints[6].m_ml;
            }
}

// run function based on change and input events
convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
lenght.addEventListener('change',convertUnits);