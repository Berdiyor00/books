import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImHome } from "react-icons/im";
const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    family: '',
    email: '',
    password: '',
  });

  const [charCount, setCharCount] = useState(0);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
    setCharCount(value.length);

    // Password validation
    if (field === 'password') {
      if (value.length < 6) {
        setPasswordError('Password must be at least 6-8 characters long.');
      } else {
        setPasswordError('');
      }
    }

    // Email format validation
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Invalid email format.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any errors before submitting
    if (passwordError || emailError) {
      console.log('Form has errors, cannot submit.');
      return;
    }

    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      family: '',
      email: '',
      password: '',
    });
    setCharCount(0);
    setPasswordError('');
    setEmailError('');
  };

  const inputColor = charCount < 6 ? 'red' : 'green';

  return (
    <>
    
    <div className={`bg-${inputColor}-500 w-full flex justify-center bg-orange-300 items-center h-[100vh] mt-0`}>
      <div className="container  ">
        <NavLink to='/home'>

      <button className=' absolute top-[70px] text-[28px] left-[20px] text-[#fff]' >
<ImHome/>
</button>
        </NavLink>
        <div className="flex justify-center items-center ">
          <div className="md:w-[500px] h-[600px] pt-[100px]">
            <form onSubmit={handleSubmit}>
              <label htmlFor="" className='flex flex-col items-center gap-4'>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`md:w-[400px] w-[300px] border-2 focus:outline-none p-2 rounded ${charCount >= 6 ? 'border-green-500' : 'border-red-500'}`}
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={(e) => handleChange(e, 'name')}
                />
                <input
                  type="text"
                  name="family"
                  id="family"
                  className={`md:w-[400px] w-[300px] border-2 focus:outline-none p-2 rounded ${charCount >= 6 ? 'border-green-500' : 'border-red-500'}`}
                  placeholder='Your Family'
                  value={formData.family}
                  onChange={(e) => handleChange(e, 'family')}
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`md:w-[400px] w-[300px] border-2 focus:outline-none p-2 rounded ${emailError ? 'border-red-500' : 'border-green-500'}`}
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={(e) => handleChange(e, 'email')}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`md:w-[400px] w-[300px] border-2 focus:outline-none p-2 rounded ${passwordError ? 'border-red-500' : 'border-green-500'}`}
                  placeholder='Your Password'
                  value={formData.password}
                  onChange={(e) => handleChange(e, 'password')}
                />
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <NavLink to='/profel'>
                <button className="w-[230px] button flex gap-[70px] justify-center" disabled={charCount < 6 || emailError || passwordError}>
<div className="svg-wrapper-1">
<div className="svg-wrapper">
<svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   width="24"
                   height="24"
                 >
<path fill="none" d="M0 0h24v24H0z"></path>
<path
                     fill="currentColor"
                     d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                   ></path>
</svg>
</div>
</div>
<span>Register</span>
</button>
                </NavLink>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;