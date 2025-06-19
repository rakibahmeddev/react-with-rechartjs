import './App.css'
import AreaGraph from './assets/components/AreaGraph/AreaGraph'
import LineChart from './assets/components/LineChart/LineChart'

function App() {
  return (
    <div className='bg-purple-200 px-16 py-10'>
      <h1 className='text-center text-5xl py-6'>Rechart js</h1>
      <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
        <LineChart></LineChart>
      <AreaGraph></AreaGraph>
      </div>
    </div>
  )
}

export default App
