//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  Given('I go to losestudiantes professor screen', () => {
    browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-electrica-y-electronica/profesores/fernando-enrique-lozano-martinez');
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
     var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

  Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});
  Then('I expect account icon in header', () => {
    var accountButton = browser.element('button#cuenta');
});
When(/^I register with name (.*), last name(.*) and email (.*)$/ , (name, lastName, email) => {
  var cajaSignUp = browser.element('.cajaSignUp');
  cajaSignUp.element('input[name="nombre"]').click().keys(name);
  cajaSignUp.element('input[name="apellido"]').click().keys(lastName);
  cajaSignUp.element('input[name="correo"]').click().keys(email);
});
When('I set password {string}', password => {
  var cajaSignUp = browser.element('.cajaSignUp');
  cajaSignUp.element('input[name="password"]').click().keys("12345678");
});
When('I accept terms', () => {
  var cajaSignUp = browser.element('.cajaSignUp');
  cajaSignUp.element('input[name="acepta"]').click();
});
When('I submit', () => {
  var cajaSignUp = browser.element('.cajaSignUp');
  cajaSignUp.element('button[type="submit"]').click();
});
When(/^I select (.*) program named (.*)$/ , (type, name) => {
  var cajaSignUp = browser.element('.cajaSignUp');
  if(type=="master")
  {
    cajaSignUp.element('label=Estudio una maestria').element('input').click();
    browser.pause(2000);
  }
  cajaSignUp.element('select[name="idPrograma"]').selectByVisibleText(name);
});
Then('I expect signup error',() => {
  browser.waitForVisible('.sweet-alert h2', 5000);
});
Then('I expect {string} alert', (type) => {
var msg="";
if(type=="valid email")  msg="Ingresa un correo valido";
else if (type=="accept terms") msg="Debes aceptar los términos y condiciones";
var cajaSignUp = browser.element('.cajaSignUp');
var alertMessage=cajaSignUp.element("div=Debes aceptar los términos y condiciones");
});
When('I filter {string}', code => {
  browser.element('form.boxElement').element("input[name='id:"+code+"']").click();
});
Then('I expect {string} first in list', subject => {
  browser.pause(3000);
  expect(browser.element('.post').element('.sobreCalificacion label a').getText()).to.equal(subject);
});

});