import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


// Replace this with your actual service
// import userService from '../service/userService';


const AuthContext = createContext(); 


function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();


  function login(email, password) {
    try {
      // Fake login for now (replace with real userService)
      // userService.authenticate(email, password);
      setIsAuth(true);
      setUserEmail(email);


      // Log login history
      import('../service/historyService').then(({ default: historyService }) => {
        historyService.addHistory(email, 'login');
      });


      navigate('/dashboard/intro');
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


  function logout() {
    setIsAuth(false);
    setUserEmail(null);
    Swal.fire({
      title: 'Success',
      text: 'Logout successful',
      icon: 'success',
    });
  }


  function register(email, password) {
    try {
      // userService.addUser(email, password);
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


  return (
    <AuthContext.Provider value={{ login, logout, register, isAuth, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
}


export { AuthProvider };         // ✅ Named export
export default AuthContext;      // ✅ Default export


