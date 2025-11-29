import client from './client';

export const createDonation = async (formData: FormData) => {
    const response = await client.post('/donations', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const getDonations = async () => {
    const response = await client.get('/donations');
    return response.data;
};

export const getNearbyDonations = async (lat: number, lon: number, radius: number = 5) => {
    const response = await client.get(`/donations/nearby?lat=${lat}&lon=${lon}&radius=${radius}`);
    return response.data;
};

export const claimDonation = async (id: string) => {
    const response = await client.post(`/donations/${id}/claim`);
    return response.data;
};

export const analyzeImage = async (formData: FormData) => {
    const response = await client.post('/donations/analyze', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};
