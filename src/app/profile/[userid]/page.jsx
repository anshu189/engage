import React from 'react'

const UserProfile = ({params}) => {
  return (
    <div className="text-white text-4xl min-h-screen flex flex-col gap-4 items-center justify-center text-center">
        <div>Welcome to your profile page!</div>
        <span className='bg-emerald-500 p-2 rounded-md'>{params.userid}</span>
    </div>
  )
}

export default UserProfile