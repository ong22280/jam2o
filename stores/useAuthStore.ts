import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      user: {
        name: "",
        email: "",
      },
    };
  },
  getters: {
    isLogin: (state) => {
      return state.token !== "";
    },
    
  },


  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(name: string, email: string) {
      this.user.name = name;
      this.user.email = email;
    },
    clear() {
      this.token = "";
      this.user.name = "";
      this.user.email = "";
    }
  },
  persist: true,
});

// store/auth.js
// import { defineStore } from 'pinia';
// import axios from 'axios';

// export const useAuthStore = defineStore({
//   id: 'auth',
//   state: () => ({
//     user: null,
//     token: null,
//   }),
//   actions: {
//     async login({ email, password }: { email: string; password: string }) {
//       try {
//         const response = await axios.post('http://localhost/api/auth/login', 
//           { email, password }
//         );
//         this.user = response.data.user;
//         this.token = response.data.token;
//         axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
//       } catch (error) {
//         console.error('Login failed:', error);
//         throw error;
//       }
//     },
//     logout() {
//       this.user = null;
//       this.token = null;
//       delete axios.defaults.headers.common['Authorization'];
//     },
//   },
// });
