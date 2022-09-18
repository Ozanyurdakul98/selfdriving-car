class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    //private method for it to not exceed this scope
    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {
    //or write document.onkeydown = (event) => {...}
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
      //Output entire object into console in table format
      console.table(this);
    });

    //For knowing when a key is released
    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
      //Output entire object into console in table format
      console.table(this);
      console.log("this");
    };
  }
}
