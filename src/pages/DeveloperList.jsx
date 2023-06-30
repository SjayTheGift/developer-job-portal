import DeveloperCard from "./DeveloperCard"

const DeveloperList = ({users}) => {

  return (
    <section className='h-screen py-16'>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 py-8 ">
            {users.map((user) =>
            <div key={user.id}>
             <DeveloperCard 
                url={user.url}
                bio={user.bio}
                first_name={user.first_name}
                last_name={user.last_name}
                job_title={user.job_title}
             />
             </div>
            )}
            
            {/* < DeveloperCard/>
            < DeveloperCard/>
            < DeveloperCard/>
            < DeveloperCard/>
            < DeveloperCard/> */}
        </div>
    </section>
  )
}

export default DeveloperList
