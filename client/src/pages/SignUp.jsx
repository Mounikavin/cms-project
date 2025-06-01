import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [country, setCountry] = useState('');
  const [hobby, setHobby] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await register({ email, password, username, department, country, hobby });
      navigate('/dashboard'); // ✅ Redirect after successful registration
    } catch (err) {
      console.error('Registration failed:', err);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600')",
          filter: 'blur(1px) brightness(0.7)',
          zIndex: 0,
        }}
        aria-hidden="true"
      ></div>

      <div className="absolute inset-0 bg-[#885133]/40" style={{ zIndex: 1 }}></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-lg w-full mx-4 space-y-6"
        style={{ boxShadow: '0 20px 40px rgba(136, 81, 51, 0.4)' }}
      >
        <h2 className="text-4xl font-extrabold text-center text-[#885133]" style={{ letterSpacing: '0.03em' }}>
          Create Account
        </h2>

        {[
          { label: 'Username', type: 'text', value: username, setter: setUsername, placeholder: 'Enter your username' },
          { label: 'Email', type: 'email', value: email, setter: setEmail, placeholder: 'Enter your email' },
          { label: 'Department', type: 'text', value: department, setter: setDepartment, placeholder: 'Enter your department' },
          { label: 'Country', type: 'text', value: country, setter: setCountry, placeholder: 'Enter your country' },
          { label: 'Hobby', type: 'text', value: hobby, setter: setHobby, placeholder: 'Enter your hobby' },
          { label: 'Password', type: 'password', value: password, setter: setPassword, placeholder: 'Enter your password' },
        ].map(({ label, type, value, setter, placeholder }) => (
          <input
            key={label}
            type={type}
            value={value}
            onChange={e => setter(e.target.value)}
            required
            placeholder={placeholder}
            className="w-full px-6 py-4 rounded-xl border border-[#d62300] placeholder-[#885133]/70 text-[#885133] text-base font-medium focus:outline-none focus:ring-4 focus:ring-[#d62300]/60 transition"
            aria-label={label}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
          />
        ))}

        <button
          type="submit"
          className="w-full py-4 rounded-full font-bold text-white text-lg shadow-lg transition-all duration-300"
          style={{ backgroundColor: '#d62300' }}
          onMouseEnter={e => {
            e.target.style.backgroundColor = '#885133';
            e.target.style.boxShadow = '0 10px 20px rgba(136, 81, 51, 0.6)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.target.style.backgroundColor = '#d62300';
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Create New Account
        </button>
      </form>
    </div>
  );
}
