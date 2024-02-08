import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPasswordPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home/finishconfirm', { replace: true });
    };

    return (
        <div className='p-8'>
            <p className="mb-4">パスワードを再設定いたします。<br />ユーザー名とメールをご入力の上、「送信」ボタンをクリックしてください。</p>

            <form onSubmit={handleSubmit} className="mb-4">
                <input id="username" type="text" name="username" placeholder="ユーザー名" size={18} maxLength={18} autoFocus={true} required className="w-full p-2 border rounded-md" />
                <input id="email" type="email" name="email" placeholder="メール" size={18} maxLength={60} required className="w-full mt-2 p-2 border rounded-md" />
                <button id="button" type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                    送信
                </button>
            </form>

            <button onClick={() => navigate('/')} className="text-blue-500 hover:underline focus:outline-none">ログイン画面に戻る</button>
        </div>
    );
}
export default ResetPasswordPage;