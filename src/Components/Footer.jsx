import React from 'react'
import TextType from './TextType'

const Footer = () => {
    return (
        <div className=' w-full h-[50vh] p-5 relative '>
            <TextType
                text={["Supercharge your AI journey."]}
                typingSpeed={75}
                pauseDuration={1500}
                loop={true}
                startOnVisible={true}
                showCursor={true}
                cursorCharacter="|"
                className=' text-5xl font-poppins uppercase gradient-text '
                cursorClassName=' bg-gradient-to-t from-primay to-white  '
            />
            {/* <div className=' w-[300px] h-[300px] rounded-full z-0 bg-primay blur-2xl absolute -bottom-0 right-0 '></div> */}
        </div>
    )
}

export default Footer