var App = (function() {
  App = function(data) {
      this.name = data.name;
  };

  App.prototype = {

      run: function() {
          // INIT
          var myEmail = "alsmith@cpisecurity.com";
          var secretKey = "1234567890";


          // PROCESS
          var encrypted = CryptoJS.AES.encrypt(myEmail, secretKey);
          var decrypted = CryptoJS.AES.decrypt(encrypted, secretKey);
          document.getElementById("demo0").innerHTML = myEmail;
          document.getElementById("demo1").innerHTML = encrypted;
          document.getElementById("demo2").innerHTML = decrypted;
          document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
      },
  };

  return App;
})();

var app = new App({
  name: "Encryptor Tool",
});

app.run();