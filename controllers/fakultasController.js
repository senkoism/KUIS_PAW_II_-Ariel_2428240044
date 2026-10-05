const Fakultas = require('../models/fakultasModel');
const Prodi = require('../models/prodiModel');

exports.getAll = (req, res) => res.json(Fakultas.getAll());

exports.getOne = (req, res) => {
  const item = Fakultas.getById(Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Fakultas tidak ditemukan' });
  res.json({ ...item, prodi: Prodi.getByFakultas(item.id) });
};

exports.create = (req, res) => {
  if (!req.body.nama) return res.status(400).json({ message: 'nama wajib diisi' });
  res.status(201).json(Fakultas.create(req.body));
};

exports.update = (req, res) => {
  const item = Fakultas.update(Number(req.params.id), req.body);
  if (!item) return res.status(404).json({ message: 'Fakultas tidak ditemukan' });
  res.json(item);
};

exports.remove = (req, res) => {
  const id = Number(req.params.id);
  if (Prodi.getByFakultas(id).length)
    return res.status(409).json({ message: 'Fakultas masih memiliki prodi' });
  const item = Fakultas.remove(id);
  if (!item) return res.status(404).json({ message: 'Fakultas tidak ditemukan' });
  res.json({ message: 'Fakultas dihapus', data: item });
};
