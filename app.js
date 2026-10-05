const express = require('express');
const app = express();

app.use(express.json());

app.use('/fakultas', require('./routes/fakultas'));
app.use('/prodi', require('./routes/prodi'));
app.use('/mahasiswa', require('./routes/mahasiswa'));
app.use('/dosen', require('./routes/dosen'));

app.get('/', (req, res) => res.json({ message: 'It works' }));

app.use((req, res) => res.status(404).json({ message: 'Route tidak ditemukan' }));

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
}
module.exports = app;
