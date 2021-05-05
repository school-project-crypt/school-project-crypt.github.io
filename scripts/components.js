let app = {
  components: [
    {
      run: function() {
        this.sc = "all";
        this.ti = "navbar";
        this.code = "test";
      },
    },
  ],
  run: () => {
    for (let i = 0; i < app.components.length; i++) {
      app.components[i].run();
      switch (app.components[i].sc) {
        case "all":
          document.body.innerHTML += app.components[i].code;
        break;

        // window.location.URL
      }
    }
  },
};app.run();
