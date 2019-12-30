
class App extends React.Component {
    render() {
        return (
            <div className="ui center aligned container">

            </div>
        );
    }
}

class MainForm extends React.Component {
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        line1Address: '',
        line2Address: '',
        city: '',
        state: '',
        phoneNumber: '',
        creditCardNumber: '',
        expirationDate: '',
        CVV: '',
        zip:''
    };
    render() {
        return (
            <h1></h1>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
