"use strict";
let nevRegex = /[aA-zZ]{1,}/;
let orszagRegex = /[a-zA-Z]{1,}/;
let varosRegex = /[a-zA-Z]{1,}/g;
let utcaRegex = /[a-zA-Z 1-9]{1,}/g;
let iranyitoRegex = /^[A-Z1-9]{1,}$/g;
let bankkartyaRegex = /^[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}$/g;
let kodRegex = /^[1-9]{3,3}$/g;
let kartyaNevRegex = /[a-zA-Z ]{1,}/g;
document.addEventListener('DOMContentLoaded', () => {
    console.log('content loaded');
    let nev = document.getElementById('nev');
    let orszag = document.getElementById('orszag');
    let varos = document.getElementById('varos');
    let utca = document.getElementById('utca');
    let iranyitoszam = document.getElementById('iranyitoszam');
    let bankkartyaszam = document.getElementById('bankkartyaszam');
    let kod = document.getElementById('kod');
    let kartyanev = document.getElementById('kartyanev');
    document.getElementById('fizetes').addEventListener('click', () => {
        let helyesAdatok = false;
        if (!nevRegex.test(nev.value)) {
            document.getElementById("rosszNev").textContent = "Hibás név";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszNev").textContent = "✅";
            helyesAdatok = true;
        }
        if (!orszagRegex.test(orszag.value)) {
            document.getElementById("rosszOrszag").textContent = "Hibás ország";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszOrszag").textContent = "✅";
            helyesAdatok = true;
        }
        if (!varosRegex.test(varos.value)) {
            document.getElementById("rosszVaros").textContent = "Hibás város";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszVaros").textContent = "✅";
            helyesAdatok = true;
        }
        if (!utcaRegex.test(utca.value)) {
            document.getElementById("rosszUtca").textContent = "Hibás cím";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszUtca").textContent = "✅";
        }
        if (!iranyitoRegex.test(iranyitoszam.value)) {
            document.getElementById("rosszIranyito").textContent = "Hibás irányítószám";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszIranyito").textContent = "✅";
            helyesAdatok = true;
        }
        if (!bankkartyaRegex.test(bankkartyaszam.value)) {
            document.getElementById("rosszKartya").textContent = "Hibás bankkártya szám";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszKartya").textContent = "✅";
            helyesAdatok = true;
        }
        if (!kodRegex.test(kod.value)) {
            document.getElementById("rosszKod").textContent = "Hibás biztonsági kód";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszKod").textContent = "✅";
            helyesAdatok = true;
        }
        if (!kartyaNevRegex.test(kartyanev.value)) {
            document.getElementById("rosszKartyanev").textContent = "Hibás bankkártya név";
            helyesAdatok = false;
        }
        else {
            document.getElementById("rosszKartyanev").textContent = "✅";
            helyesAdatok = true;
        }
        if (helyesAdatok) {
            alert('A fizetés sikeres!');
        }
    });
});
