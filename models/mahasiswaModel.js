let data = [
  { id: 1, npm: '2428240044', nama: 'Arvin Fulviano Daniel', prodiId: 1 },
  { id: 2, npm: '2428240003', nama: 'Ariel', prodiId: 2 },
  { id: 3, npm: '2428260026', nama: 'Devin Tanjungan', prodiID: 3},
];
let nextId = 3;

module.exports = {
  getAll: () => data,
  getById: (id) => data.find((m) => m.id === id),
  getByProdi: (prodiId) => data.filter((m) => m.prodiId === prodiId),
  create: ({ npm, nama, prodiId }) => {
    const item = { id: nextId++, npm, nama, prodiId };
    data.push(item);
    return item;
  },
  update: (id, { npm, nama, prodiId }) => {
    const item = data.find((m) => m.id === id);
    if (!item) return null;
    if (npm !== undefined) item.npm = npm;
    if (nama !== undefined) item.nama = nama;
    if (prodiId !== undefined) item.prodiId = Number(prodiId);
    return item;
  },
  remove: (id) => {
    const i = data.findIndex((m) => m.id === id);
    return i === -1 ? null : data.splice(i, 1)[0];
  },
};
