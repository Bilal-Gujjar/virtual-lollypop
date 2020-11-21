import React from "react"
import Lolly from '../component/Lolly'
import Header from '../component/Header'

//import Lolly from '../svg/lolly-image.svg'
export default function Home() {
  return (
    <div >
      <Header />
      <div className="listLollies">
        <div><Lolly fillLollyTop="green" fillLollyMiddle="red" fillLollyBottom="yellow" /></div>
        <div><Lolly fillLollyTop="gray" fillLollyMiddle="orange" fillLollyBottom="black" /></div>
      </div>
    </div>

  )
}
