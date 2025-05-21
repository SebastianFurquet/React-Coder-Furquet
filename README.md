# 🛠️ Web Productos

Aplicación web desarrollada en **React JS** con **Vite** y **Bootstrap**, orientada a mostrar un catálogo de repuestos de vehículos, navegar entre categorías y visualizar detalles individuales de productos.

---

## ⚙️ Tecnologías utilizadas

- ⚛️ React 19
- ⚡ Vite 6
- 🎨 Bootstrap 5.3 + Bootstrap Icons
- 🧭 React Router DOM 7.5
- 📦 Firebase (auth, firestore, etc.)
- 📏 ESLint (React Hooks, SWC)

---

## 📁 Estructura del proyecto

```bash
src/
├── assets/               # Imágenes o recursos estáticos
├── Components/           # Componentes reutilizables de la interfaz
├── context/              # Contextos para manejo global (ej. Carrito)
├── data/                 # Archivos .json con datos simulados
├── firebase/             # Configuración de Firebase
├── helpers/              # Funciones auxiliares (pedirDatos, transformar textos)
├── App.jsx               # Componente raíz
├── main.jsx              # Punto de entrada
```

---

## 🧩 Componentes de la aplicación

| Componente                  | Función principal                                                                 |
|-----------------------------|------------------------------------------------------------------------------------|
| `Carrito.jsx`               | Muestra el contenido del carrito, permite modificar o eliminar ítems.             |
| `CartWidget.jsx`            | Ícono del carrito en la Navbar, muestra cantidad de productos seleccionados.      |
| `Checkout.jsx`              | Formulario para completar la compra y generar la orden.                          |
| `Contacto.jsx`              | Formulario de contacto para enviar mensajes a la empresa.                         |
| `Item.jsx`                  | Renderiza un solo producto dentro de una lista.                                  |
| `ItemCount.jsx`             | Permite seleccionar la cantidad deseada de un producto.                          |
| `ItemDetail.jsx`            | Muestra todos los detalles de un producto individual.                            |
| `ItemDetailContainer.jsx`   | Obtiene datos (por ID) y los pasa a `ItemDetail`.                                |
| `ItemList.jsx`              | Mapea y muestra una lista de productos (`Item`).                                 |
| `ItemListContainer.jsx`     | Obtiene productos (por categoría o todos) y se los pasa a `ItemList`.            |
| `NavBar.jsx`                | Barra de navegación principal de la aplicación.                                  |
| `Nosotros.jsx`              | Página institucional con información sobre la empresa.                           |

---

## 🚀 ¿Cómo ejecutar el proyecto?

1. Cloná este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/web-repuestos.git
   cd web-repuestos
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Iniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🌐 Funcionalidades

- Vista general del catálogo de productos.
- Navegación por categorías con React Router.
- Visualización detallada por producto.
- Agregado al carrito con selección de cantidades.
- Formulario de contacto y página institucional.
- Proceso de checkout.
- Responsive con Bootstrap.

---


¡Gracias por visitar! ⭐
