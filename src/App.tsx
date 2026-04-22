import { TodoHeader } from "./components/TodoHeader"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

import { useContext } from "react"
import { themeConfig } from "./contexts/theme"
import { ThemeContext } from "./contexts/ThemeContext"

function App() {

  const { theme } = useContext(ThemeContext)

  return (


    <>
      <TodoHeader></TodoHeader>

      <TodoForm></TodoForm>

      <TodoList></TodoList>
    </>



  )
}

export default App
