function validarEmail(email) {
  const re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  return re.test(email);
}

function validar() {
  let email   = document.getElementById('email')
  let pass    = document.getElementById('pass')
  let e_verif = document.getElementById('email_verif')
  let p_verif = document.getElementById('pass_verif')

  let rta = true
  
  if (!email.value) {    
    email.classList.add('is-invalid')
    email.focus()
    e_verif.textContent = 'Ingrese su usuario'
    rta = false
  }
  else if(!validarEmail(email.value)){
    email.classList.add('is-invalid')
    e_verif.textContent = 'Usuario incorrecto. (Ej: nombre@dominio.com)'
    email.focus()
    rta = false
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  }

  if (!pass.value) {
    pass.classList.add('is-invalid')
    p_verif.textContent = 'Ingrese su contraseña'
    pass.focus()
    rta = false
  } else {
    pass.classList.remove('is-invalid')
    pass.classList.add('is-valid')
  } 

  return rta
}