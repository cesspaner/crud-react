import React, { useState } from "react";
import {Title, Text , TabList, Tab, ColGrid, Card} from '@tremor/react'
import CharDonut from "./CharDonut";
import CrudS from "./CrudS";


const DashboardBase =()=>{
    const [selectedView, setselectedView]= useState(1)
    return(
       <main className='bg-slate-200 p-6 sm-:p-10'>
          <Title>Dashboard</Title>
          <Text>Ejemplo de Dashboard con Tremor y React</Text>
          <TabList defaultValue={selectedView}handleSelect={value => setselectedView(value)} marginTop="mt-6">
             <Tab value={1} text="Principal"/>
             <Tab value={2} text="Detalles"/>
          </TabList>
          {
            selectedView === 1 ? (
            <>
            <CharDonut/>
            </>
            ):(
              <>
              <CrudS/>
              </>
            )
          }
       </main>
    )
}
export default DashboardBase