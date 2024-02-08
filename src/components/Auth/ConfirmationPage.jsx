import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/', { replace: true });
    };

    return (
        <div className='p-10'>
            <p> パスワードをリセットするための手順を記載したメールを送信しました。<br />メールを確認し、指示に従ってパスワードをリセットしてください。</p>
            <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={handleSubmit}>
                OK
            </button>
        </div>
    );
}
export default ConfirmationPage;