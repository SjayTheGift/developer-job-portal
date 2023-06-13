import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState('bg-gray-100');
  const [shadow, setShadow] = useState('#090a1a');
  const [showModal, setShowModal] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`bg-gray-100 border-b-2 border-gray-300 w-full h-auto fixed top-0 left-0 z-[1] transition-all duration-500 `}>
      <div className='w-[92%] mx-auto flex md:flex md:justify-between items-center px-4 py-4 relative'>
        <div>
            <Link to='/' className='text-emerald-600 font-semibold text-2xl cursor-pointer'>FindDev</Link>
        </div>
        <div onClick={() => setNav(!nav)} className='text-2xl absolute right-8 cursor-pointer md:hidden'>
          {nav ? <AiOutlineClose />  :<AiOutlineMenu /> }
        </div>
        <div onClick={() => setNav(!nav)} >
          <ul className={`flex flex-col text-xl md:flex-row md:items-center md:pb-0 pb-12 
            absolute  md:static bg-gray-100 md:z-auto z-[-1] top-0 left-0 w-full md:w-auto md:pl-0 pl-9 
            transition-all duration-500 ease-in-out ${nav ? 'top-[109%] opacity-100': 'top-[-1000%] opacity-0 md:opacity-100'}`}>
            <li className='ml-0 md:ml-8 text-md font-semibold hover:text-emerald-600 duration-500 md:my-0 my-3' onClick={() => 
                {
                    setNav(!nav)
                    setShowModal(true)
                }
                } >
                <button href="#" className='rounded-md py-2 px-4 bg-emerald-600 hover:scale-110 ease-in duration-300 text-white' >Sign up</button>
            </li>
            <li className='md:ml-8 text-md font-semibold hover:text-emerald-600 duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>


      {showModal ? (
        <>
          <div className="flex justify-center items-center md:items-start fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl font-semibold">Sign up as a developer or company member</h3>
                  <button
                    className="bg-transparent border-0 text-black ml-6 font-bold text-xl"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <Link
                    className="rounded-md text-sm cursor-pointer px-6 py-3 bg-emerald-600 hover:scale-110 ease-in duration-300 text-white font-bold"
                    type="button"
                    onClick={() => setShowModal(false)}
                    to="/register/company"
                  >
                    Hire developers
                  </Link>
                  <Link
                    className="rounded-md text-sm cursor-pointer px-6 py-3 bg-emerald-600 hover:scale-110 ease-in duration-300 text-white font-bold"
                    type="button"
                    onClick={() => setShowModal(false)}
                    to="/register/developer"
                  >
                    Find a developer job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

    </div>
  );
};

export default Navbar;