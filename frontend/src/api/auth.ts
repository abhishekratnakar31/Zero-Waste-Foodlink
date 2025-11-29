import client from './client';

export const register = async (userData: any) => {
    const response = await client.post('/auth/register', userData);
    return response.data;
};

export const login = async (userData: any) => {
    const response = await client.post('/auth/login', userData);
    return response.data;
};

export const getMe = async () => {
    const response = await client.get('/auth/me');
    return response.data;
};
