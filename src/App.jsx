import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import TaskList from './components/TaskList'
import './App.css'
import { useState } from 'react'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'
function App() {
  const [tab,setTab] = useState('day')
  return (
    <main>
      <h1>
        TodoList
      </h1>
      <div className='bg-gray-600 text-white rounded max-w-[600px] m-auto '>
        <Header tab={tab} setTab={setTab}/>
        {
          tab=='day' && <>
        <Day/>
        <Form/>
        <TaskList/>
          
          
          </>
        }
        {
          tab=='week' && <Week/>
        }
        {
          tab=='month' && <Month/>
        }
        {
          tab=='year' && <Year/>
        }
      </div>
    </main>
  )
}

export default App
