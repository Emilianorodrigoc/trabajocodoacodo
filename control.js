var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

const regusu = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const regclave = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

form.onsubmit = function(e) {
 if (!regusu.test(fname.value)&& !regclave.test(lname.value)) {
 e.preventDefault();
 alert('Completá todos los campos correctamente')
 }

}
