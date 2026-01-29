import { create } from 'zustand'
import type { User } from "@/interfaces/user.interface.ts";
import { loginAction } from '../actions/login.action';
import { checkAuthAction } from '../actions/check-auth.action';
import { registerAction } from '../actions/register.action';
import { FocusScreen } from '../../../../../04-hooks-app/src/04useRef/FocusScreen';

type AuthState = {
    // properties
    user: User | null;
    token: string | null;
    authStatus: 'authenticated' | 'unauthenticated' | 'checking';
    // getters
    isAdmin: () => boolean;
    // actions
    login: (email: string, password: string) => Promise<boolean>;
    register: (fullName: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
    checkAuthStatus: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({

    // properties
    user: null,
    token: null,
    authStatus: 'checking',

    //getters
    isAdmin: () => {
        const { user } = get();
        return user?.roles.includes('admin') || false;
    },

    // actions
    login: async (email: string, password: string) => {
        console.log({ email, password });

        try {
            const data = await loginAction(email, password);
            localStorage.setItem('token', data.token)
            set({ user: data.user, token: data.token, authStatus: 'authenticated' });
            return true;
        } catch (error) {
            localStorage.removeItem('token');
            set({ user: null, token: null, authStatus: 'unauthenticated' });
            return false;
        }
    },

    register: async (fullName: string, email: string, password: string) => {
        console.log({ fullName, email, password });

        try {
            const data = await registerAction(fullName,email, password);
            localStorage.setItem('token', data.token)
            set({ user: data.user, token: data.token, authStatus: 'authenticated' });
            return true;
        } catch (error) {
            localStorage.removeItem('token');
            set({ user: null, token: null, authStatus: 'unauthenticated' });
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null, authStatus: 'unauthenticated' });
    },

    checkAuthStatus: async () => {
        try {
            const {user, token} = await checkAuthAction();
            set({ user, token, authStatus: 'authenticated' });
            return true;
        } catch (error) {
            localStorage.removeItem('token');
            set({ user: null, token: null, authStatus: 'unauthenticated' });
            return false;
        }
    }

}))