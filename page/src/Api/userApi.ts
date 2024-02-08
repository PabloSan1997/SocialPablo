import { apiConfig } from "./config";

const userApi = `${apiConfig.url}/api/v1/user`;

export async function loginUser(login: LoginInterface): Promise<LoginRespose> {
    const ft = await fetch(`${userApi}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    });
    const data = await ft.json();
    if (!ft.ok) {
        const error = data as BoomError;
        throw error.message;
    }
    return data;
}