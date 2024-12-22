document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('calculateBtn').addEventListener('click', function() {
        if (validateInputs()) {
            fgvTeljesEll();
        }
    });
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
    const napokSzama = (tavozasDatum - erkezesDatum) / (1000 * 60 * 60 * 24)

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

function validateInputs() {
    const szobaChecked = document.querySelector('input[name="szoba"]:checked');
    const ellatasChecked = document.querySelector('input[name="ellatas"]:checked');
    const erkezesDatum = document.getElementById('arrive').value;
    const tavozasDatum = document.getElementById('depart').value;
    const vendegSzam = parseInt(document.getElementById('vendegSzam').value) || 0;
    const ageInputs = Array.from(document.querySelectorAll('input[name="eletkor"]')).slice(0, vendegSzam);

    if (!szobaChecked || !ellatasChecked || !erkezesDatum || !tavozasDatum) {
        alert("Kérjük, töltse ki az összes kötelező mezőt!")
        resetForm();
        return false;
    }
    
    if (ageInputs.some(input => !input.value)) {
        alert("Kérjük, adja meg az összes vendég életkorát!")
        resetForm();
        return false;
    }
    let napokSzama = (new Date(tavozasDatum) - new Date(erkezesDatum)) / (1000 * 60 * 60 * 24);
    if (napokSzama < 1) {
        alert("Távozás dátuma nem lehet korábbi, mint az érkezés dátuma.");
        resetForm();
        return false;
    }

    return true;
}

function resetForm() {
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[type="date"]').forEach(input => input.value = '');
    document.getElementById('vendegSzam').value = '';
    document.querySelectorAll('input[name="eletkor"]').forEach(input => {
        input.value = '';
        input.disabled = true;
    });
    document.getElementById('warning').innerHTML = '';
    document.getElementById('fizetes').innerHTML = '';
}