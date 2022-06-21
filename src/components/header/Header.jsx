import React from 'react'
import "./header.css"
import TypeAnimation from 'react-type-animation'

const Header = () => {

  return (
    <header id='header'>
      <div className='screen'>
        <TypeAnimation
          cursor={false}
          sequence={['Starting...', 500, 'Loading...']}
          wrapper="h3"
        />
        <TypeAnimation cursor={false} sequence={['', 2000, '.']} wrapper='h3' />
        <TypeAnimation cursor={false} sequence={['', 2500, '.']} wrapper='h3' />
        <TypeAnimation cursor={false} sequence={['', 2750, '.']} wrapper='h3' />
        <TypeAnimation
          cursor={false}
          sequence={['', 3000, 'Hello!']}
          wrapper="h3"
        />
        <TypeAnimation
          cursor={false}
          sequence={['', 4000, 'Name: Marcos Cardoso']}
          wrapper="h3"
        />
        <TypeAnimation
          cursor={false}
          sequence={['', 5500, 'Age: 18']}
          wrapper="h3"
        />
        <span className='typing'></span>
        <button><a href="#about"><h3>Continuar</h3></a></button>
      </div>
    </header>
  );
}

export default Header