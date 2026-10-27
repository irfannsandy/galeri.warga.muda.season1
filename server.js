import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Initial State (Mirroring Supabase initial seed from index.html & supabase_setup.sql)
const state = {
  id: 1,
  artworks: [
    {
      id: 'art-1',
      title: 'Lentera Masa Depan: Hak Atas Pendidikan Layak',
      author: 'Kelompok 1 (Aditya & Kirana)',
      class: 'IX-A',
      category: 'galeri-1',
      type: 'Gambar / Poster',
      fileType: 'image',
      fileUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
      description: 'Karya poster ini menggambarkan betapa pentingnya akses pendidikan yang merata untuk seluruh anak bangsa tanpa memandang latar belakang sosial.',
      rightsDuties: 'Hak memperoleh pendidikan (Pasal 31 ayat 1 UUD 1945)',
      pancasilaValue: 'Sila ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia',
      message: 'Jangan pernah sia-siakan kesempatan belajar demi kemajuan bangsa.',
      likes: 42,
      votes: 18,
      frameType: 'gold',
      comments: [
        { id: 'c1', name: 'Budi Santoso', text: 'Desain warnanya sangat hangat dan informasinya mudah dipahami!' },
        { id: 'c2', name: 'Ibu Ratna (Guru)', text: 'Analisis pasal UUD-nya sangat tepat. Karya yang menginspirasi!' }
      ],
      createdAt: new Date().toISOString()
    },
    {
      id: 'art-2',
      title: 'Laporan Kajian: Kesadaran Hukum & Hak Warga Negara',
      author: 'Siti Rahmawati',
      class: 'IX-C',
      category: 'galeri-1',
      type: 'Dokumen PDF',
      fileType: 'pdf',
      fileUrl: 'sample-hak-kewajiban.pdf',
      pdfPages: 4,
      description: 'Dokumen kajian ringkas PDF mengenai pentingnya perlindungan hukum bagi setiap warga negara tanpa diskriminasi.',
      rightsDuties: 'Hak atas perlindungan hukum dan keadilan (Pasal 28D ayat 1)',
      pancasilaValue: 'Sila ke-2: Kemanusiaan yang Adil dan Beradab',
      message: 'Hukum hadir bukan untuk menakuti, melainkan untuk melindungi hak setiap individu.',
      likes: 31,
      votes: 22,
      frameType: 'wood',
      comments: [
        { id: 'c3', name: 'Dewi Ayu', text: 'Format laporan PDF-nya sangat rapi dan komprehensif!' }
      ],
      createdAt: new Date().toISOString()
    },
    {
      id: 'art-3',
      title: 'Esai Kritis: Kontribusi Pajak & Pembangunan Negara',
      author: 'Kelompok Garuda (Fajar & Rian)',
      class: 'IX-B',
      category: 'galeri-2',
      type: 'File Word (.docx)',
      fileType: 'word',
      fileUrl: 'makalah-warga-negara.docx',
      wordTextContent: 'Pajak merupakan modal utama pembangunan nasional. Tanpa pajak, fasilitas umum seperti rumah sakit, sekolah, dan jalan tidak dapat terbangun secara optimal. Oleh karena itu, kewajiban membayar pajak adalah wujud nyata bela negara.',
      description: 'Dokumen karya tulis Word berupa esai analisis ketaatan pajak sebagai bentuk kewajiban warga negara muda.',
      rightsDuties: 'Kewajiban menaati hukum & membela negara lewat pajak (Pasal 23A)',
      pancasilaValue: 'Sila ke-3: Persatuan Indonesia',
      message: 'Menjadi warga negara taat pajak adalah bentuk cinta tanah air yang nyata.',
      likes: 48,
      votes: 29,
      frameType: 'gold',
      comments: [
        { id: 'c4', name: 'Andi Saputra', text: 'Penjelasan esai Word-nya sangat tajam dan logis!' }
      ],
      createdAt: new Date().toISOString()
    },
    {
      id: 'art-4',
      title: 'Aksi Nyata: Gerakan Lingkungan Bersama',
      author: 'Nabila Putri',
      class: 'IX-A',
      category: 'galeri-2',
      type: 'Gambar / Dokumentasi',
      fileType: 'image',
      fileUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      description: 'Dokumentasi aksi nyata penanaman pohon dan pemilahan sampah di lingkungan sekolah.',
      rightsDuties: 'Kewajiban menjaga kelestarian lingkungan hidup',
      pancasilaValue: 'Sila ke-5: Keadilan Sosial',
      message: 'Bumi adalah titipan anak cucu kita, mari kita jaga kebersihannya hari ini.',
      likes: 55,
      votes: 35,
      frameType: 'wood',
      comments: [
        { id: 'c5', name: 'Rizky', text: 'Keren banget aksi nyatanya!' }
      ],
      createdAt: new Date().toISOString()
    },
    {
      id: 'art-5',
      title: 'Video Dokumenter: Aksi Bersih Sungai & Gotong Royong Pelajar',
      author: 'Kelompok Harmoni Pancasila (Bagas & Siti)',
      class: 'IX-B',
      category: 'galeri-4',
      type: 'Video Dokumenter / MP4',
      fileType: 'video',
      fileUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description: 'Video dokumenter pendek karya siswa mengenai pentingnya peran aktif generasi muda dalam aksi gotong royong merawat ekosistem lingkungan dan fasilitas umum.',
      rightsDuties: 'Kewajiban menjaga kelestarian lingkungan hidup & fasilitas publik',
      pancasilaValue: 'Sila ke-3: Persatuan Indonesia & Sila ke-5: Keadilan Sosial',
      message: 'Aksi nyata sekecil apa pun jika dilakukan bersama-sama akan membawa kebaikan besar bagi bangsa Indonesia.',
      likes: 67,
      votes: 41,
      frameType: 'gold',
      comments: [
        { id: 'c6', name: 'Pak Hendra (Guru PPKn)', text: 'Kreativitas videonya luar biasa! Pengambilan gambar dan pesannya sangat menggugah.' },
        { id: 'c7', name: 'Zahra', text: 'Keren banget videonya, cinematik dan edukatif!' }
      ],
      createdAt: new Date().toISOString()
    }
  ],
  reflections: [
    {
      id: 'ref-1',
      name: 'Anindya Putri',
      class: 'IX-B',
      content: 'Saya sangat mensyukuri hak atas pendidikan. Kewajiban yang akan saya tingkatkan adalah lebih disiplin membuang sampah dan menghargai pendapat teman saat diskusi.',
      createdAt: new Date().toISOString()
    },
    {
      id: 'ref-2',
      name: 'Galang Persada',
      class: 'IX-A',
      content: 'Hak yang paling saya syukuri adalah kebebasan menyampaikan ide. Ke depannya, saya berjanji akan lebih taat aturan sekolah.',
      createdAt: new Date().toISOString()
    }
  ],
  instruction: 'Selamat datang di Galeri Warga Negara Muda! Jelajahi seluruh karya teman-temanmu baik berupa Video Dokumenter, Gambar/Poster, Dokumen PDF, maupun Makalah Word. Berikan apresiasi, baca pesan yang disampaikan, dan tuliskan komentar positif yang membangun.',
  awards: {},
  updated_at: new Date().toISOString()
};

// API: Get State
app.get('/api/galeri_state', (req, res) => {
  res.json({ data: state, error: null });
});

// API: RPC dispatcher
app.post('/api/rpc/:method', (req, res) => {
  const method = req.params.method;
  const payload = req.body || {};
  state.updated_at = new Date().toISOString();

  switch (method) {
    case 'append_artwork': {
      const p_artwork = payload.p_artwork;
      if (p_artwork) {
        state.artworks.unshift(p_artwork);
      }
      return res.json({ data: state.artworks, error: null });
    }

    case 'delete_artwork': {
      const p_art_id = payload.p_art_id;
      state.artworks = state.artworks.filter(a => a.id !== p_art_id);
      return res.json({ data: state.artworks, error: null });
    }

    case 'append_reflection': {
      const p_reflection = payload.p_reflection;
      if (p_reflection) {
        state.reflections.unshift(p_reflection);
      }
      return res.json({ data: state.reflections, error: null });
    }

    case 'delete_reflection': {
      const p_ref_id = payload.p_ref_id;
      state.reflections = state.reflections.filter(r => r.id !== p_ref_id);
      return res.json({ data: state.reflections, error: null });
    }

    case 'add_comment': {
      const { p_art_id, p_comment } = payload;
      const art = state.artworks.find(a => a.id === p_art_id);
      if (art) {
        if (!art.comments) art.comments = [];
        art.comments.push(p_comment);
      }
      return res.json({ data: state.artworks, error: null });
    }

    case 'delete_comment': {
      const { p_art_id, p_comment_id } = payload;
      const art = state.artworks.find(a => a.id === p_art_id);
      if (art && art.comments) {
        art.comments = art.comments.filter(c => c.id !== p_comment_id);
      }
      return res.json({ data: state.artworks, error: null });
    }

    case 'increment_artwork_counter': {
      const { p_art_id, p_field } = payload;
      const art = state.artworks.find(a => a.id === p_art_id);
      if (art && (p_field === 'likes' || p_field === 'votes')) {
        art[p_field] = (art[p_field] || 0) + 1;
      }
      return res.json({ data: state.artworks, error: null });
    }

    case 'save_gallery_settings': {
      const { p_instruction, p_awards } = payload;
      if (p_instruction !== undefined) {
        state.instruction = p_instruction;
      }
      if (p_awards !== undefined) {
        state.awards = p_awards;
      }
      return res.json({
        data: {
          instruction: state.instruction,
          awards: state.awards
        },
        error: null
      });
    }

    default:
      return res.status(400).json({ error: `Unknown RPC method: ${method}` });
  }
});

// API: File Upload Mock
app.post('/api/upload', (req, res) => {
  const { path: filePath, dataUrl } = req.body || {};
  res.json({
    data: {
      path: filePath,
      publicUrl: dataUrl || `/uploads/${filePath || 'file'}`
    },
    error: null
  });
});

// Static assets
app.use(express.static(__dirname));

// Single Page fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Galeri Warga Negara Muda] Server running on http://0.0.0.0:${PORT}`);
});
