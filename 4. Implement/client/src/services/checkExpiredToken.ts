import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;  // Unix timestamp of expiration
  [key: string]: any;  // Other properties can be added based on your JWT structure
}

export const isTokenExpired = (token: string): boolean => {
    try {
        // Decode the token
        const decoded = jwtDecode<JwtPayload>(token);
        
        // Get the expiration time
        const expTime = decoded.exp;
        
        // Get the current time in seconds
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        
        // Return true if the token is expired
        return expTime < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true; // If decoding fails, assume the token is expired or invalid
    }
};
