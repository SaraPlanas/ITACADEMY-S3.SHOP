const fname1 = document.forms['form']['fname'];
const lname1 = document.forms['form']['lname'];
const password1 = document.forms['form']['password'];
const address1 = document.forms['form']['address'];
const mail1 = document.forms['form']['mail'];
const phone1 = document.forms['form']['phone'];
const minimo = 3;
const maximo = 8;
const patternLetra = new RegExp('^[A-Z]+$', 'i');
const patternNumero = new RegExp('[0-9]+');
const patternContraseña = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
const patternDireccion = new RegExp('[A-Za-z0-9]{3,40}');
const patternEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

// Exercise 8
function validate() {
    let isValid = true;
    if (!mail1.value) {
        isValid = false;
        mail1.style.borderColor = 'red';
        document.getElementById("feedback-email").style.display = "";
    } else {
        if (mail1.value.length < minimo) {
            isValid = false;
            mail1.style.borderColor = 'red';
        } else {
            if (!patternEmail.test(mail1.value)) {
                isValid = false;
                mail1.style.borderColor = 'red';
            } else {
                mail1.style.borderColor = 'palegreen';
                document.getElementById("feedback-email").style.display = "none";
            }
        }
    }



    if (!fname1.value) {
        isValid = false;
        fname1.style.borderColor = 'red';
        document.getElementById("feedback-fname").style.display = "";
    } else {
        if (fname1.value.length < minimo) {
            isValid = false;
            fname1.style.borderColor = 'red';
        } else {
            if (!patternLetra.test(fname1.value)) {
                isValid = false;
                fname1.style.borderColor = 'red';
            } else {
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
        if (lname1.value.length < minimo) {
            isValid = false;
            lname1.style.borderColor = 'red';
        } else {
            if (!patternLetra.test(lname1.value)) {
                isValid = false;
                lname1.style.borderColor = 'red';
            } else {
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
        if (phone1.value.length < minimo) {
            isValid = false;
            phone1.style.borderColor = 'red';
        } else {
            if (!patternNumero.test(phone1.value)) {
                isValid = false;
                phone1.style.borderColor = 'red';
            } else {
                phone1.style.borderColor = 'palegreen';
                document.getElementById("feedback-phone").style.display = "none";
            }
        }
    }

    if (!address1.value) {
        isValid = false;
        address1.style.borderColor = 'red';
        document.getElementById("feedback-address").style.display = "";
    } else {
        if (address1.value.length < minimo) {
            isValid = false;
            address1.style.borderColor = 'red';
        } else {
            if (!patternDireccion.test(address1.value)) {
                isValid = false;
                address1.style.borderColor = 'red';
            } else {
                address1.style.borderColor = 'palegreen';
                document.getElementById("feedback-address").style.display = "none";
            }
        }
    }

    if (!password1.value) {
        isValid = false;
        password1.style.borderColor = 'red';
        document.getElementById("feedback-password").style.display = "";
    } else {
        if ((password1.value.length < minimo) && (password1.value.length > maximo)) {
            isValid = false;
            password1.style.borderColor = 'red';
        } else {
            if (!patternContraseña.test(password1.value)) {
                isValid = false;
                password1.style.borderColor = 'red';
            } else {
                password1.style.borderColor = 'palegreen';
                document.getElementById("feedback-password").style.display = "none";
            }
        }
    }

    return isValid;
}

function verificar() {
    const valido = validate();
    if (!valido) {
        alert('Hay un campo erroneo, verifiquelo');
    } else {
        alert('Todos los campos son correctos, enviando...');
    }
}