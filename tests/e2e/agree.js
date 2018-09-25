var assert = require('assert');

describe('Los estudiantes login', function() {
    //Login to be able to rate
    before(function(){
        browser.url('https://losestudiantes.co');
        browser.click('button=Ingresar');
  
        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');
  
        mailInput.click();
        mailInput.keys('jg.angel10@uniandes.edu.co');
  
        var passwordInput = cajaLogIn.element('input[name="password"]');
  
        passwordInput.click();
        passwordInput.keys('12345678');
  
        cajaLogIn.element('button=Ingresar').click();
      });

      it('should agree with someone opinion', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');
        
        browser.pause(500);
        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');
  
        mailInput.click();
        mailInput.keys('fake@uniandes.edu.co');
  
        var passwordInput = cajaLogIn.element('input[name="password"]');
  
        passwordInput.click();
        passwordInput.keys('12345678');
  
        cajaLogIn.element('button=Ingresar').click()

        browser.waitForExist('.alert',1000);
        var alertText = cajaLogIn.element('.alert').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
  
      });

      it('should visit los estudiantes and fail log in due to not valid email', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Ingresar');
  
        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');
  
        mailInput.click();
        mailInput.keys('fake');
  
        var passwordInput = cajaLogIn.element('input[name="password"]');
  
        passwordInput.click();
        passwordInput.keys('12345678');
  
        browser.waitForExist('.alert',1000);
        var alertText = cajaLogIn.element('.alert').getText();
        expect(alertText).toBe('Ingresa un correo valido');
  
      });
      
      it('should visit los estudiantes and log in successfully', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Ingresar');
  
        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');
  
        mailInput.click();
        mailInput.keys('jg.angel10@uniandes.edu.co');
  
        var passwordInput = cajaLogIn.element('input[name="password"]');
  
        passwordInput.click();
        passwordInput.keys('12345678');
  
        cajaLogIn.element('button=Ingresar').click();
  
        // Validate succesfull login, button#cuenta exists
        var accountButton = browser.element('button#cuenta')
  
      });
});