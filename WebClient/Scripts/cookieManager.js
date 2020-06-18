const existCookie = (name) => {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(name + '=')))
        return true;
    else
        return false;
}

const addCookie = (name, value) => {
    if (!existCookie(name)) {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}`;
    }
}

const removeCookie = (name) => {
    if (!existCookie(name)) {
        const date = new Date(1970,1,1);
        document.cookie = `${name}=; expires=${date.toUTCString()}`;
    }
}

const getCookieValue = (name) => {
    if (!existCookie(name)) 
        return null;
    else
        return document.cookie.split('; ').find(row => row.startsWith('name')).split('=')[1];
}

