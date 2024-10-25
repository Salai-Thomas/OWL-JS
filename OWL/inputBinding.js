class Form extends owl.Component{
  state = owl.useState({ text: "" });

  static template = owl.xml`
    <div>
        <input t-model="state.text" />
        <span t-esc="state.text" />
    </div>
  `
}

owl.mount(Form,document.body);

