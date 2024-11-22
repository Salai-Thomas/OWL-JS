const {Component,mount,xml,useState} = owl;
class Child extends Component {
    static template = xml`<div><t t-esc="props.a"/><t t-esc="props.b"/></div>`;
  }
  
  class Parent extends Component {
    static template = xml`<div><Child a="state.a" b="'string'"/></div>`;
    static components = { Child };
    state = useState({ a: "fromparent" });
  }

  mount(Parent,document.body);