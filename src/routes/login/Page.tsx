function Login() {

    return <>
        <div>
            <h2>Login </h2>
            <p>Aşagıdan giriş yapabilirsiniz</p>
            <form>
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