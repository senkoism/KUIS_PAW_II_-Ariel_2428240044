let data = [
  { id: 1, nama: 'Sistem Informasi', jenjang: 'S1', fakultasId: 1 },
  { id: 2, nama: 'Teknik Informatika', jenjang: 'S1', fakultasId: 1 },
  { id: 3, nama: 'Manajemen', jenjang: 'S1', fakultasId: 2 },
];
let nextId = 4;

module.exports = {
  getAll: () => data,
  getById: (id) => data.find((p) => p.id === id),
  getByFakultas: (fakultasId) => data.filter((p) => p.fakultasId === fakultasId),
  create: ({ nama, jenjang, fakultasId }) => {
    const item = { id: nextId++, nama, jenjang, fakultasId };
    data.push(item);
    return item;
  },
  update: (id, { nama, jenjang, fakultasId }) => {
    const item = data.find((p) => p.id === id);
    if (!item) return null;
    if (nama !== undefined) item.nama = nama;
    if (jenjang !== undefined) item.jenjang = jenjang;
    if (fakultasId !== undefined) item.fakultasId = Number(fakultasId);
    return item;
  },
  remove: (id) => {
    const i = data.findIndex((p) => p.id === id);
    return i === -1 ? null : data.splice(i, 1)[0];
  },
};
