import React, { useState } from 'react'
import './TwitterFollowCard.css'

export default function TwitterFollowCard({ userName, name="unknown", isFollowing=false, formatUserName, elementFollow, initialIsFollowingUser=false }) {
  const imageSrc = `https://unavatar.io/${userName}`
  const addAt = formatUserName(userName)

  const [follow, setFollow] = useState(initialIsFollowingUser)
  
  const hadleClick =()=>{
    setFollow(!follow)
  }

  const textButton = follow ? 'Siguiendo':'Seguir'
  const buttonClassName= follow ? 'button-siguiendo':'button-seguir'

  return (
    <article className='conteiner-followCard'>
      <header>
        <img
          src={imageSrc}           //Evalua la exprecion
          alt='avatar-midudev'
        /> 
        <section>
          <strong>{name}</strong>
          <div>
            <span>{addAt}</span>
            {isFollowing && elementFollow}            
          </div>

        </section>
      </header>
     
      <aside>
        <button 
          className={buttonClassName}
          onClick={hadleClick}
        >
          <span className='tw-text-follow'>{ textButton}</span>
          <span className='tw-stop-follow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
