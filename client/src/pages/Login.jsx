import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);


  const navigate = useNavigate();


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard'); // Navigate to dashboard page
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  }


  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[2px] opacity-90"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
        aria-hidden="true"
      ></div>


      <div className="absolute inset-0 bg-[#885133]/75" aria-hidden="true"></div>


      <form
        onSubmit={handleSubmit}
        className="relative bg-[#f0e6d7]/95 backdrop-blur-sm rounded-xl shadow-2xl p-12 w-full max-w-md z-10"
      >
        <h2
          className="text-4xl font-extrabold mb-10 text-center"
          style={{ color: '#885133' }}
        >
          Festival & Event CMS Login
        </h2>


        <div className="mb-6">
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-5 py-4 rounded-lg border border-[#d62300] placeholder-[#885133]/70 focus:outline-none focus:ring-2 focus:ring-[#d62300]/90 transition text-lg text-[#885133]"
            style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
          />
        </div>


        <div className="mb-8">
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full px-5 py-4 rounded-lg border border-[#d62300] placeholder-[#885133]/70 focus:outline-none focus:ring-2 focus:ring-[#d62300]/90 transition text-lg text-[#885133]"
            style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
          />
        </div>


        <button
          type="submit"
          className="w-full py-4 rounded-full font-bold text-white shadow-md transition-colors text-lg bg-[#d62300] hover:bg-[#885133] hover:shadow-[0_8px_15px_rgba(136,81,51,0.6)]"
        >
          Sign In
        </button>
      </form>
    </div>




  );
}


