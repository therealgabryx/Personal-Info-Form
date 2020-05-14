function validateForm() {
  var rtn = validateFirstName();
  rtn &= validateLastName();
  rtn &= validateMatrixNumber();
  rtn &= validateContactInfo();
  return rtn;
}

function validateFirstName() {
  var firstName = document.forms['genericForm']['firstName'].value;
  if (firstName == '') {
    notifyMissing('campo nome vuoto');
    return false;
  }
  return true;
}

function validateLastName() {
  var lastName = document.forms['genericForm']['lastName'].value;
  if (lastName == '') {
    notifyMissing('campo cognome vuoto');
    return false;
  }
  return true;
}

function validateMatrixNumber() {
  var matrixNumber = document.forms['genericForm']['matrixNumber'].value;
  if (matrixNumber == '') {
    notifyMissing('campo matrice vuoto');
    return false;
  } else if (isNaN(matrixNumber)) {
    notifyMissing('matrice non è numerica');
    return false;
  }
  return true;
}

function validateContactInfo() {
  var mailInfo = document.forms['genericForm']['email'].value;
  var phoneNumber = document.forms['genericForm']['phoneNumber'].value;
  if (mailInfo == '' || phoneNumber == '') {
    notifyMissing('inserisci telefono o mail');
    return false;
  }
  return true;
}

function notifyMissing(text) {
  alert(text);
}
