# Mercado Laguna 🟢

> La plataforma #1 de negocios locales en la Comarca Lagunera (Torreón, Gómez Palacio, Lerdo y Matamoros).

Mercado Laguna es un marketplace local para la Comarca Lagunera que conecta
compradores y vendedores con **negocios verificados** y **contacto directo por
WhatsApp**, sin comisiones ni intermediarios. Está construido como una SPA con
React + Vite + Tailwind CSS.

![Mercado Laguna](https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200&auto=format&fit=crop)

---

## ✨ Características

- **Buscador en vivo** — filtra anuncios por título, ciudad o categoría mientras escribes.
- **Filtro por categorías** — 12 categorías (alimentos, servicios, autos, electrónica, hogar, ropa, salud, mascotas, empleo, inmuebles, deportes).
- **Negocios verificados** — fichas con sello de verificación, calificación por estrellas y reseñas.
- **Contacto directo por WhatsApp** — cada anuncio y negocio genera un enlace `wa.me` con mensaje prellenado.
- **Favoritos** — guarda anuncios y negocios; persisten en `localStorage`.
- **Publicar anuncio** — modal con formulario validado, borrador autoguardado y envío por WhatsApp.
- **100 % responsivo** — diseño mobile-first con menú hamburguesa y carrusel táctil.
- **SEO listo** — meta tags Open Graph/Twitter, JSON-LD `WebSite`, `lang="es-MX"`, favicon SVG propio.
- **Animaciones sutiles** — fade/scale en modal, hover en tarjetas, ping en botón flotante de WhatsApp.

## 🛠️ Stack

| Herramienta | Uso |
|---|---|
| [React 19](https://react.dev) | UI |
| [Vite](https://vite.dev) | Bundler / dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Estilos |
| [Font Awesome 6](https://fontawesome.com) | Iconos |
| Inter + Sora | Tipografías |

## 🚀 Empezar

Requisitos: Node.js 20+ y npm.

```bash
# instalar dependencias
npm install

# servidor de desarrollo (http://localhost:5173)
npm run dev

# build de producción -> dist/
npm run build

# previsualizar el build
npm run preview

# lint
npm run lint
```

## 📁 Estructura

```
src/
├── main.jsx              # entry point (renderiza <App/> en #root)
├── App.jsx               # composición de la página + estado global
├── index.css            # Tailwind layers + utilidades propias
├── components/          # 16 componentes UI
│   ├── TopBar.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── TrustBar.jsx
│   ├── CategoryGrid.jsx
│   ├── BusinessCard.jsx
│   ├── BusinessesSection.jsx
│   ├── ListingCard.jsx
│   ├── ListingsSection.jsx   # búsqueda + filtro + carrusel
│   ├── HowItWorks.jsx
│   ├── Testimonials.jsx
│   ├── CTASection.jsx
│   ├── PublishModal.jsx      # flujo de publicación con validación
│   ├── Footer.jsx
│   └── FloatingWhatsApp.jsx
├── data/                # datos semilla (categorías, ciudades, negocios, anuncios, testimonios)
├── hooks/
│   ├── useLocalStorage.js
│   └── useFavorites.js
└── utils/
    ├── whatsapp.js      # generador de enlaces wa.me
    └── format.js        # helpers de formato
```

## 🌍 Ciudades atendidas

| Ciudad | Estado |
|---|---|
| Torreón | Coahuila |
| Gómez Palacio | Durango |
| Lerdo | Durango |
| Matamoros | Coahuila |

## 📦 Despliegue

- **GitHub Pages**: el workflow `.github/workflows/deploy.yml` publica `dist/`
  automáticamente al hacer push a `main`.
- **Vercel**: incluye `vercel.json` con la config de Vite; basta con importar el repo.
- Cualquier hosting estático: ejecuta `npm run build` y sirve la carpeta `dist/`.

> ℹ️ `vite.config.js` usa `base: './'` para que los assets funcionen con rutas
> relativas en cualquier hosting.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Abre un issue para discutir cambios grandes,
o envía un pull request directamente.

```bash
git checkout -b feature/mi-mejora
git commit -m "feat: descripción del cambio"
git push origin feature/mi-mejora
```

## 📄 Licencia

[MIT](./LICENSE) — usa este proyecto como quieras.

---

Hecho con ❤️ en la Comarca Lagunera.
