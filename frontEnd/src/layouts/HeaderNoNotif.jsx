import React from 'react'
import Logo from '../components/Logo'
import ViewCartNoNotif from '../components/ViewCartNoNotif'

export default function HeaderNoNotif({idUser}) {
  return (
    <header id="header">
      <div className="py-4 lg:mx-[13%] flex justify-between items-center">
        <div className="flex items-center"> 
          <Logo/>
        </div>
        <ViewCartNoNotif idUser={idUser}/>
      </div>
      <hr className='border-t-2 border-gray-200'></hr>
    </header>
  )
}
