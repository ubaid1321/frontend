import { useState } from "react";



const Login = () => {
  const [state, setState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Submitted", { email, password, name });
  };

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmit}>
      <div className='flex flex-col gap-3 m-auto items p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>Please {state === "Sign Up" ? "signup" : "login"} to book an appointment</p>

        {state === "Sign Up" && (
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          className='bg-primary text-white w-full py-2 rounded-md text-base'
          disabled={!email || !password || (state === "Sign Up" && !name)}
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary cursor-pointer underline'>Login here</span></p>
        ) : (
          <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary cursor-pointer underline'>Click here</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;