const TokenKey = 'AccessToken'

function getToken(): string | null {
    return localStorage.getItem(TokenKey)
}

function setToken(token: string | null) {
    if (token == null) {
        localStorage.removeItem(TokenKey)
    } else {
        localStorage.setItem(TokenKey, token)
    }
}

const Storage = {
    getToken,
    setToken
}

export default Storage