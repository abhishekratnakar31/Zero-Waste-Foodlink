import React, { createContext, useState, useEffect, useContext } from 'react';
import { login as loginApi, register as registerApi, getMe } from '../api/auth';

interface User {
    _id: string;
    name: string;
    email: string;
    role: 'NGO' | 'RESTAURANT';
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (userData: any) => Promise<void>;
    register: (userData: any) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userData = await getMe();
                    setUser(userData);
                } catch (err) {
                    localStorage.removeItem('token');
                    setUser(null);
                }
            }
            setLoading(false);
        };

        checkLoggedIn();
    }, []);

    const login = async (userData: any) => {
        setLoading(true);
        setError(null);
        try {
            const data = await loginApi(userData);
            localStorage.setItem('token', data.token);
            setUser(data);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData: any) => {
        setLoading(true);
        setError(null);
        try {
            const data = await registerApi(userData);
            localStorage.setItem('token', data.token);
            setUser(data);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Registration failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
