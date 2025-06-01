import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

// ✅ Create context
const AuthContext = createContext(); 

// ✅ Create provider component
function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  // ✅ Simulated login function
  function login(email, password) {
    try {
      // 🛑 This is a placeholder – no real authentication
      // Replace with: userService.authenticate(email, password);

      setIsAuth(true);
      setUserEmail(email);

      // ✅ Simulated log message instead of crashing import
      console.log(`[Login] Simulated login by ${email}`);

      // 🛑 Disabled until historyService is implemented
      /*
      import('../service/historyService').then(({ default: historyService }) => {
        historyService.addHistory(email, 'login');
      });
      */

      // ✅ Redirect after login
      navigate('/dashboard/intro');

      // ✅ Show success alert
      Swal.fire({
        title: 'Success',
        text: 'Login is successful',
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        title: 'Invalid',
        text: error.message,
        icon: 'error',
      });
    }
  }

  // ✅ Logout function
  function logout() {
    setIsAuth(false);
    setUserEmail(null);

    Swal.fire({
      title: 'Success',
      text: 'Logout successful',
      icon: 'success',
    });
  }

  // ✅ Simulated register function
  function register(email, password) {
    try {
      // 🛑 Replace with real userService.addUser(email, password);
      setIsAuth(true);

      navigate('/dashboard/intro');

      Swal.fire({
        title: 'Success',
        text: 'Registration is successful',
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        title: 'Invalid',
        text: error.message,
        icon: 'error',
      });
    }
  }

  // ✅ Provide values to context consumers
  return (
    <AuthContext.Provider value={{ login, logout, register, isAuth, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Named export for provider, default export for context
export { AuthProvider };
export default AuthContext;
