import { useMemo, useState } from 'react'
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
    reportData,
    isReportShown
  } = useAppContext();

  const totalAmount = useMemo(()=> reportData.reduce((acc, item) => acc+item.amount, 0), [reportData])

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
                {isReportShown && <ReportData />}
              </div>}
              
              {!isReportShown && <TableSummary totalAmount={totalAmount+' USD'}></TableSummary>}
            </div>
        </div>
      </Layout>
      
    </div>
  )
}

export default App
