# API MVC/Layered (Express)

## Menjalankan
    npm install
    npm start        # http://localhost:3000

## Endpoint (tiap modul: fakultas, prodi, mahasiswa, dosen)
| Method | Path         | Fungsi      |
|--------|--------------|-------------|
| GET    | /{modul}     | semua data  |
| GET    | /{modul}/:id | satu data   |
| POST   | /{modul}     | tambah data |
| PUT    | /{modul}/:id | ubah data   |
| DELETE | /{modul}/:id | hapus data  |

## Contoh body POST
    /fakultas   {"nama":"Fakultas Teknik"}
    /prodi      {"nama":"Akuntansi","jenjang":"S1","fakultasId":2}
    /mahasiswa  {"npm":"2428240044","nama":"Ariel","prodiId":1}
    /dosen      {"nama": 'Nur Rachmat, M.Kom', "nip": '172501', "prodiId": 2}

Data disimpan di array (in-memory), hilang saat server restart.
