export async function cadastroUsuarioService(username, email, password) {
  try {
    const response = await fetch('http://localhost:8080/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    return response.ok;
  } catch (error) {
    console.error('Erro ao cadastrar usuario:', error);
    throw error;
  }
}
