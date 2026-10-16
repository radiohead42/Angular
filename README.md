# Angular Bases

Proyecto educativo desarrollado con **Angular 22** para practicar conceptos fundamentales del framework: componentes standalone, routing, señales (`signal`), valores computados (`computed`), pipes, eventos de plantilla y actualización reactiva del estado.

La aplicación reúne tres ejemplos interactivos accesibles desde una barra de navegación:

- **Contador:** modificación de valores mediante métodos y señales.
- **Hero:** edición de nombre y edad usando señales y valores computados.
- **Dragon Ball:** alta y listado de personajes con nombre y nivel de poder.

## Stack tecnológico

- **Angular 22.2.2**
- **TypeScript 6**
- **Angular Router**
- **RxJS 7.8**
- **Bootstrap 5.3.3** mediante CDN
- **Vitest** y JSDOM para pruebas unitarias
- **npm 12**

## Estructura del proyecto

```text
Angular/
├── public/
│   └── favicon.ico              # Icono de la aplicación
├── src/
│   ├── app/
│   │   ├── Components/
│   │   │   └── shared/
│   │   │       └── navbar/      # Navegación principal
│   │   ├── pages/
│   │   │   ├── counter/         # Ejemplo de contador y señales
│   │   │   ├── hero/            # Ejemplo de señales, computed y pipes
│   │   │   └── dragon/          # Listado interactivo de personajes
│   │   ├── app.ts               # Componente raíz
│   │   ├── app.html             # Layout general de la aplicación
│   │   ├── app.config.ts        # Proveedores globales
│   │   └── app.routes.ts        # Rutas de la aplicación
│   ├── index.html               # Documento HTML principal
│   ├── main.ts                  # Punto de entrada de Angular
│   └── styles.css               # Estilos globales
├── angular.json                 # Configuración de Angular CLI
├── package.json                 # Scripts y dependencias
└── tsconfig*.json               # Configuración de TypeScript
```

> El repositorio también incluye una carpeta `src/app/src/app` con una estructura adicional de páginas. La aplicación activa utiliza las páginas ubicadas directamente en `src/app/pages`, que son las referenciadas por `app.routes.ts`.

## Funcionamiento de la aplicación

La aplicación se inicia desde `src/main.ts` usando `bootstrapApplication`. El componente raíz `App` carga el `Navbar` y un `router-outlet`, donde Angular renderiza la página correspondiente a la ruta actual.

La configuración de `app.config.ts` registra el router con las rutas definidas en `app.routes.ts`:

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Counter` | Contador principal |
| `/hero` | `Hero` | Ejemplo de estado reactivo para un héroe |
| `/dragonball` | `Dragon` | Gestión de personajes y niveles de poder |
| Cualquier otra ruta | Redirección a `/` | Recuperación de rutas desconocidas |

El componente `Navbar` utiliza `routerLink` y `routerLinkActive` para cambiar de pantalla y marcar visualmente la ruta activa.

## Ejemplos incluidos

### Contador

La página `Counter` muestra dos valores:

- `counter`, una propiedad normal de la clase.
- `counterSignal`, un estado reactivo creado con `signal(10)`.

La interfaz permite incrementar, decrementar y reiniciar el contador. Este ejemplo muestra la diferencia entre actualizar una propiedad tradicional y actualizar una señal de Angular.

### Hero

La página `Hero` utiliza:

- `name` y `age` como señales.
- `heroDescription` como valor calculado mediante `computed`.
- `UpperCasePipe` para mostrar el nombre en mayúsculas.
- Métodos para cambiar el nombre, modificar la edad y restaurar los valores iniciales.

Valores iniciales:

```text
Nombre: Iron Man
Edad: 45
```

### Dragon Ball

La página `Dragon` mantiene una lista reactiva de personajes con la siguiente estructura:

```typescript
interface Character {
  id: number;
  name: string;
  power: number;
}
```

El usuario puede agregar nuevos personajes. Cada personaje nuevo recibe un identificador incremental, un nombre generado y un nivel de poder aleatorio.

La plantilla utiliza control flow moderno de Angular (`@for` y `@if`) para recorrer y filtrar visualmente los personajes. Los personajes con poder superior a 90 se muestran con una clase de peligro y los demás con una clase informativa.

## Requisitos

- Node.js compatible con Angular 22.
- npm 12 o una versión compatible.

Comprueba las versiones instaladas:

```bash
node --version
npm --version
```

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/radiohead42/Angular.git
cd Angular
npm install
```

## Servidor de desarrollo

Inicia la aplicación con:

```bash
npm start
```

También puedes utilizar Angular CLI directamente:

```bash
npx ng serve
```

Abre el navegador en:

```text
http://localhost:4200/
```

La aplicación se recarga automáticamente al modificar los archivos fuente.

## Compilación

Genera el build de producción con:

```bash
npm run build
```

Los artefactos compilados se guardan en el directorio `dist/`. La configuración de producción habilita el hash de archivos y define presupuestos para el tamaño del bundle inicial y de los estilos de componentes.

Para compilar continuamente con la configuración de desarrollo:

```bash
npm run watch
```

## Pruebas

Ejecuta las pruebas unitarias configuradas por Angular CLI y Vitest con:

```bash
npm test
```

O mediante:

```bash
npx ng test
```

## Generación de código

Puedes generar nuevos componentes, servicios u otros elementos con Angular CLI:

```bash
npx ng generate component pages/example/example
npx ng generate service services/example
```

Consulta todos los esquemas disponibles con:

```bash
npx ng generate --help
```

## Estilos

El proyecto utiliza Bootstrap 5.3.3 cargado desde `src/index.html` y estilos globales definidos en `src/styles.css`.

El archivo global actual personaliza el tamaño y peso de los elementos `dd`:

```css
dd {
  font-size: 20px;
  font-weight: bold;
}
```

## Estado del proyecto

Este proyecto funciona como una base de aprendizaje para Angular. Actualmente se centra en ejemplos de componentes, navegación, señales, computed values, pipes, eventos y renderizado condicional.

## Licencia

No se ha definido una licencia para este repositorio.
