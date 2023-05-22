import React from 'react'
import './LoginForm.css'
import backgroundVideo from "./Assets/bg.m4v";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maskStyle: {
                left: 512,
                right: 0
            }
        }

        this.container = React.createRef()
        // this.signUpBtn = React.createRef()

        this.onSignIn = this.onSignIn.bind(this)
        this.onSignUp = this.onSignUp.bind(this)

    }
    componentDidMount() {
        // mask was in the left
        // clip-path: inset(0px 512px 0 0);

        // mask was in the right
        // clip-path: inset(0px 0 0 512px);



        // this.interval = setInterval(() => {
        //     let numLeft = this.state.maskStyle.left + 1
        //     let numRight = this.state.maskStyle.right -1

        //     this.setState({ maskStyle: { left: numLeft, right: numRight } })
        // }, 1000000000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);

    }

    onSignUp() {
        this.container.current.classList.add("right-panel-active");
    }
    onSignIn() {
        debugger
        this.container.current.classList.remove("right-panel-active");
    }

    // MoveRight() {
    //     clearInterval(this.interval);

    //     let numLeft = 512
    //     let numRight = 0
    //     this.interval = setInterval(() => {
    //         if (numLeft <= 0) {
    //             clearInterval(this.interval);
    //             return
    //         }

    //         let seedLeft = 10;
    //         let seedRight = 10;
    //         if (numLeft > 400) {
    //             seedLeft = 10
    //             seedRight = 5
    //         } else {
    //             seedLeft = 5
    //             seedRight = 10
    //         }


    //         numLeft = numLeft - seedLeft
    //         numRight = numRight + seedRight


    //         this.setState({ maskStyle: { left: numLeft, right: numRight } })
    //     }, 20);
    // }
    // MoveLeft() {
    //     clearInterval(this.interval);

    //     let numLeft = 0
    //     let numRight = 512
    //     this.interval = setInterval(() => {

    //         if (numRight <= 0) {
    //             clearInterval(this.interval);
    //             return
    //         }

    //         numLeft = numLeft + 10
    //         numRight = numRight - 10

    //         this.setState({ maskStyle: { left: numLeft, right: numRight } })
    //     }, 20);
    // }

    render() {
        const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`
        // const clipValue =  `inset(0 200px 0 200px)`

        return (<>
            {/* <div className="extremcent" style={{	display: "flex",
	margin: "2em",
	position: "relative",
	height: "100",
	width: "100%",
	justifyContent: "center",
    zIndex: "222",
	alignItems: "center"}}> */}
            <div className="container" id="container" ref={this.container}>
           
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="lapsignh1">Create Account</h1>
                        <div className="social-container">
                            <a className="lapsign_a" href="#" className="social">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="lapsign_a" href="#" className="social">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a className="lapsign_a" href="#" className="social">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input className="lapsign_inp1" type="text" placeholder="Name" />
                        <input className="lapsign_inp1" type="email" placeholder="Email" />
                        <input className="lapsign_inp1" type="password" placeholder="Password" />
                        <button className="lapsign_inp1" onClick={this.onSignUp}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className="lapsignh1">Sign in</h1>
                        <div className="social-container">
                            <a className="lapsign_a"href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a className="lapsign_a" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a className="lapsign_a" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input className="lapsign_inp1" type="email" placeholder="Email" />
                        <input className="lapsign_inp1" type="password" placeholder="Password" />
                        <a className="lapsign_a" href="#">Forgot your password?</a>
                        <button onClick={this.onSignIn}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="lapsignh1">Welcome Back!</h1>
                            <p className="lapsign_a">To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={this.onSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="lapsignh1">Hello, Friend!</h1>
                            <p className="lapsign_p">Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={this.onSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div></>
        )
    }
}

export default LoginForm