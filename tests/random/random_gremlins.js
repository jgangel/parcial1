function loadScript(callback) {
    var s = document.createElement('script');
    s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js';
    if (s.addEventListener) {
      s.addEventListener('load', callback, false);
    } else if (s.readyState) {
      s.onreadystatechange = callback;
    }
    document.body.appendChild(s);
  }
  
  function unleashGremlins(ttl, seed, callback) {
    function stop() {
      horde.stop();
      callback();
    }
    var horde = window.gremlins.createHorde();
    horde.seed(seed);
  
    horde.after(callback);
    window.onbeforeunload = stop;
    setTimeout(stop, ttl);
    horde.unleash();
  }
  
  describe('Monkey testing with gremlins ', function() {
  
    it('it should not raise any error', function() {
      browser.url('/');
      browser.click('button=Cerrar');
  
      var nargs=process.argv.length;
      gremlinsTime=nargs>3?process.argv[3]:60000;
      seed=nargs>4?process.argv[4]:189645463;
      browser.executeAsync(loadScript);
  
      browser.timeoutsAsyncScript(gremlinsTime*2);
      browser.executeAsync(unleashGremlins, gremlinsTime, seed);
    });
  
    afterAll(function() {
      browser.log('browser').value.forEach(function(log) {
        browser.logger.info(log.message.split(' ')[2]);
      });
    });
  
  });