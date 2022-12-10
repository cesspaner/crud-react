import {Tab,TabList, Card} from '@tremor/react'
import React, { useState } from "react"
import {HandThumbUpIcon} from '@heroicons/react/24/solid'
import 'bootstrap/dist/css/bootstrap.css';

const TabListBase = () => {
    const [selectedView, setselectedView] = useState(1)
    return(
       <> 
       <TabList 
       handleSelect={ value => setselectedView(value)}
       defaultValue={selectedView} 
       marginTop="mt-8"
       >
          <Tab value={1} text="Pestaña 1" icon ={HandThumbUpIcon}/>
          <Tab value={2} text="Pestaña 2"/>
       </TabList>
       
            { selectedView === 1 ? (
                <Card>
                    <div className='h-28 bg-emerald-300'/>
                </Card>
                ):(
                <Card>
                    <div className='h-28 bg-blue-700'/>
                </Card>
                )
            }
       </>
    ) 
}

export default TabListBase