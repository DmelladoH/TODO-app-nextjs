import prisma from "./prisma";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (e) {
    return { error: true, msg: e };
  }
}

export async function addTodo(content: string) {
  try {
    const res = await prisma.todo.create({
      data: {
        content,
      },
    });
    console.log({ res });
    return res;
  } catch (e) {
    return { error: true, msg: e };
  }
}
