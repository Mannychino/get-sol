// @ts-nocheck
import { useState, useEffect, createContext, useContext } from 'react';
import { createUser } from '../utils/api';

interface AuthContextType {
  user: any;
  loading: boolean;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if there's a user in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (email: string, password: string) => {
    try {
      const { userId } = await createUser({ email, password });
      const newUser = { userId, email };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error: any) {
      console.error('Signup failed', error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    // Mock login
    const mockUser = { userId: 'user-123', email };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // const value: AuthContextType = {
  //   user,
  //   loading,
  //   signup,
  //   login,
  //   logout,
  // };

  // return (
  //   <AuthContext.Provider value={value}>
  //     {!loading && children}
  //   </AuthContext.Provider>
  // );
};

// export const useAuth = (): AuthContextType => {
//   return useContext(AuthContext) as AuthContextType;
// };
