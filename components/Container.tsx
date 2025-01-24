import React from 'react'

type Props = {
  children: React.ReactNode;
  customStyling?: string; 
}

function Container({children, customStyling}: Props) {
  return (
    <div className={`p-3 md:p-0 w-full md:w-[720px] lg:w-[940px] xl:w-[1120px] 2xl:w-[1320px] h-full flex items-center mx-auto ${customStyling}`}>
      {children}
    </div>
  )
}

export default Container