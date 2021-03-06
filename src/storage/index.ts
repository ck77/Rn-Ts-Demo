import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {

    customerNumber: string = '';

    async get(key: string): Promise<string> {
        return AsyncStorage.getItem(key)
            .then((data) => {
                data = data || '';
                return JSON.parse(data);
            });
    }

    async set(key: string, value: string): Promise<void> {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    async delete(key: string): Promise<void> {
        return AsyncStorage.removeItem(key);
    }
}

const localstorage = new LocalStorage();

export default localstorage;