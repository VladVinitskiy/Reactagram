import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';


ReactDOM.render(<App/>,document.getElementById('root'));




















// ReactDOM.render(<BrowserRouter>
//     <API>
//         <Switch>
//             <Route exact path='/' component={Home}/>
//             <Route path='/contacts' component={Contacts}/>
//             <Route exact path='/posts' component={Posts}/>
//             <Route path='/posts/:id' component={Post}/>
//         </Switch>
//     </API>
// </BrowserRouter>,document.getElementById('root'));


















// let Greeting = (props)=>{
//   const isLoggedIn = props.isLoggedIn;
//
//   if(isLoggedIn)
//       return <UserGreeting/>;
//   else
//       return<GuestGreeting/>
// };
//
// let UserGreeting = (props)=>{
//     return <h1>Welcome Back!</h1>
// };
//
// let GuestGreeting = (props)=>{
//     return(<h2>Please Sign up</h2>)
// };
//
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }
//
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }
//
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//         this.state = {isLoggedIn: false}
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true})
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false})
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )