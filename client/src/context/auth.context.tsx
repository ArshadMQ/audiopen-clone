import { useContext, createContext, useState } from 'react'

type authContextType = {
    user: any;
    updateUserDetails: (data: Object) => void;
};

const authContextDefaultValues: authContextType = {
    user: {
        role: null,
    },
    updateUserDetails: (data) => {data},
};

const AuthContext = createContext(authContextDefaultValues)

export function useAuth() {
    return useContext(AuthContext)
}


const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<Object>({})

    function updateUserDetails(data = {}) {
        setUser(data)
    }

    const value = {
        user,
        updateUserDetails
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider
