import { FormEvent } from "react";

interface LoginPayload {
    username: string;
    password: string
}

function Login() {

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        const formEl = e.target as HTMLFormElement;

        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData) as unknown as LoginPayload;

        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const responseJson = await response.json();
        console.log(responseJson);

    }




    return <>
        <div>
            <h2>Login </h2>
            <p>Aşagıdan giriş yapabilirsiniz</p>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Kullanıcı adı</label>
                    <input type="text" id="username" placeholder="Kullanıcı adı" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Şifreniz</label>
                    <input type="password" id="password" placeholder="Şifreniz" name="password" />
                </div>
                <button>Giriş yap</button>
            </form>
        </div>
    </>
}

export default Login;