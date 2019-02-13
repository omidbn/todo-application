import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


const App = () => (
  <div className="container">
    <div className="row text-center">
        <div className="col-md-12">
        <h1>todos</h1>
            <div className="box-todo">
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        </div>
    </div>
  </div>
)

export default App
