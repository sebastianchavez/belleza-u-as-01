const STORAGE_KEYS = {
  USERS: 'bps_users',
  SESSION: 'bps_session',
  RESERVAS: 'bps_reservas',
  RESERVA_DRAFT: 'bps_reserva_draft',
  PAGO_DRAFT: 'bps_pago_draft',
  CLASES: 'bps_clases_inscritas',
  THEME: 'bps_theme'
};

const SERVICIOS = [
  { id: 'su1', categoria: 'manos', nombre: 'Manicura Clásica', descripcion: 'Limado, cutículas, hidratación y esmaltado tradicional.', duracion: 45, precio: 12900, imagen: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80' },
  { id: 'su2', categoria: 'manos', nombre: 'Manicura Rusa', descripcion: 'Técnica precisa con torno para un acabado impecable.', duracion: 60, precio: 18900, imagen: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80' },
  { id: 'su3', categoria: 'esculpidas', nombre: 'Gel', descripcion: 'Esmalte gel de alta duración con acabado brillante.', duracion: 75, precio: 22900, imagen: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800&q=80' },
  { id: 'su4', categoria: 'esculpidas', nombre: 'Acrílico', descripcion: 'Uñas acrílicas resistentes y personalizables.', duracion: 120, precio: 32900, imagen: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80' },
  { id: 'su5', categoria: 'esculpidas', nombre: 'Polygel', descripcion: 'Sistema híbrido flexible, ligero y natural.', duracion: 120, precio: 35900, imagen: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80' },
  { id: 'su6', categoria: 'arte', nombre: 'Nail Art', descripcion: 'Diseños personalizados, desde minimalistas hasta elaborados.', duracion: 60, precio: 8900, imagen: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80' },
  { id: 'su7', categoria: 'arte', nombre: 'Diseño 3D', descripcion: 'Decoración tridimensional con detalles únicos.', duracion: 90, precio: 15900, imagen: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800&q=80' },
  { id: 'su8', categoria: 'pies', nombre: 'Pedicura Spa', descripcion: 'Exfoliación, masaje e hidratación profunda.', duracion: 60, precio: 17900, imagen: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80' },
  { id: 'su9', categoria: 'pies', nombre: 'Spa de Pies Premium', descripcion: 'Tratamiento completo con parafina y aromaterapia.', duracion: 90, precio: 24900, imagen: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80' },
  { id: 'su10', categoria: 'mantencion', nombre: 'Retoque', descripcion: 'Mantenimiento de uñas esculpidas cada 3-4 semanas.', duracion: 90, precio: 21900, imagen: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80' }
];

const PROFESIONALES = [
  { id: 'pr1', nombre: 'Valentina Soto', rol: 'Especialista Nail Art', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', rating: 5.0, experiencia: 8, especialidades: ['su1', 'su2', 'su6', 'su7'] },
  { id: 'pr2', nombre: 'Camila Ríos', rol: 'Experta en Esculpidas', foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', rating: 4.9, experiencia: 6, especialidades: ['su3', 'su4', 'su5', 'su10'] },
  { id: 'pr3', nombre: 'Ignacia Pérez', rol: 'Manicurista Rusa', foto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80', rating: 4.8, experiencia: 5, especialidades: ['su1', 'su2', 'su10'] },
  { id: 'pr4', nombre: 'Francisca López', rol: 'Pedicurista Senior', foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', rating: 4.9, experiencia: 7, especialidades: ['su8', 'su9'] },
  { id: 'pr5', nombre: 'Catalina Vargas', rol: 'Especialista Gel', foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80', rating: 4.7, experiencia: 4, especialidades: ['su3', 'su6', 'su10'] }
];

const HORARIOS = {
  lunes: { abierto: true, desde: '10:00', hasta: '20:00' },
  martes: { abierto: true, desde: '10:00', hasta: '20:00' },
  miercoles: { abierto: true, desde: '10:00', hasta: '20:00' },
  jueves: { abierto: true, desde: '10:00', hasta: '20:00' },
  viernes: { abierto: true, desde: '10:00', hasta: '20:00' },
  sabado: { abierto: true, desde: '10:00', hasta: '14:00' },
  domingo: { abierto: false, desde: '', hasta: '' }
};

const CURSOS = [
  {
    id: 'cu1',
    nombre: 'Curso Manicura Esencial',
    descripcion: 'Aprende las técnicas fundamentales de manicura profesional.',
    sesiones: 4,
    duracionSesion: '2 horas',
    precio: 89000,
    profesor: 'Ignacia Pérez',
    nivel: 'Principiante',
    cuposTotales: 8,
    imagen: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    horarios: [
      { dia: 'martes', hora: '15:00' },
      { dia: 'jueves', hora: '15:00' }
    ]
  },
  {
    id: 'cu2',
    nombre: 'Curso Nail Art Profesional',
    descripcion: 'Domina técnicas avanzadas de decoración y diseño artístico.',
    sesiones: 6,
    duracionSesion: '2.5 horas',
    precio: 149000,
    profesor: 'Valentina Soto',
    nivel: 'Intermedio',
    cuposTotales: 6,
    imagen: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80',
    horarios: [
      { dia: 'miercoles', hora: '16:00' },
      { dia: 'viernes', hora: '16:00' }
    ]
  },
  {
    id: 'cu3',
    nombre: 'Curso Autocuidado Manos',
    descripcion: 'Aprende a cuidar tus manos y pies con productos naturales.',
    sesiones: 3,
    duracionSesion: '1.5 horas',
    precio: 59000,
    profesor: 'Francisca López',
    nivel: 'Principiante',
    cuposTotales: 10,
    imagen: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
    horarios: [
      { dia: 'sabado', hora: '11:00' }
    ]
  }
];

const GALERIA = [
  { url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', cat: 'manos', titulo: 'Manicura Francesa' },
  { url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80', cat: 'manos', titulo: 'Manicura Rusa' },
  { url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80', cat: 'esculpidas', titulo: 'Polygel Natural' },
  { url: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80', cat: 'esculpidas', titulo: 'Acrílico Diseñado' },
  { url: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800&q=80', cat: 'arte', titulo: 'Nail Art Floral' },
  { url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80', cat: 'pies', titulo: 'Pedicura Spa' },
  { url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', cat: 'esculpidas', titulo: 'Gel Brillante' },
  { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', cat: 'pies', titulo: 'Spa Premium' },
  { url: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80', cat: 'arte', titulo: 'Diseño Geométrico' },
  { url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80', cat: 'manos', titulo: 'Manicura Express' },
  { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', cat: 'arte', titulo: 'Decoración Handmade' },
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80', cat: 'pies', titulo: 'Pedicura Express' }
];

const METODOS_PAGO = [
  { id: 'tarjeta', nombre: 'Tarjeta de Crédito/Débito', icono: 'card' },
  { id: 'webpay', nombre: 'Webpay', icono: 'webpay' },
  { id: 'transferencia', nombre: 'Transferencia Bancaria', icono: 'bank' },
  { id: 'efectivo', nombre: 'Efectivo en local', icono: 'cash' }
];

const Storage = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      Storage.set(STORAGE_KEYS.USERS, [
        { id: 'u1', nombre: 'Claudia Mendoza', email: 'claudia@test.com', telefono: '+56 9 9876 5432', password: '123456', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
        { id: 'u2', nombre: 'Martina Silva', email: 'martina@test.com', telefono: '+56 9 8765 1234', password: '123456', foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80' }
      ]);
    }
  },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    if (s.expires && s.expires < Date.now()) {
      Storage.remove(STORAGE_KEYS.SESSION);
      return null;
    }
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'El email ya está registrado.' };
    if (data.password.length < 6) return { ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
    const newUser = {
      id: 'u' + Date.now(),
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono || '',
      password: data.password,
      foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80'
    };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: newUser };
  },
  logout() { Storage.remove(STORAGE_KEYS.SESSION); },
  update(userId, data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false };
    users[idx] = { ...users[idx], ...data };
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: users[idx] };
  },
  changePassword(userId, currentPass, newPass) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false, error: 'Usuario no encontrado.' };
    if (users[idx].password !== currentPass) return { ok: false, error: 'La contraseña actual es incorrecta.' };
    if (newPass.length < 6) return { ok: false, error: 'La nueva contraseña debe tener al menos 6 caracteres.' };
    users[idx].password = newPass;
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true };
  },
  resetPasswordByEmail(email, newPass) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.email === email);
    if (idx === -1) return { ok: false, error: 'No existe una cuenta con ese email.' };
    if (newPass.length < 6) return { ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
    users[idx].password = newPass;
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true };
  }
};

const Reservas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, null);
    if (list === null) {
      const samples = [
        { id: 'r1', userId: 'u1', servicioId: 'su3', profesionalId: 'pr2', fecha: this._futureDate(3), hora: '11:00', estado: 'confirmada', pago: 'pagado', metodoPago: 'tarjeta', precio: 22900, createdAt: Date.now() - 86400000 * 2 },
        { id: 'r2', userId: 'u1', servicioId: 'su6', profesionalId: 'pr1', fecha: this._futureDate(7), hora: '16:00', estado: 'pendiente', pago: 'pendiente', metodoPago: null, precio: 8900, createdAt: Date.now() - 86400000 },
        { id: 'r3', userId: 'u1', servicioId: 'su8', profesionalId: 'pr4', fecha: this._futureDate(-5), hora: '15:00', estado: 'completada', pago: 'pagado', metodoPago: 'webpay', precio: 17900, createdAt: Date.now() - 86400000 * 10 }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, samples);
    }
  },
  _futureDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },
  listByUser(userId) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).filter(r => r.userId === userId);
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).find(r => r.id === id) || null;
  },
  create(data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const newReserva = {
      id: 'r' + Date.now(),
      createdAt: Date.now(),
      estado: 'pendiente',
      pago: 'pendiente',
      metodoPago: null,
      ...data
    };
    list.push(newReserva);
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return newReserva;
  },
  update(id, data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const idx = list.findIndex(r => r.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return list[idx];
  },
  cancel(id) { return this.update(id, { estado: 'anulada' }); },
  markPaid(id, metodo) {
    return this.update(id, { pago: 'pagado', metodoPago: metodo, estado: 'confirmada' });
  },
  setDraft(data) { Storage.set(STORAGE_KEYS.RESERVA_DRAFT, data); },
  getDraft() { return Storage.get(STORAGE_KEYS.RESERVA_DRAFT, null); },
  clearDraft() { Storage.remove(STORAGE_KEYS.RESERVA_DRAFT); },
  setPagoDraft(data) { Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  getPagoDraft() { return Storage.get(STORAGE_KEYS.PAGO_DRAFT, null); },
  clearPagoDraft() { Storage.remove(STORAGE_KEYS.PAGO_DRAFT); }
};

const Clases = {
  list() { return CURSOS; },
  get(id) { return CURSOS.find(c => c.id === id); },
  getInscritos(id) {
    const all = Storage.get(STORAGE_KEYS.CLASES, {});
    return all[id] || 0;
  },
  incrementar(id) {
    const all = Storage.get(STORAGE_KEYS.CLASES, {});
    all[id] = (all[id] || 0) + 1;
    Storage.set(STORAGE_KEYS.CLASES, all);
  }
};

const UI = {
  formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-CL', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  },
  formatPrice(n) {
    return 'CLP$ ' + Math.round(Number(n)).toLocaleString('es-CL');
  },
  reservaPrecio(r) {
    if (r && typeof r.precio === 'number') return r.precio;
    const s = r ? SERVICIOS.find(x => x.id === r.servicioId) : null;
    return s ? s.precio : 0;
  },
  servicioById(id) { return SERVICIOS.find(s => s.id === id); },
  profesionalById(id) { return PROFESIONALES.find(p => p.id === id); },
  categoriaLabel(cat) {
    const map = { manos: 'Manos', esculpidas: 'Esculpidas', arte: 'Arte', pies: 'Pies', mantencion: 'Mantención' };
    return map[cat] || cat;
  },
  estadoBadge(estado) {
    const map = {
      pendiente: { label: 'Pendiente', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      confirmada: { label: 'Confirmada', cls: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
      pagada: { label: 'Pagada', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
      completada: { label: 'Completada', cls: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
      anulada: { label: 'Anulada', cls: 'bg-red-500/20 text-red-300 border-red-500/30' }
    };
    return map[estado] || map.pendiente;
  },
  pagoBadge(pago) {
    const map = {
      pendiente: { label: 'Por pagar', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      pagado: { label: 'Pagado', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' }
    };
    return map[pago] || map.pendiente;
  },
  isPastDate(iso) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(iso + 'T00:00:00');
    return d < today;
  },
  generateSlots(servicioId, fecha) {
    if (!servicioId || !fecha) return [];
    const day = new Date(fecha + 'T00:00:00').getDay();
    const dayKey = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'][day];
    const h = HORARIOS[dayKey];
    if (!h.abierto) return [];
    const slots = [];
    let [hStart, mStart] = h.desde.split(':').map(Number);
    let [hEnd, mEnd] = h.hasta.split(':').map(Number);
    let cur = hStart * 60 + mStart;
    const end = hEnd * 60 + mEnd;
    while (cur + 30 <= end) {
      const hh = String(Math.floor(cur/60)).padStart(2,'0');
      const mm = String(cur%60).padStart(2,'0');
      slots.push(`${hh}:${mm}`);
      cur += 30;
    }
    return slots;
  },
  toast(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `fixed top-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-2xl font-medium text-sm border ${type === 'success' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/40' : 'bg-red-500/20 text-red-100 border-red-500/40'} backdrop-blur`;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2500);
    setTimeout(() => el.remove(), 2900);
  },
  modal(html, options = {}) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `<div class="modal-content">${html}</div>`;
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    const closeBtn = backdrop.querySelector('[data-close]');
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (options.onConfirm) {
      const confirmBtn = backdrop.querySelector('[data-confirm]');
      if (confirmBtn) confirmBtn.addEventListener('click', () => { options.onConfirm(); close(); });
    }
    return close;
  },
  requireAuth(redirectUrl) {
    if (!Auth.isLogged()) {
      Storage.set('bps_redirect', redirectUrl || window.location.pathname);
      window.location.href = 'inicio-sesion.html';
      return false;
    }
    return true;
  },
  applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    Storage.set(STORAGE_KEYS.THEME, theme);
  },
  initTheme() {
    const saved = Storage.get(STORAGE_KEYS.THEME, 'dark');
    this.applyTheme(saved);
  },
  hoyMes(numero) {
    return numero >= 1 ? numero + ' disponibles' : 'Sin cupos';
  }
};

function iconSvg(name, classes = 'h-5 w-5') {
  const icons = {
    card: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>',
    webpay: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    bank: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>',
    cash: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'
  };
  return icons[name] || icons.card;
}

function buildHeader(active) {
  const user = Auth.current();
  const isDark = document.documentElement.classList.contains('dark');
  const links = [
    { href: 'index.html', label: 'Inicio', key: 'index' },
    { href: 'servicios.html', label: 'Servicios', key: 'servicios' },
    { href: 'galeria.html', label: 'Galería', key: 'galeria' },
    { href: 'precios.html', label: 'Precios', key: 'precios' },
    { href: 'horario-clases.html', label: 'Cursos', key: 'cursos' },
    { href: 'horarios.html', label: 'Horarios', key: 'horarios' },
    { href: 'contacto.html', label: 'Contacto', key: 'contacto' }
  ];
  const authLinks = user
    ? `<a href="perfil.html" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
        <img src="${user.foto}" class="h-7 w-7 rounded-full object-cover border border-primary/40" alt=""/>
        <span class="hidden lg:inline">${user.nombre.split(' ')[0]}</span>
       </a>
       <a href="#" id="btnLogout" class="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Salir</a>`
    : `<a href="inicio-sesion.html" class="text-sm font-medium hover:text-primary transition-colors">Ingresar</a>
       <a href="registro.html" class="bg-primary text-black font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:bg-primary-light transition-all">Registrarse</a>`;

  return `
  <header class="sticky top-0 z-50 bg-background-dark/85 backdrop-blur-md border-b border-primary/20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3">
          <svg class="h-9 w-9 text-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24" cy="30" rx="14" ry="10" fill="currentColor" opacity="0.3"/>
            <path d="M18 14c0-2 1-4 3-4h6c2 0 3 2 3 4 0 1-1 2-2 2h-8c-1 0-2-1-2-2z" fill="currentColor"/>
            <ellipse cx="24" cy="18" rx="6" ry="4" fill="currentColor"/>
            <path d="M20 16h8v14c0 1-1 2-2 2h-4c-1 0-2-1-2-2V16z" fill="currentColor"/>
            <circle cx="30" cy="8" r="2" fill="#d4a574"/>
          </svg>
          <div>
            <h2 class="text-lg font-bold text-white leading-tight" style="font-family: 'Playfair Display', serif">Nails Studio</h2>
            <p class="text-[10px] uppercase tracking-widest text-primary/80">Salón de Belleza</p>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-7" id="navMenu">
          ${links.map(l => `<a href="${l.href}" class="text-sm font-medium transition-colors ${active === l.key ? 'text-primary' : 'text-gray-300 hover:text-primary'}">${l.label}</a>`).join('')}
        </nav>
        <div class="hidden lg:flex items-center gap-4">
          ${authLinks}
          <button id="btnTheme" class="text-gray-300 hover:text-primary transition-colors" title="Cambiar tema">
            ${isDark ? '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' : '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'}
          </button>
        </div>
        <button class="lg:hidden text-white" id="btnMenu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <nav class="hidden lg:hidden flex-col gap-1 pb-4" id="navMobile">
        ${links.map(l => `<a href="${l.href}" class="block py-2 px-3 rounded text-sm font-medium transition-colors ${active === l.key ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-primary/5'}">${l.label}</a>`).join('')}
        <div class="border-t border-primary/20 mt-3 pt-3 flex flex-col gap-2">
          ${user
            ? `<a href="perfil.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Mi Perfil</a>
               <a href="#" id="btnLogoutMobile" class="block py-2 px-3 rounded text-sm text-red-400 hover:bg-red-500/10">Cerrar sesión</a>`
            : `<a href="inicio-sesion.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Ingresar</a>
               <a href="registro.html" class="block py-2 px-3 rounded text-sm text-primary font-semibold hover:bg-primary/5">Registrarse</a>`}
        </div>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="bg-background-dark border-t border-primary/20 mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <svg class="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none">
              <ellipse cx="24" cy="30" rx="14" ry="10" fill="currentColor" opacity="0.3"/>
              <path d="M18 14c0-2 1-4 3-4h6c2 0 3 2 3 4 0 1-1 2-2 2h-8c-1 0-2-1-2-2z" fill="currentColor"/>
              <ellipse cx="24" cy="18" rx="6" ry="4" fill="currentColor"/>
              <path d="M20 16h8v14c0 1-1 2-2 2h-4c-1 0-2-1-2-2V16z" fill="currentColor"/>
            </svg>
            <h3 class="text-lg font-bold text-white" style="font-family: 'Playfair Display', serif">Nails Studio</h3>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">Tu destino para el cuidado y embellecimiento de tus manos y pies. Diseño, técnica y amor en cada detalle.</p>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="servicios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="galeria.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Galería</a></li>
            <li><a href="precios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Precios</a></li>
            <li><a href="horario-clases.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Cursos</a></li>
            <li><a href="contacto.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="terminos.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="privacidad.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Políticas de Privacidad</a></li>
            <li><a href="recuperar-password.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Recuperar Contraseña</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Av. Apoquindo 4520, Las Condes
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +56 2 2895 4300
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              hola@nailsstudio.cl
            </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .56.04.81.11V9.02a6.27 6.27 0 00-.81-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">© 2024 Nails Studio. Todos los derechos reservados.</p>
        <p class="text-xs text-gray-600">Santiago, Chile · Belleza en cada detalle</p>
      </div>
    </div>
  </footer>`;
}

function initLayout(active) {
  UI.initTheme();
  Auth.init();
  Reservas.init();
  const headerHost = document.getElementById('appHeader');
  const footerHost = document.getElementById('appFooter');
  if (headerHost) headerHost.innerHTML = buildHeader(active);
  if (footerHost) footerHost.innerHTML = buildFooter();

  const btnMenu = document.getElementById('btnMenu');
  const navMobile = document.getElementById('navMobile');
  if (btnMenu && navMobile) {
    btnMenu.addEventListener('click', () => {
      navMobile.classList.toggle('hidden');
      navMobile.classList.toggle('flex');
    });
  }

  const btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const cur = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      UI.applyTheme(cur === 'dark' ? 'light' : 'dark');
      window.location.reload();
    });
  }

  const bindLogout = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
      UI.toast('Sesión cerrada correctamente');
      setTimeout(() => window.location.href = 'index.html', 600);
    });
  };
  bindLogout('#btnLogout');
  bindLogout('#btnLogoutMobile');
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || '';
  initLayout(page);
  if (typeof pageInit === 'function') pageInit();
});