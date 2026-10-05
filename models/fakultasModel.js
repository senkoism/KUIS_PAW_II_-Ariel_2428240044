let data = [
  { id: 1, nama: 'Fakultas Ilmu Komputer & Rekayasa' },
  { id: 2, nama: 'Fakultas Bisnis' },
];
let nextId = 3;

module.exports = {
  getAll: () => data,
  getById: (id) => data.find((f) => f.id === id),
  create: ({ nama }) => {
    const item = { id: nextId++, nama };
    data.push(item);
    return item;
  },
  update: (id, { nama }) => {
    const item = data.find((f) => f.id === id);
    if (!item) return null;
    if (nama !== undefined) item.nama = nama;
    return item;
  },
  remove: (id) => {
    const i = data.findIndex((f) => f.id === id);
    return i === -1 ? null : data.splice(i, 1)[0];
  },
};
