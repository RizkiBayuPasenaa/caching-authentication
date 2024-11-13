// Import Express
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')

// Middleware cors
app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());

// Data sederhana untuk simulasi user
const user = {
  username: 'admin',
  password: 'password123'
};

// Endpoint untuk login
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  // Cek kecocokan user data dengan data dummy
  if (username === user.username && password === user.password) {
    // Jika valid, kirim status 200 dengan pesan sukses
    return res.status(200).json({ message: 'Login berhasil', isLoggedIn: true });
  } else {
    // Jika tidak valid, kirim status 401
    return res.status(401).json({ message: 'Login gagal. Username atau password salah', isLoggedIn: false });
  }
});

// Endpoint untuk cek status login
app.get('/auth/status', (req, res) => {
  // Logika untuk cek status login pengguna
  // Contoh ini hanya mengembalikan status true sebagai demo
  // Di kasus nyata, ini akan diambil dari token/session
  res.status(200).json({ isLoggedIn: true });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
