let nevRegex = /[aA-zZ]{1,}/;
let orszagRegex = /[a-zA-Z]{1,}/;
let varosRegex = /[a-zA-Z]{1,}/g;
let utcaRegex = /[a-zA-Z 1-9]{1,}/g;
let iranyitoRegex = /^[A-Z1-9]{1,}$/g;
let bankkartyaRegex = /^[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}$/g;
let kodRegex = /^[1-9]{3,3}$/g;
let kartyaNevRegex = / [a-zA-Z ]{1,}/g;

document.addEventListener('DOMContentLoaded', () => {
    console.log('content loaded');

    let nev = document.getElementById('nev') as HTMLInputElement;
    let orszag = document.getElementById('orszag') as HTMLInputElement;
    let varos = document.getElementById('varos') as HTMLInputElement;
    let utca = document.getElementById('utca') as HTMLInputElement;
    let iranyitoszam = document.getElementById('iranyitoszam') as HTMLInputElement;
    let bankkartyaszam = document.getElementById('bankkartyaszam') as HTMLInputElement;
    let kod = document.getElementById('kod') as HTMLInputElement;
    let kartyanev = document.getElementById('kartyanev') as HTMLInputElement;

    document.getElementById('fizetes')!.addEventListener('click', () => {
        let helyesAdatok = false;
        if (!nevRegex.test(nev.value)) {
            alert('Hibás felhasználónév');
            helyesAdatok=false;
            console.log('err');
        } else {
            helyesAdatok=true;
            console.log('helyes');
            
        }
    });
  
});