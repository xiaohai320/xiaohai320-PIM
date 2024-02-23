import Cookies from 'js-cookie';
export function setCookie(name, value, expires = 7) {
    Cookies.set(name, value, { expires });
}

export function getCookie(name) {
    return Cookies.get(name);
}

export function deleteCookie(name) {
    Cookies.remove(name);
}