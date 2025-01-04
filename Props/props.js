const {Component,mount,xml,useState} = owl;

class Child extends Component{
    static template = xml`<div>
    <h5>This Is Child</h5>
    <t t-esc="props.a"/>
    <t t-esc="props.b"/>
    </div>`;
}

class Parent extends Component{
    static template = xml`<div>
    <h3>This Is Parent</h3>
    <Child a="state.a" b="'This is From Parent direct value'"/>
    </div>`;
    static components = { Child };
    state = useState({ a: "This is From Parent in usestate" });
}

mount(Parent,document.body);
