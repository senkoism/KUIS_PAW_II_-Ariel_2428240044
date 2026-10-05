const Prodi = require('../models/prodiModel');
const Fakultas = require('../models/fakultasModel');
const Mahasiswa = require('../models/mahasiswaModel');
const Dosen = require('../models/dosenModel');

exports.getAll = (req, res) => res.json(Prodi.getAll());

exports.getOne = (req, res) => {
  const item = Prodi.getById(Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Prodi tidak ditemukan' });
  res.json({
    ...item,
    fakultas: Fakultas.getById(item.fakultasId),
    mahasiswa: Mahasiswa.getByProdi(item.id),
    dosen: Dosen.getByProdi(item.id),
  });
};

exports.create = (req, res) => {
  const { nama, jenjang, fakultasId } = req.body;
  if (!nama || !jenjang || fakultasId === undefined)
    return res.status(400).json({ message: 'nama, jenjang, fakultasId wajib diisi' });
  if (!Fakultas.getById(Number(fakultasId)))
    return res.status(400).json({ message: 'fakultasId tidak valid' });
  res.status(201).json(Prodi.create({ nama, jenjang, fakultasId: Number(fakultasId) }));
};

exports.update = (req, res) => {
  if (req.body.fakultasId !== undefined && !Fakultas.getById(Number(req.body.fakultasId)))
    return res.status(400).json({ message: 'fakultasId tidak valid' });
  const item = Prodi.update(Number(req.params.id), req.body);
  if (!item) return res.status(404).json({ message: 'Prodi tidak ditemukan' });
  res.json(item);
};

exports.remove = (req, res) => {
  const id = Number(req.params.id);
  if (Mahasiswa.getByProdi(id).length || Dosen.getByProdi(id).length)
    return res.status(409).json({ message: 'Prodi masih memiliki mahasiswa/dosen' });
  const item = Prodi.remove(id);
  if (!item) return res.status(404).json({ message: 'Prodi tidak ditemukan' });
  res.json({ message: 'Prodi dihapus', data: item });
};
