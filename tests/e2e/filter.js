describe('Filters on professor', function() {
    it('Sets filters by subject on a professor page', function() {
      browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-electrica-y-electronica/profesores/fernando-enrique-lozano-martinez')
      browser.element('form.boxElement').element("input[name='id:IELE3200']").click();
      browser.pause(1000);
      expect(browser.element('.post').element('.sobreCalificacion label a').getText()).toBe('Electrónica Análoga');
      browser.element('form.boxElement').element("input[name='id:IELE3200']").click();
      browser.element('form.boxElement').element("input[name='id:IELE4011']").click();
      browser.pause(1000);
      expect(browser.element('.post').element('.sobreCalificacion label a').getText()).toBe('Optimización');
})
})