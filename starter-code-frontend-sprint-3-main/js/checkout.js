// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    // Validamos los campos de input text

    /*

- El nom i cognoms han de contenir només lletres.
- El telèfon ha de contenir només números.
- La contrasenya ha d'incloure números i lletres.
- L'email ha de tenir format d'email.
Quan l'usuari introdueixi un camp que no compleixi les condicions anteriors, l'input s'ha de ressaltar en vermell i mostrar unmissatge en la part inferior a manera de feedback a l'usuari, perquè sàpiga com rectifi car.*/




    let isValid = false;

    // El input que queremos validar
    const fname1 = document.forms['form']['fname'];
    const lname1 = document.forms['form']['lname'];
    const password1 = document.forms['form']['password'];
    const address1 = document.forms['form']['address'];
    const mail1 = document.forms['form']['mail'];
    const phone1 = document.forms['form']['phone'];

    // El tamaño maximo y minimo para nuestro input
    const maximo = 35;
    const minimo = 3;

    // El pattern que vamos a comprobar
    const patternLetra = new RegExp('^[A-Z]+$', 'i');
    const patternNumero = new RegExp('[0-9]+');

    // Primera validacion, si input esta vacio entonces no es valido
    if (!fname1.value) {
        isValid = false;
    } else {
        // Segunda validacion, si input es mayor que 35
        if ((fname1.value.length > maximo) && (fname1.value.length < minimo)) {
            isValid = false;
        } else {
            // Tercera validacion, si input contiene caracteres diferentes a los permitidos
            if (!patternLetra.test(fname1.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                isValid = false;
            } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                isValid = true;
            }
        }
    }

    //Ahora coloreamos el borde de nuestro input
    if (!isValid) {
        // rojo: no es valido
        fname1.style.borderColor = 'red';
        // mostramos mensaje
        errorName.hidden = false;
    } else {
        // verde: si es valido
        fname1.style.borderColor = 'palegreen';
        // ocultamos mensaje;
        errorName.hidden = true;
    }

    // devolvemos el valor de isValid
    return isValid;
}

// Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
function verificar() {
    const valido = validate();
    if (!valido) {
        alert('El campo no es válido.');
    } else {
        alert('El campo es válido');
    }
}