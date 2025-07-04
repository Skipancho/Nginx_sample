const BASE_URL = 'https://localhost/api';

interface HelloResponse {
    message: string;
}

export async function getHello(): Promise<HelloResponse> {
    const response = await fetch(`${BASE_URL}/v1/hello`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch hello');
    }

    return response.json();
}