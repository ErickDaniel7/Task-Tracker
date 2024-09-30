export async function loginService(username, password) {
  try {
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authToken', data.token); // Armazenando o token de autenticação
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    throw error;
  }
}
