import { Link } from 'react-router-dom';

const DeveloperCard = ({url, bio, first_name, last_name, job_title}) => {
  return (
    <>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">     
            <div className="flex flex-col items-center pb-10 px-4 pt-4">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" alt="Bonnie image"/>
                <span className='text-center'>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{first_name} {last_name}</h5>
                    <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{job_title}</p>
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{bio}</span>
                <Link to={url}  className="w-full rounded-md mt-4 py-2 px-4 text-center bg-emerald-600 hover:bg-emerald-800 ease-in duration-300 hover:shadow-md text-white">View Profile</Link>
            </div>
        </div>
    </>
  )
}

export default DeveloperCard