import { getTodos, addTodo } from "./lib/todoService";

export default async function Home() {
  const todos = await getTodos();

  console.log(todos);
  return (
    <main className="m-5">
      <h1>Hello world</h1>
    </main>
  );
}
