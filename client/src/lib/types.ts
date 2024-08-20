export interface UserData {
    email: string;
    password: string;
    username?: string;
  }
  
  export interface ApiResponse {
    message: string;
    user: any;
  }