async function authLogin(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      return true; 
    } else {
      throw new Error('Failed to login');
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default authLogin;
