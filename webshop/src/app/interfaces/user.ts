export interface User {
    id: string; 
    email: string; 
    password: string; 
    userRole: UserRole; 
}

export interface UserRole {
    id: string; 
    role: string; 
}

export interface UserLoginDto {
    username: string; 
    password: string; 
}

export interface UserResponseDto {
    id: string; 
    username:string; 
    userRoleId: string; 
}
