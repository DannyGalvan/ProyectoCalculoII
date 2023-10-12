

export const useLocalStorage = (key:string) => {
  const storage = window.localStorage;

    const get = () => {
        const item = storage.getItem(key);
        const response : number[] = item ? JSON.parse(item) : [];
        return response;
    };

    const set = (value:number) => {
        const storedValue = get();
        const existValue = storedValue.find((item) => item === value);
        const newValue = !existValue ? [...storedValue, value] : storedValue;
        storage.setItem(key, JSON.stringify(newValue));
    }

    const remove = () => {
        storage.removeItem(key);
    }

    return {
        get,
        set,
        remove,
    }
}


