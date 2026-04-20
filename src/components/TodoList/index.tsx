const todos = [
    { id: 1, text: 'Todo 1' },
    { id: 2, text: 'Todo 2' },
    { id: 3, text: 'Todo 3' }
]

const TodoList = () => {

    return (

        <div className="bg-neutral-very-dark-desaturated-blue rounded-md">
            <ul>
                {todos.map((todo) => (
                    <li className="p-6 border-b border-neutral-very-dark-grayish-blue" key={todo.id}>
                        <div className="flex items-center gap-4">
                            <button className="w-6 h-6 border rounded-full cursor-pointer border-neutral-dark-grayish-blue"></button>

                            <p className="text-neutral-very-light-grayish-blue">{todo.text}</p>
                        </div>
                    </li>
                ))}

            </ul>

            <div className="flex justify-between p-4 text-neutral-very-light-grayish-blue">
                <p>{todos.length} items left</p>

                <div className="flex gap-4">
                    <button className="cursor-pointer">All</button>
                    <button className="cursor-pointer">Active</button>
                    <button className="cursor-pointer">Completed</button>
                </div>

                <button className="cursor-pointer">Clear Selected</button>
            </div>


        </div>

    )
}


export { TodoList }