document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('input[name="szoba"]').forEach(radio => {
        radio.addEventListener('change', fgvSzoba);
    });

    document.querySelectorAll('input[name="ellatas"]').forEach(radio => {
        radio.addEventListener('change', fgvTeljesEll);
    });

    document.querySelectorAll('input[name="szolg"]').forEach(checkbox => {
        checkbox.addEventListener('change', fgvTeljesEll);
    });

    document.getElementById('arrive').addEventListener('change', fgvTeljesEll);
    document.getElementById('depart').addEventListener('change', fgvTeljesEll);
});

function fgvSzoba() {
    const vendegSzamInput = document.getElementById('vendegSzam');
    const ageInputs = document.querySelectorAll('input[name="eletkor"]');
    const szoba = document.querySelector('input[name="szoba"]:checked').id;

    let vendegSzam = szoba;

    vendegSzamInput.value = vendegSzam;
    ageInputs.forEach((input, index) => {
        input.disabled = index >= vendegSzam;
        if (index >= vendegSzam) {
            input.value = '';
        }
    });

    fgvTeljesEll();
}
function mezoErtek(mezoNev){
    return document.querySelector('input[name="' + mezoNev + '"]:checked') ? parseInt(document.querySelector('input[name="'+ mezoNev +'"]:checked').value):0
}

function fgvTeljesEll() {
    const szobaDij = mezoErtek('szoba') //document.querySelector('input[name="szoba"]:checked') ? parseInt(document.querySelector('input[name="szoba"]:checked').value) : 0;
    const ellatasDij = mezoErtek('ellatas') //document.querySelector('input[name="ellatas"]:checked') ? parseInt(document.querySelector('input[name="ellatas"]:checked').value) : 0;
    const szolgDijElems = Array.from(document.querySelectorAll('input[name="szolg"]:checked'));
    const szolgDij = szolgDijElems.reduce((sum, elem) => sum + parseInt(elem.value), 0);

    const vendegSzam = parseInt(document.getElementById('vendegSzam').value) || 0;
    const erkezesDatum = new Date(document.getElementById('arrive').value);
    const tavozasDatum = new Date(document.getElementById('depart').value);
    const napokSzama = (tavozasDatum - erkezesDatum) / (1000 * 60 * 60 * 24);

    let totalSzobaDij = szobaDij * napokSzama;
    let totalEllatasDij = 0;
    let totalSzolgDij = 0;
    let kedvezmenyOsszeg = 0;

    document.querySelectorAll('input[name="eletkor"]').forEach((input, index) => {
        if (index < vendegSzam && input.value) {
            const eletkor = parseInt(input.value);
            if (eletkor < 6) {
                totalEllatasDij += ellatasDij * 0.2 * napokSzama;
                totalSzolgDij += szolgDij * 0.2 * napokSzama;
                kedvezmenyOsszeg += (ellatasDij * 0.8 * napokSzama) + (szolgDij * 0.8 * napokSzama);
            } else {
                totalEllatasDij += ellatasDij * napokSzama;
                totalSzolgDij += szolgDij * napokSzama;
            }
        }
    });
    
    const osszDij = totalSzobaDij + totalEllatasDij + totalSzolgDij;
    const warningDiv = document.getElementById('warning');
    warningDiv.innerHTML = vanOlcsobbAjanlat(szolgDijElems) ? 'Figyelem! A Teljes belépő olcsóbb lehetőség: 2000 Ft/nap/fő' : '';
    function vanOlcsobbAjanlat(szolgDijElems) {
        return szolgDijElems.length === 3 && szolgDijElems.every(elem => parseInt(elem.value) === 800);
    }
    document.getElementById('fizetes').innerHTML = `Összköltség: ${osszDij} Ft<br>Éjszakák száma: ${napokSzama}<br>Kedvezmény összeg(6 éves kor alatt): ${kedvezmenyOsszeg} Ft`;
}