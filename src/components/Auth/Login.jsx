import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import NatsukiLogo from "../../assets/images/icon1.svg";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === '111777') {
            navigate('/home', { replace: true });
            // navigate('/test', { replace: true }); // 
        } else {
            alert('パスワードが間違っています！');
        }
    };

    const forgotPasswordHandler = () => {
        navigate('/home/forgotpassword', { replace: true });
    }

    return (
        <main className="flex flex-col justify-between items-center gap-8" >
            <div className="flex flex-col items-center gap-4">
                <div className='flex gap-12 items-center my-8'>
                    <h1 className="text-white drop-shadow-md text-9xl">NATSUKI</h1>
                    <img src={NatsukiLogo} alt="NatsukiLogo" className="w-40 h-40" />
                </div>
                <p>ユーザー名、パスワードをご入力の上、「ログイン」ボタンをクリックしてください。</p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-2">
                <input className="border p-2 rounded" id="username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="ユーザー名" size={18} maxLength={18} autoFocus={true} required />
                <input className="border p-2 rounded" id="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="パスワード" size={18} maxLength={60} required />
                <button className="bg-blue-500 text-white p-2 rounded" id="login_button" type="submit" >ログイン</button>
            </form>
            <div>
                <button className="text-blue-500" onClick={forgotPasswordHandler}>パスワード忘れた場合</button>
            </div>
        </main>

    );
}
export default Login;