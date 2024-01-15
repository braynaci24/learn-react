import { useState } from "react"

function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);

  return (
    <div>
        <nav>
            {children.map((tab, index) => <button onClick={() => setActive(index)} className={active === index ? 'bg-green-500' : 'bg-gray-300'} key={index}>{tab.props.title}</button>)}
        </nav>
        <div>{children[active]}</div>
    </div>
  )
}


// ÖRNEK COMPONENT İÇİNDE COMPONENT YAZDIM.
Tab.Panel = function({children}){
    return(
        <div>
            {children}
        </div>
    )
}

export default Tab