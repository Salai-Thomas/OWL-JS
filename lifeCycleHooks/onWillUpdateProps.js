const {Component,mount,xml,useState,onWillUpdateProps} = owl;

class Result extends Component{
    state = useState({name:"",lastName:""});
    static props = {name:String};

    setup(){
        this.state.name = this.props.name;
        onWillUpdateProps((nextProps)=>{
            this.state.lastName = this.state.name
            this.state.name = nextProps.name
        });
    }

    static template = xml`
        <div>
        <p> Last Updated Name : <t t-esc='state.lastName'/> </p>
        <p> Current Name : <t t-esc='state.name'/></p>
        </div>
    `
}

class Form extends Component{
    state = useState({inputName:"",name:"Guest"});
    static components = {Result};
    static template = xml`
        <input type='text' t-model='state.inputName' placeholder='Enter Name'/>
        <button t-on-click="_updateName">Update Name</button>
        <Result name='state.name'/>
    `
    _updateName(){
        this.state.name = this.state.inputName || "Guest"
    }
    
}

mount(Form,document.body);