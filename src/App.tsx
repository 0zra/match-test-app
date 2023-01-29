import { useState } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import { MockSidebar as Sidebar } from './components/DashboardSidebar'
import { ReportsMenu } from './components/ReportsMenu'
import { NoReportsComponent } from './components/NoReportsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <div className="flex">
            <Sidebar />
            <div className='flex flex-col w-full'>
              <ReportsMenu />
              {true && <NoReportsComponent></NoReportsComponent>}
            </div>
        </div>
      </Layout>
      
    </div>
  )
}

export default App
