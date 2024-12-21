import { FormEvent } from "react";

function Login() {

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();
        const formEl = e.target as HTMLFormElement;

        const formData = new FormData(formEl);



    }

    return <>
        <div>
            <h2>Login </h2>
            <p>Aşagıdan Kayıt yapabilirsiniz</p>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Kullanıcı adı</label>
                    <input type="text" id="username" placeholder="Kullanıcı adı" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Şifreniz</label>
                    <input type="password" id="password" placeholder="Şifreniz" name="password" />
                </div>
                <div>
                    <label htmlFor="firstname">İsim</label>
                    <input type="text" id="firstname" placeholder="İsim" name="firstname" />
                </div>
                <div>
                    <label htmlFor="lastname">Soyisim</label>
                    <input type="text" id="lastname" placeholder="Soyisim" name="lastname" />
                </div>

                <button>Kayıt ol</button>
            </form>
        </div>
    </>
}

export default Login;