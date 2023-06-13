import React from 'react'
import SignUpForm from '../components/SignUpForm'

const SignUpDeveloper = () => {
    const accountType = 'developer'
    const bgColor = 'dark:bg-gray-900'
  return (
    <>
    <SignUpForm accountType={accountType} bgColor={bgColor}/>
    </>
  )
}

export default SignUpDeveloper