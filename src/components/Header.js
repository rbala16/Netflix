import React from 'react'
import { LOGO_IMG } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  // const user = useSelector((store) => store.user)
  // const dispatch = useDispatch();
  
  return (
    <div className='absolute px-14 py-2 bg-gradient-to-b from-black z-10 '>
            <img className='w-44' src={LOGO_IMG}
                alt="logo"
            />
        </div>
  )
}

export default Header
