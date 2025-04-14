import AsyncStorage from '@react-native-async-storage/async-storage';

class Auth {
  public isAuthenticated: boolean = false; // Default to false
  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    try {
      await this.checkIfAuthenticated();
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  }

  public async checkIfAuthenticated(): Promise<void> {
    try {
      const token: string | null = await AsyncStorage.getItem('token');
      this.isAuthenticated = token !== null;
    } catch (error) {
      console.error('Error retrieving token:', error);
      this.isAuthenticated = false;
    }
  }

  public async setToken(token: string): Promise<void> {
    await AsyncStorage.setItem('token', token);
    this.isAuthenticated = true;
  }

  public async logOut(): Promise<void> {
    await AsyncStorage.removeItem('token');
  }
}

const auth = new Auth();
export default auth;
