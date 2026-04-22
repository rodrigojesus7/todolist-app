import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useContext } from "react"

const todos = [
    { id: 1, text: 'Todo 1' },
    { id: 2, text: 'Todo 2' },
    { id: 3, text: 'Todo 3' }
]

const TodoList = () => {

    const { theme } = useContext(ThemeContext)

    return (

        <>
            <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
                <ul>
                    {todos.map((todo) => (
                        <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
                            key={todo.id}>
                            <div className="flex items-center gap-4">
                                <button className={`w-6 h-6 border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer `}></button>

                                <p className={`${themeConfig[theme].todo.textColor}`}>{todo.text}</p>
                            </div>
                        </li>
                    ))}

                </ul>

                <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
                    <p>{todos.length} items left</p>

                    <div className="hidden sm:flex gap-4">
                        <button className="cursor-pointer text-bright-blue">All</button>
                        <button className="cursor-pointer">Active</button>
                        <button className="cursor-pointer">Completed</button>
                    </div>

                    <button className="cursor-pointer">Clear Selected</button>
                </div>


            </div>


            <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].todo.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}>
                <button className="cursor-pointer text-bright-blue">All</button>
                <button className="cursor-pointer">Active</button>
                <button className="cursor-pointer">Completed</button>
            </div>
        </>



    )
}


export { TodoList }