import { useState } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import { MockSidebar as Sidebar } from './components/DashboardSidebar'
import { ReportsMenu } from './components/ReportsMenu'
import { NoReportsComponent } from './components/NoReportsComponent'
import { DataTable } from './components/DataTable'
import { TableSummary } from './components/DataTable/TableSummary'
import { ReportData } from './components/ReportData'

import { useAppContext } from './context/appContext'


function App() {
  const {
    reportData
  } = useAppContext();

  return (
    <div className="App">
      <Layout>
        <div className="flex">
            <Sidebar />
            <div className='flex flex-col w-full'>
              <ReportsMenu />
              {reportData.length===0 ? <NoReportsComponent></NoReportsComponent>: 
              
              <div className="flex max-w-[1024px]">
                {true && <DataTable />}
                {false && <ReportData />}
              </div>}
              
              {false && <TableSummary totalAmount='14,065 USD'></TableSummary>}
            </div>
        </div>
      </Layout>
      
    </div>
  )
}

export default App
