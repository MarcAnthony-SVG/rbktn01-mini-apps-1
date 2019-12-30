
class App extends React.Component {
    render() {
        return (
            <div className="ui center aligned container">
                <MainForm/>
            </div>
        );
    }
}

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }


    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    };

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    };

    render() {
        const {step} = this.state;
        const {name, email, password, line1Address, line2Address, city, state, phoneNumber, creditCardNumber, expirationDate, CVV, zip} = this.state;
        const values = {name, email, password, line1Address, line2Address, city, state, phoneNumber, creditCardNumber, expirationDate, CVV, zip};

        switch (step) {
            case 1:
                return <UserDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 2:
               return <PersonalDetails
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   handleChange = {this.handleChange}
                   values={values}
               />
            case 3:
                return <PaymentDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 4:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                />
            case 5:
                return <Success/>
        }

        return (
            <h1>sasa</h1>
        );
    }
}


class UserDetails extends React.Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values } = this.props;
        return (
            <form color="blue" className="ui form">
                <h1 className="ui centered">Enter user details</h1>
                <div className="field">
                  <label>Name</label>
                    <input
                        placeholder="Name"
                        onChange={this.props.handleChange('name')}
                        defaultValue={values.name}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder="Email"
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input
                        placeholder="Password"
                        onChange={this.props.handleChange('password')}
                        defaultValue={values.password}
                    />
                </div>
                <button
                    role="button"
                    className="ui button"
                    onClick={this.saveAndContinue}
                >
                    Save and Continue</button>
            </form>
        );
    }
}

class PersonalDetails extends React.Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values } = this.props;
        return (
            <form color="blue" className="ui form">
                <h1 className="ui centered">Enter Personal details</h1>
                <div className="field">
                    <label>line 1 Address</label>
                    <input
                        placeholder="line 1 Address"
                        onChange={this.props.handleChange('line1Address')}
                        defaultValue={values.line1Address}
                    />
                </div>
                <div className="field">
                    <label>line 2 Address</label>
                    <input
                        placeholder="line 2 Address"
                        onChange={this.props.handleChange('line2Address')}
                        defaultValue={values.line2Address}
                    />
                </div>
                <div className="field">
                    <label>city</label>
                    <input
                        placeholder="city"
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                    />
                </div>
                <div className="field">
                    <label>state</label>
                    <input
                        placeholder="state"
                        onChange={this.props.handleChange('state')}
                        defaultValue={values.state}
                    />
                </div>
                <div className="field">
                    <label>phoneNumber</label>
                    <input
                        placeholder="phoneNumber"
                        onChange={this.props.handleChange('phoneNumber')}
                        defaultValue={values.phoneNumber}
                    />
                </div>
                <button
                    role="button"
                    className="ui button"
                    onClick={this.back}
                >
                    Back
                </button>
                <button
                    role="button"
                    className="ui button"
                    onClick={this.saveAndContinue}
                >
                    Save and Continue
                </button>
            </form>
        );
    }
}

class PaymentDetails extends React.Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        // creditCardNumber: '',
        //     expirationDate: '',
        //     CVV: '',
        //     zip:''
        const { values } = this.props;
        return (
            <form color="blue" className="ui form">
                <h1 className="ui centered">Enter Payment details</h1>
                <div className="field">
                    <label>Credit Card Number</label>
                    <input
                        placeholder="Credit Card Number"
                        onChange={this.props.handleChange('creditCardNumber')}
                        defaultValue={values.creditCardNumber}
                    />
                </div>
                <div className="field">
                    <label>Expiration Date</label>
                    <input
                        placeholder="Expiration Date"
                        onChange={this.props.handleChange('expirationDate')}
                        defaultValue={values.expirationDate}
                    />
                </div>
                <div className="field">
                    <label>CVV</label>
                    <input
                        placeholder="CVV"
                        onChange={this.props.handleChange('CVV')}
                        defaultValue={values.CVV}
                    />
                </div>
                <div className="field">
                    <label>zip</label>
                    <input
                        placeholder="zip"
                        onChange={this.props.handleChange('zip')}
                        defaultValue={values.zip}
                    />
                </div>
                <button
                    role="button"
                    className="ui button"
                    onClick={this.back}
                >
                    Back
                </button>
                <button
                    role="button"
                    className="ui button"
                    onClick={this.saveAndContinue}
                >
                    Save and Continue
                </button>
            </form>
        );
    }
}

class Confirmation extends React.Component {
    saveAndContinue = (e) => {
        //const {name, email, password, line1Address, line2Address, city, state, phoneNumber, creditCardNumber, expirationDate, CVV, zip} = this.props.values;
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:6966/",
            data: this.props.values,
            dataType: "text",
            success: function(resultData) {
                console.log(resultData)
            }
        });
        this.props.nextStep();
        console.log(this.props)
    };

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values : {name, email, password, line1Address, line2Address, city, state, phoneNumber, creditCardNumber, expirationDate, CVV, zip}} = this.props;
        return (
            <div>
                <h1 className="ui centered">Confirm before submission:</h1>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="users icon"/>
                        <div className="content">name: {name}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="mail icon"/>
                        <div className="content">email: {email}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="user secret icon"/>
                        <div className="content">password: {password}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="address card icon"/>
                        <div className="content">Address 1: {line1Address}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="address card icon"/>
                        <div className="content">Address 2: {line2Address}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="globe icon"/>
                        <div className="content">City: {city}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="globe icon"/>
                        <div className="content">State: {state}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="phone icon"/>
                        <div className="content">Phone Number: {phoneNumber}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="credit card icon"/>
                        <div className="content">Credit Card: {creditCardNumber}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="credit card icon"/>
                        <div className="content">Expiration date: {expirationDate}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="credit card icon"/>
                        <div className="content">CVV: {CVV}</div>
                    </div>
                </div>
                <div role="list" className="ui list">
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="credit card icon"/>
                        <div className="content">ZIP: {zip}</div>
                    </div>
                </div>
                <button
                    role="button"
                    className="ui button"
                    onClick={this.back}
                >
                    Back
                </button>
                <button
                    role="button"
                    className="ui button"
                    onClick={this.saveAndContinue}
                >
                    Purchase
                </button>
            </div>
        );
    }
}

class Success extends React.Component {
    render() {
        return (
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
