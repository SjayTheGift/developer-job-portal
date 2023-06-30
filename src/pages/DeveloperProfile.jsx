import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const DeveloperProfile = () => {
    const { id } = useParams();

    const [developers, setDevelopers] = useState([])
    const fetchSingleUserData = () => {

        fetch(`http://127.0.0.1:8000/api/developers/${id}/`)
          .then(response => { 
            return response.json()
          })
          .then(data => {
            console.log(data)
            setDevelopers(data)
          })
      }

    useEffect(() => {
        fetchSingleUserData()
    }, [])

  return (
    <section className='h-screen py-16'>
      <div className="grid md:grid-cols-3 gap-4 px-2 md:px-12 py-8">
        <div className="md:col-span-2 md:px-10 md:py-2">
            <div className="flex flex-col items-center pb-10 px-4 pt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white ">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" alt="Bonnie image"/>
                <span className='text-center'>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{developers.first_name} {developers.last_name} </h5>
                    <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{developers.job_title}</p>
                </span>
            </div>

            <div className="flex flex-col mt-3 pb-10 px-4 pt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white ">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">About</h5>
                <div>
                    <p className="text-1xl">
                    {developers.bio}
                    </p>
                </div>
            </div>

            <div className="flex flex-col mt-3 pb-10 px-4 pt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white ">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Skills</h5>
                <div className="flex flex-wrap">
                    
                { developers.skills?.map((skill) => (
                    <p className="mr-2 mt-2 rounded border-l-emerald-100 border py-2 px-2" key={skill.id}>{skill.skill_name}</p>
                ))}
                    
                    {/* // <p className="mr-2 mt-2 rounded border-l-emerald-100 border py-2 px-2">Python Developer</p>
                    // <p className="mr-2 mt-2 rounded border-l-emerald-100 border py-2 px-2">Python Developer</p>
                    // <p className="mr-2 mt-2 rounded border-l-emerald-100 border py-2 px-2">Python Developer</p>
                    // <p className="mr-2 mt-2 rounded border-l-emerald-100 border py-2 px-2">Python Developer</p>
                    // <p className="mr-2 mt-2 rounded border-l-emerald-100 border py-2 px-2">Python Developer</p>
                    // <p className="mr-2 mt-2 rounded border-l-emerald-100 border py-2 px-2">Python Developer</p> */}
                </div>
            </div>

            <div className="flex flex-col mt-3 pb-10 px-4 pt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white ">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Experiences</h5>
                
                { developers.experiences?.map((experience) => (
                    <div className="flex flex-col my-4" key={experience.id}>
                        <span className="mr-2 mt-2 font-light">{experience.start_year} - {experience.end_year}</span>
                        <p className="my-2 mt-2 ">
                            <span className="font-bold">{experience.company}  -</span> {experience.job_title}
                        </p>

                        <p className="text-1xl">
                            {experience.description}
                        </p>
                        <p className="text-1xl">
                            Tech Stack: {experience.tech}
                        </p>
                    </div>
                ))}
                
                
                
                
                
                
            </div>

            <div className="flex flex-col mt-3 pb-10 px-4 pt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white ">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Education</h5>


                { developers.educations?.map((education) => (
                    <div className="flex flex-col my-4" key={education.id}>
                        <span className="mr-2 mt-2 font-light">{education.start_year} {"<->"} {education.end_year}</span>
                        <p className="my-2 mt-2 ">
                            <span className="font-bold">{education.university} -</span> Course
                        </p>
                    </div>
                ))}

                
            </div>

        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white px-10 py-2">07</div>
     </div>
    </section>
  )
}

export default DeveloperProfile
