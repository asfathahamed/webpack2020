import "./hello-world-button.less";

class HelloWorldButton {
  btnText: string;
  paraText: string;
  render() {
    const body = document.querySelector("body");
    const button = document.createElement("button");
    this.btnText = "Hello World";
    this.paraText = "You clicked 'Hello World' button";
    button.innerHTML = this.btnText;
    button.classList.add("hello-world-button");
    button.onclick = () => {
      const para = document.createElement("p");
      para.innerHTML = this.paraText;
      para.classList.add("hello-world-text");
      body.appendChild(para);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
