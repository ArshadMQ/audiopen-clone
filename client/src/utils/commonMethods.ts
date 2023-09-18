

export const setLocalStorage = (key: string, value: string)=>{
    return localStorage.setItem(key, value);
}

export const getLocalStorage = (key: string)=>{
    return localStorage.getItem(key);
}