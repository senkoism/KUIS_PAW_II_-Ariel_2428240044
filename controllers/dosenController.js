const Dosen = require('../models/dosenModel');
const Prodi = require('../models/prodiModel');

exports.getAll = (req, res) => res.json(Dosen.getAll());

exports.getOne = (req, res) => {
  const item = Dosen.getById(Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Dosen tidak ditemukan' });
  res.json({ ...item, prodi: Prodi.getById(item.prodiId) });
};

exports.create = (req, res) => {
  const { nama, nip, prodiId } = req.body;
  if (!nama || !nip || prodiId === undefined)
    return res.status(400).json({ message: 'nama, nip, prodiId wajib diisi' });
  if (!Prodi.getById(Number(prodiId)))
    return res.status(400).json({ message: 'prodiId tidak valid' });
  res.status(201).json(Dosen.create({ nama, nip, prodiId: Number(prodiId) }));
};

exports.update = (req, res) => {
  if (req.body.prodiId !== undefined && !Prodi.getById(Number(req.body.prodiId)))
    return res.status(400).json({ message: 'prodiId tidak valid' });
  const item = Dosen.update(Number(req.params.id), req.body);
  if (!item) return res.status(404).json({ message: 'Dosen tidak ditemukan' });
  res.json(item);
};

exports.remove = (req, res) => {
  const item = Dosen.remove(Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Dosen tidak ditemukan' });
  res.json({ message: 'Dosen dihapus', data: item });
};
