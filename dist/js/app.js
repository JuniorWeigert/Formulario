function onlyNumber(e) {
  var key = window.event ? event.keyCode : e.which;
  if (key > 47 && key < 58) return true;
  else {
    if (key == 8 || key == 0) return true;
    else return false;
  }
}

function ValidForm(form) {
  let cpf = form.cpf.value;
  let cnpj = form.cnpj.value;
  let nome = form.nome.value;
  let phone = form.phone.value;
  let email = form.email.value;
  if (nome == "" || nome.length < 5 || nome == null) {
    alert("Nome Invalido. Favor utilizar um nome valido");
    form.nome.focus();
    return false;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("Email Invalido. Favor utilizar um email valido");
    form.email.focus();
    return false;
  }

  if (phone == "" || phone.length < 12) {
    alert("Telefone Invalido. Favor utilizar um telefone valido");
    form.phone.focus();
    return false;
  }
}

/* MASCARA PARA TELEFONE */

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function phone_mask(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

/* MASCARA PARA CPF */

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function cpf_mask(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca ponto entre o setimo e o oitava dígitos
  v = v.replace(/(\d{3})(\d)/, "$1-$2"); //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
  return v;
}

/* MASCARA PARA CNPJ */

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function cnpj_mask(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca ponto entre o setimo e o oitava dígitos
  v = v.replace(/(\d{3})(\d)/, "$1-$2"); //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
  v = v.replace(/(\d{4})(\d)/, "$1/$2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  return v;
}

window.onload = function() {
  phone.onkeyup = function() {
    mascara(this, phone_mask);
  };

  cpf.onkeyup = function() {
    mascara(this, cpf_mask);
  };

  cnpj.onkeyup = function() {
    mascara(this, cnpj_mask);
  };
};
