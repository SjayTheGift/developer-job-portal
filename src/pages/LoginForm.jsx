import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        ))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <section className='bg-gray-50 dark:bg-gray-900 h-screen py-16'>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login User
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" value={email} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={onChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <button type="submit" className="w-full rounded-md py-2 px-4 bg-emerald-600 hover:bg-emerald-800 ease-in duration-300 hover:shadow-md text-white">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? 
                            <span className='flex'>
                                <Link to="/register/company" className="font-medium text-primary-600 hover:underline dark:text-primary-500 mr-1">Sign-up Company</Link> 
                                <Link to="/register/developer" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign-up Developr</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginForm