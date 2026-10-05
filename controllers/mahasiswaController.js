const Mahasiswa = require('../models/mahasiswaModel');
const Prodi = require('../models/prodiModel');

exports.getAll = (req, res) => res.json(Mahasiswa.getAll());

exports.getOne = (req, res) => {
  const item = Mahasiswa.getById(Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  res.json({ ...item, prodi: Prodi.getById(item.prodiId) });
};

exports.create = (req, res) => {
  const { npm, nama, prodiId } = req.body;
  if (!npm || !nama || prodiId === undefined)
    return res.status(400).json({ message: 'npm, nama, prodiId wajib diisi' });
  if (!Prodi.getById(Number(prodiId)))
    return res.status(400).json({ message: 'prodiId tidak valid' });
  res.status(201).json(Mahasiswa.create({ npm, nama, prodiId: Number(prodiId) }));
};

exports.update = (req, res) => {
  if (req.body.prodiId !== undefined && !Prodi.getById(Number(req.body.prodiId)))
    return res.status(400).json({ message: 'prodiId tidak valid' });
  const item = Mahasiswa.update(Number(req.params.id), req.body);
  if (!item) return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  res.json(item);
};

exports.remove = (req, res) => {
  const item = Mahasiswa.remove(Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  res.json({ message: 'Mahasiswa dihapus', data: item });
};
