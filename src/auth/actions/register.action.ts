import {tesloApi} from "@/api/teslo.api.ts";
import type {AuthResponse} from "@/auth/interfaces/auth.response.ts";

export const registerAction = async (fullName: string,email: string, password: string): Promise<AuthResponse> => {
    try {
        const {data} = await tesloApi.post<AuthResponse>('/auth/register', {fullName, email, password});
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}