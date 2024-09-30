export async function cadastrarTaskService(taskName, dueDate) {
  try {
    const response = await fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskName, dueDate }),
    });
    return response.ok;
  } catch (error) {
    console.error('Erro ao cadastrar task:', error);
    throw error;
  }
}
