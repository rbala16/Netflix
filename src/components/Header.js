import React from 'react'
import { LOGO_IMG } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute px-14 py-2 bg-gradient-to-b from-black z-10 '>
            <img className='w-44' src={LOGO_IMG}
                alt="logo"
            />
        </div>
  )
}

export default Header
