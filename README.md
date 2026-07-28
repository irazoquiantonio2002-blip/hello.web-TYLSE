# Brief de Proyecto — Landing Page TYLSE

Este documento es el informe de trabajo para el desarrollo de la landing page de **TYLSE**. Contiene la información del negocio, el branding y los requisitos visuales/funcionales que debes seguir al adaptar la plantilla base. Ya cuentas con un prompt inicial para adaptar la plantilla al negocio; usa este README como referencia complementaria durante todo el desarrollo.

---

## 1. Información del negocio

- **Nombre comercial:** TYLSE
- **Eslogan / actividad:** Techos y Laminados Sin Estructura
- **Descripción:** Empresa especializada en la fabricación e instalación de techos curvos metálicos sin estructura de soporte interna, con cobertura de servicio a todo el país. Cuenta con trayectoria en el sector desde 1999.
- **Servicios / productos:**
  - Techos curvos
  - Obra civil
  - Mantenimiento industrial
  - Herrería en general
  - Estructuras metálicas
  - Venta de lámina en rollo
  - Renta de engargolador
  - Renta de generadores
  - Iluminación de naves
  - Logística
  - Renta de grúa
- **Cobertura:** Servicio a todo el país (México).
- **Contacto:**
  - WhatsApp / Teléfono: 222 523 4901 / 953 179 1790
  - Correo: Tylse@hotmail.com
- **Redes sociales:**
  - Facebook: [Tylse Tylse](https://www.facebook.com/) *(perfil "Tylse Tylse")*
- **Datos extra:** El material gráfico disponible corresponde a obras/proyectos ya ejecutados (naves industriales, bodegas y techos curvos), útiles como banco de imágenes reales del trabajo de la empresa para la landing.

---

## 2. Branding (extraído del logo e imágenes)

### Paleta de colores

| Uso | Color | HEX |
|---|---|---|
| Verde primario (marca) | Verde TYLSE | `#1C8A46` |
| Verde oscuro (acentos, footer, hover) | Verde bosque | `#0F5C30` |
| Neutro base | Blanco | `#FFFFFF` |
| Gris industrial (fondos secundarios, tarjetas) | Gris claro | `#F2F3F5` |
| Gris metálico (detalles, referencia a lámina/acero) | Gris acero | `#B8BEC4` |
| Texto principal | Grafito / negro suave | `#1A1A1A` |

> Estos valores son una aproximación fiel al verde del logo. Verifica el tono exacto muestreando el archivo del logo (cuentagotas/eyedropper) antes de fijar la paleta definitiva en el código.

### Tipografía sugerida
- **Títulos/Headlines:** una sans-serif geométrica y de peso alto (bold/extrabold), tipo *Montserrat*, *Poppins* o *Archivo* — coherente con el trazo grueso y geométrico del logotipo "TYLSE".
- **Cuerpo de texto:** una sans-serif limpia y de alta legibilidad, tipo *Inter* o *Roboto*, para mantener el look corporativo sin restar legibilidad.

### Identidad visual
- El logo combina un ícono de techo curvo (arco de líneas verticales) con el nombre "TYLSE" en tipografía bold y el subtítulo "TECHOS Y LAMINADOS SIN ESTRUCTURA" en versalitas.
- La identidad transmite: solidez industrial, confiabilidad y alcance nacional. El verde es el color dominante de marca; los grises/plateados metálicos (presentes en las fotos de los techos) funcionan como acento visual que refuerza el rubro industrial/metalúrgico del negocio.

---

## 3. Estilo visual obligatorio

El proyecto debe manejar un estilo **premium, enterprise y corporativo de marca**, nivel **big tech**: elegante y a la vez minimalista. Evita saturar la interfaz de elementos; prioriza espacios en blanco, jerarquía tipográfica clara y una paleta de color controlada (la definida en la sección 2).

---

## 4. Efectos y animaciones requeridos

El sitio debe incluir:

- **Efectos visuales y animaciones al hacer scroll** (revelado de secciones, fade-in, parallax sutil u otros efectos equivalentes).
- **Pantalla de carga (preloader)** con spinner + logo del negocio, mostrada antes de renderizar el contenido principal.
- **Animación en el título del hero**, con alguno de los siguientes efectos (o una combinación): efecto máquina de escribir (typewriter), cambio de color en las letras, u otros efectos tipográficos dinámicos.

---

## 5. Instrucciones sobre assets

- El logo disponible en `imagenes/` viene **con fondo blanco**. Antes de usarlo en el sitio, se debe **remover el fondo** (dejarlo en PNG/SVG transparente) para que se integre correctamente sobre cualquier color de fondo.
- Las fotografías de proyectos (naves, techos curvos, instalaciones) disponibles en `imagenes/` son material real de trabajos ejecutados por TYLSE; pueden usarse como banco de imágenes para galería/evidencia de trabajos, cuidando recortar o limpiar las que incluyan datos de contacto superpuestos (flyers) si no se desea mostrar ese diseño publicitario en el sitio.

---

## 6. Nota para el desarrollador

Puedes iterar sobre el proyecto con Claude dándole instrucciones las veces que sea necesario hasta lograr el resultado deseado. No es necesario acertar todo a la primera: ajusta, corrige y refina con Claude Code en el camino.

---

## 7. Checklist de trabajo

- [ ] Remover el fondo del logo de TYLSE y exportarlo en formato transparente (PNG/SVG).
- [ ] Adaptar la plantilla base con la información del negocio (nombre, servicios, contacto, redes) indicada en este documento.
- [ ] Aplicar la paleta de colores de marca (verde primario, verde oscuro, neutros y grises metálicos) en todo el sitio.
- [ ] Implementar la tipografía sugerida (o una alternativa equivalente en estilo) para títulos y cuerpo de texto.
- [ ] Lograr un acabado visual premium, enterprise y minimalista en toda la página.
- [ ] Implementar animaciones/efectos de scroll en las secciones.
- [ ] Implementar pantalla de carga (preloader) con spinner + logo del negocio.
- [ ] Implementar animación tipográfica en el título del hero (typewriter, cambio de color u otro efecto).
- [ ] Integrar las fotografías de proyectos disponibles en `imagenes/` como evidencia visual del trabajo de TYLSE.
- [ ] Verificar que el WhatsApp, correo y Facebook estén correctamente enlazados/clicables.
- [ ] Revisar el sitio en escritorio y en móvil antes de dar por terminada la iteración.
- [ ] Iterar con Claude Code las veces que sea necesario hasta alcanzar el resultado final deseado.
