import React from 'react'
import SignUpForm from '../components/SignUpForm'

const SignUpCompany = () => {
    const accountType = 'company'
    const bgColor = 'dark:bg-emerald-600'
  return (
    <>  
        <SignUpForm accountType={accountType} bgColor={bgColor}/>
    </>
  )
}

export default SignUpCompany