import AsyncStorage from '@react-native-async-storage/async-storage';


export const writeToAsyncStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        return error;
    }
};

export const readFromAsyncStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
        return null
    } catch (error) {
        return error;
    }
};