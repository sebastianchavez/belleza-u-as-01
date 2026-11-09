# Nails Studio · Belleza y uñas

Template de reservas para servicios de manicura y pedicura. Incluye precios, galería, horarios, horario de clases, perfil y pago simulado.

## Tecnología y alcance

HTML, CSS y JavaScript nativo. Usa Tailwind CSS vía CDN. No requiere un proceso de compilación para previsualizar las páginas. Se necesita conexión a Internet para cargar los recursos externos referenciados por los HTML, como estilos, fuentes e imágenes.

La autenticación y las reservas son demostrativas y utilizan almacenamiento del navegador. No hay backend ni conexión a una agenda compartida. Los pagos y las confirmaciones son simulados; no se procesan transacciones reales.

## Ejecución local

Desde esta carpeta, con Node.js y npm instalados:

```powershell
npx --yes http-server . -p 8080 -c-1
```

Abre [la vista previa local](http://localhost:8080/) y comienza en `index.html`. Mantén el mismo origen y puerto al recorrer las páginas para conservar los datos del navegador.

## Acceso de demostración

| Correo | Contraseña |
|---|---|
| `claudia@test.com` | `123456` |
| `martina@test.com` | `123456` |

Abre la pantalla de inicio de sesión e ingresa con una cuenta de la tabla. Los cambios de perfil y las reservas se guardan solamente en ese navegador y origen.

## Páginas incluidas (18)

| Archivo | Título de la página |
|---|---|
| `confirmacion.html` | Confirmación · Nails Studio |
| `contacto.html` | Contacto · Nails Studio |
| `detalle-reserva.html` | Detalle de reserva · Nails Studio |
| `galeria.html` | Galería · Nails Studio |
| `horario-clases.html` | Cursos · Nails Studio |
| `horarios.html` | Horarios · Nails Studio |
| `index.html` | Nails Studio · Salón de Belleza & Uñas |
| `inicio-sesion.html` | Iniciar Sesión · Nails Studio |
| `pago-confirmado.html` | Pago confirmado · Nails Studio |
| `pago.html` | Pago · Nails Studio |
| `perfil.html` | Mi Perfil · Nails Studio |
| `precios.html` | Precios · Nails Studio |
| `privacidad.html` | Política de Privacidad · Nails Studio |
| `recuperar-password.html` | Recuperar Contraseña · Nails Studio |
| `registro.html` | Registro · Nails Studio |
| `reserva.html` | Reservar Cita · Nails Studio |
| `servicios.html` | Servicios · Nails Studio |
| `terminos.html` | Términos y Condiciones · Nails Studio |

## Personalización

- Textos, imágenes, enlaces y datos de contacto: revisa los HTML y `main.js`.
- Colores, espaciados y ajustes responsivos: `css/styles.css`.
- Catálogos, datos de ejemplo y lógica del template: `main.js`. Algunos textos y resúmenes también están definidos en scripts dentro de los HTML.

Los importes visibles usan pesos chilenos (CLP) y los contactos son ejemplos para Chile. Sustituye precios, dirección, teléfono, correo e información del negocio antes de usarlos como datos comerciales.

## Comprobación visual

Recorre las páginas en móvil, tablet y escritorio. Comprueba que el menú, los formularios, las tarjetas y los precios permanezcan legibles; las tablas extensas pueden utilizar desplazamiento horizontal dentro de su contenedor.
