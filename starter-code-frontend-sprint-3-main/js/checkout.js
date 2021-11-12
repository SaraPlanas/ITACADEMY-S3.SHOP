// El input que queremos validar
const fname1 = document.forms['form']['fname'];
const lname1 = document.forms['form']['lname'];
const password1 = document.forms['form']['password'];
const address1 = document.forms['form']['address'];
const mail1 = document.forms['form']['mail'];
const phone1 = document.forms['form']['phone'];

// El tamaño maximo y minimo para nuestro input
const minimo = 3;
const maximo = 8;
// pattern a comprobar
const patternLetra = new RegExp('^[A-Z]+$', 'i');
const patternNumero = new RegExp('[0-9]+');
const patternContraseña = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
const patternDireccion = new RegExp('[A-Za-z0-9]{3,40}');
const patternEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);


// Exercise 8
function validate() {
    let isValid = true;
    // Validate fields entered by the user: name, phone, password, and email
    // Validamos los campos de input text

    /*
- El nom i cognoms han de contenir només lletres.
- El telèfon ha de contenir només números.
- La contrasenya ha d'incloure números i lletres.
- L'email ha de tenir format d'email.
Quan l'usuari introdueixi un camp que no compleixi les condicions anteriors, l'input s'ha de ressaltar en vermell i mostrar unmissatge en la part inferior a manera de feedback a l'usuari, perquè sàpiga com rectifi car.*/

    // Primera validacion, si input esta vacio entonces no es valido
    if (!mail1.value) {
        isValid = false;
        mail1.style.borderColor = 'red';
        document.getElementById("feedback-email").style.display = "";
    } else {

        // Segunda validacion, si input es mayor que 35
        if (mail1.value.length < minimo) {
            isValid = false;
            mail1.style.borderColor = 'red';
        } else {
            // Tercera validacion, si input contiene caracteres diferentes a los permitidos
            if (!patternEmail.test(mail1.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                isValid = false;
                mail1.style.borderColor = 'red';
            } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                mail1.style.borderColor = 'palegreen';
                document.getElementById("feedback-email").style.display = "none";

            }
        }
    }



    // Primera validacion, si input esta vacio entonces no es valido
    if (!fname1.value) {
        isValid = false;
        fname1.style.borderColor = 'red';
        document.getElementById("feedback-fname").style.display = "";
    } else {
        // Segunda validacion, si input es mayor que 35
        if (fname1.value.length < minimo) {
            isValid = false;
            fname1.style.borderColor = 'red';

        } else {
            // Tercera validacion, si input contiene caracteres diferentes a los permitidos
            if (!patternLetra.test(fname1.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                isValid = false;
                fname1.style.borderColor = 'red';
            } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                fname1.style.borderColor = 'palegreen';
                document.getElementById("feedback-fname").style.display = "none";

            }
        }
    }

    if (!lname1.value) {
        isValid = false;
        lname1.style.borderColor = 'red';
        document.getElementById("feedback-lname").style.display = "";

    } else {
        // Segunda validacion, si input es mayor que 35
        if (lname1.value.length < minimo) {
            isValid = false;
            lname1.style.borderColor = 'red';
        } else {
            // Tercera validacion, si input contiene caracteres diferentes a los permitidos
            if (!patternLetra.test(lname1.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                isValid = false;
                lname1.style.borderColor = 'red';
            } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                lname1.style.borderColor = 'palegreen';
                document.getElementById("feedback-lname").style.display = "none";

            }
        }
    }

    if (!phone1.value) {
        isValid = false;
        phone1.style.borderColor = 'red';
        document.getElementById("feedback-phone").style.display = "";

    } else {
        // Segunda validacion, si input es mayor que 35
        if (phone1.value.length < minimo) {
            isValid = false;
            phone1.style.borderColor = 'red';
        } else {
            // Tercera validacion, si input contiene caracteres diferentes a los permitidos
            if (!patternNumero.test(phone1.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                isValid = false;
                phone1.style.borderColor = 'red';
            } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                phone1.style.borderColor = 'palegreen';
                document.getElementById("feedback-phone").style.display = "none";

            }
        }
    }

    // Primera validacion, si input esta vacio entonces no es valido
    if (!address1.value) {
        isValid = false;
        address1.style.borderColor = 'red';
        document.getElementById("feedback-address").style.display = "";
    } else {
        // Segunda validacion, si input es mayor que 35
        if (address1.value.length < minimo) {
            isValid = false;
            address1.style.borderColor = 'red';
        } else {
            // Tercera validacion, si input contiene caracteres diferentes a los permitidos
            if (!patternDireccion.test(address1.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                isValid = false;
                address1.style.borderColor = 'red';
            } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                address1.style.borderColor = 'palegreen';
                document.getElementById("feedback-address").style.display = "none";
            }
        }
    }

    // Primera validacion, si input esta vacio entonces no es valido
    if (!password1.value) {
        isValid = false;
        password1.style.borderColor = 'red';
        document.getElementById("feedback-password").style.display = "";
    } else {
        // Segunda validacion, si input es mayor que 35
        if ((password1.value.length < minimo) && (password1.value.length > maximo)) {
            isValid = false;
            password1.style.borderColor = 'red';
        } else {
            // Tercera validacion, si input contiene caracteres diferentes a los permitidos
            if (!patternContraseña.test(password1.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                isValid = false;
                password1.style.borderColor = 'red';
            } else {
                // Si pasamos todas la validaciones anteriores, entonces el input es valido
                password1.style.borderColor = 'palegreen';
                document.getElementById("feedback-password").style.display = "none";

            }
        }
    }

    return isValid;
}
// Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
function verificar() {
    const valido = validate();
    if (!valido) {
        alert('Hay un campo erroneo, verifiquelo');
    } else {
        alert('Todos los campos son correctos, enviando...');
    }
}