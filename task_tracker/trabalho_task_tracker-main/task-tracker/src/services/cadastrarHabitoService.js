export async function cadastrarHabitoService(habitoName, description) {
  try {
    const response = await fetch('http://localhost:8080/api/habitos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ habitoName, description }),
    });
    return response.ok;
  } catch (error) {
    console.error('Erro ao cadastrar habito:', error);
    throw error;
  }
}
