import './Login.css';

const Login = () => {
    return ( 
        <div className="App-body">
            <p>Login to access the full dashboard</p>
                <form onSubmit="">
                <label>Email:
                    <input
                    type="email"
                    name="email"
                    />
                </label>
                <br />
                <label>Password:
                    <input
                    type="password"
                    name="password"
                    />
                </label>
                <br />
                <button type="submit">OK</button>
            </form>
        </div>
     );
     
}
 
export default Login;
