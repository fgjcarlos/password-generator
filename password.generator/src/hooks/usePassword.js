import { useState } from "react"

export const usePassword = () => {
    const [password, setPasword] = useState('Click generate password')
    
    const generatePassword = () => {
        
        return 'adasfsdf6asdf'
    }
    

    return [password, setPasword, generatePassword]
}