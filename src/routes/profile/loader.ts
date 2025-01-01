export async function profileLoader() {
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch('http://localhost:3000/api/auth/me', {
        headers: {
            Authorization: "Bearer" + accessToken,
        },
    })


    if (!accessToken) {
        throw new Error('Access token not found')
    }

    const accessTokenPayload = JSON.parse(atob(accessToken!.split('.')[1]));
    console.log(accessTokenPayload)



}
