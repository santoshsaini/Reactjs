const todoKey = "reactTodo";

export const getLocalStorageTodos = () => {
    const rowTodos = localStorage.getItem(todoKey);
    if (!rowTodos) return [];
    return JSON.parse(rowTodos);
}

export const setLocalStorageTodos = (task) => {
   return localStorage.setItem(todoKey, JSON.stringify(task));
}