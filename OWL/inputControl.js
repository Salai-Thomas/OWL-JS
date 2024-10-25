class Form extends owl.Component{
    state = owl.useState({ text: "" });
  _updateInputValue(event) {
    this.state.text = event.target.value;
  }

  static template = owl.xml`
    <div>
        <input t-on-input="_updateInputValue" />
        <span t-esc="state.text" />
    </div>
  `
}

owl.mount(Form,document.body);

