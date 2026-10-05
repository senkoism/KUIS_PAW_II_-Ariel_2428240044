let data = [
  { id: 1, nama: 'Nur Rachmat, M.Kom', nip: '172501', prodiId: 2 },
  { id: 2, nama: 'M. Rachmadi, S.T., M.T.I ', nip: '172402', prodiId: 1 },
  { id: 3, nama: 'Dr. Yulizar Kasih, S.E., M.Si', nip:'172605', prodiId: 3},
];
let nextId = 3;

module.exports = {
  getAll: () => data,
  getById: (id) => data.find((d) => d.id === id),
  getByProdi: (prodiId) => data.filter((d) => d.prodiId === prodiId),
  create: ({ nama, nip, prodiId }) => {
    const item = { id: nextId++, nama, nip, prodiId };
    data.push(item);
    return item;
  },
  update: (id, { nama, nip, prodiId }) => {
    const item = data.find((d) => d.id === id);
    if (!item) return null;
    if (nama !== undefined) item.nama = nama;
    if (nip !== undefined) item.nip = nip;
    if (prodiId !== undefined) item.prodiId = Number(prodiId);
    return item;
  },
  remove: (id) => {
    const i = data.findIndex((d) => d.id === id);
    return i === -1 ? null : data.splice(i, 1)[0];
  },
};
