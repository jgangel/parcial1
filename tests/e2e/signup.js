var assert = require('assert');

describe('Failed sign up because of registered email', function() {
    it('Visits los estudiantes and fails at signup', function() {
      browser.url('https://losestudiantes.co');
      browser.click('button=Cerrar');
      browser.waitForVisible('button=Ingresar', 5000);
      browser.click('button=Ingresar');

      var cajaSignUp = browser.element('.cajaSignUp');
      browser.waitForEnabled('input[name="nombre"]',1000); 
      cajaSignUp.element('input[name="nombre"]').click().keys("Jesus");
      cajaSignUp.element('input[name="apellido"]').click().keys("Angel");
      cajaSignUp.element('input[name="correo"]').click().keys("jg.angel10@uniandes.edu.co");
      cajaSignUp.element('input[type="checkbox"]').click();
      cajaSignUp.element('select[name="idPrograma"]').selectByValue("77");
      cajaSignUp.element('input[name="password"]').click().keys("12345678");
      cajaSignUp.element('input[name="acepta"]').click();
      cajaSignUp.element('button[type="submit"]').click();
      browser.waitForVisible('.sweet-alert h2', 5000);

      var alertText = browser.element('.sweet-alert h2').getText();
      expect(alertText).toBe('Ocurrió un error activando tu cuenta');

      });

      it('Failed sign up because of terms and conditions', function() {
        browser.url('https://losestudiantes.co');
        browser.click('button=Ingresar');
  
        browser.waitForEnabled('input[name="nombre"]',1000);
        var cajaSignUp = browser.element('.cajaSignUp');
        cajaSignUp.element('input[name="nombre"]').click().keys("Jesus");
        cajaSignUp.element('input[name="apellido"]').click().keys("Angel");
        cajaSignUp.element('input[name="correo"]').click().keys("jg.angel10@uniandes.edu.co");
        cajaSignUp.element('input[type="checkbox"]').click();
        cajaSignUp.element('select[name="idPrograma"]').selectByValue("77");
        cajaSignUp.element('input[name="password"]').click().keys("12345678");
        cajaSignUp.element('button[type="submit"]').click();
  
        browser.waitForExist('.alert',1000);
        var alertText = cajaSignUp.element('.alert').getText();
        expect(alertText).toBe('Debes aceptar los términos y condiciones');
        
        });

        it('Failed sign up because email is not valid', function() {
            browser.url('https://losestudiantes.co');
            browser.click('button=Ingresar');
      
            var cajaSignUp = browser.element('.cajaSignUp');
            cajaSignUp.element('input[name="nombre"]').click().keys("Jesus");
            cajaSignUp.element('input[name="apellido"]').click().keys("Angel");
            cajaSignUp.element('input[name="correo"]').click().keys("jg.angel10");
            cajaSignUp.element('input[name="nombre"]').click();
      

            browser.waitForExist('.alert',1000);
            var alertText = cajaSignUp.element('.alert').getText();
            expect(alertText).toBe('Ingresa un correo valido');
      
            });
        
})
