import { addTodo } from "../lib/todoService";

async function FormTODO() {
  const addTodoAction = async (data: any) => {
    "use server";
    const todo = data.get("todo");
    addTodo(todo);
    data.set("todo", "");
  };

  return (
    <form action={addTodoAction} className="flex gap-2">
      <input
        className="text-black"
        name="todo"
        placeholder="hacer la compra..."
      />
      <button>Add</button>
    </form>
  );
}

export default FormTODO;
