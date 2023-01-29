import { useState } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import { MockSidebar as Sidebar } from './components/DashboardSidebar'
import { ReportsMenu } from './components/ReportsMenu'
import { NoReportsComponent } from './components/NoReportsComponent'
import { DataTable } from './components/DataTable'
import { TableSummary } from './components/DataTable/TableSummary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <div className="flex">
            <Sidebar />
            <div className='flex flex-col w-full'>
              <ReportsMenu />
              {false && <NoReportsComponent></NoReportsComponent>}
              {true && <DataTable />}
              {true && <TableSummary totalAmount='14,065 USD'></TableSummary>}
            </div>
        </div>
      </Layout>
      
    </div>
  )
}

export default App
