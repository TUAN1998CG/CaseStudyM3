import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Redux/accountAction";
import {useNavigate} from "react-router-dom";
import {checkLogin} from "../../Services/accountService";
import {toast} from "react-toastify";


function LoginComponent() {
    const account = useSelector(state => state.user.account);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleLogin = async () => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        const loginInfo = {
            username: username,
            password: password
        }
        // const account= await checkLogin(loginInfo);
        let isLoginSucces= await dispatch(login(loginInfo));
        if(isLoginSucces){
            toast.success("Đăng nhập thành công")
            navigate("/list")
        }else{
            toast.error("Đăng nhập thất bại")
        }

    }
    return (
        // <form action="">
        //     <h3>Login</h3>
        //     <div>
        //         <label>Username</label>
        //         <input ref={usernameRef} type="text" name={'username'}/>
        //     </div>
        //     <div>
        //         <label>Password</label>
        //         <input ref={passwordRef} type="text" name={'password'}/>
        //     </div>
        //     <div>
        //         <button onClick={handleLogin} type={'button'}>Login</button>
        //     </div>
        // </form>
    <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" aria-describedby="emailHelp"
                   placeholder="Enter user" ref={usernameRef} name="username" />
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} name="password" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
    </form>
    )
}

export default LoginComponent;