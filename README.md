# 🛒 Roro Cart Practice

> Aplicación de carrito de compras moderno construida con React, TypeScript, Redux Toolkit y Tailwind CSS

## 📋 Descripción

Sistema de carrito de compras para una tienda de postres que permite agregar productos, gestionar cantidades, visualizar el total de la orden y confirmar pedidos. Desarrollado con arquitectura escalable y mejores prácticas de React.

## ✨ Características

- ✅ Agregar y eliminar productos del carrito
- ✅ Incrementar y decrementar cantidades
- ✅ Cálculo automático de totales
- ✅ Confirmación de orden con modal
- ✅ Responsive design
- ✅ Gestión de estado con Redux Toolkit
- ✅ TypeScript para type-safety
- ✅ Custom hooks reutilizables

## 🛠️ Tecnologías

- **React 19.2** - Librería UI
- **TypeScript 5.9** - Tipado estático
- **Redux Toolkit 2.11** - Gestión de estado
- **Tailwind CSS 4.1** - Estilos
- **Vite 7.2** - Build tool y dev server

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── features/              # Módulos por funcionalidad
│   ├── cart/             # Carrito de compras
│   │   ├── components/   # Componentes del carrito
│   │   ├── hooks/        # Custom hooks
│   │   ├── types/        # TypeScript types
│   │   ├── cartSlice.ts  # Redux slice
│   │   └── cartSelectors.ts
│   ├── order/            # Confirmación de órdenes
│   └── products/         # Catálogo de productos
├── shared/               # Componentes compartidos
│   ├── hooks/           # Hooks globales
│   ├── layouts/         # Layouts
│   └── utils/           # Utilidades
├── store/               # Configuración Redux
└── data/               # Datos estáticos
```

## 🏗️ Arquitectura

### **Feature-based Structure**
Cada feature es independiente con sus componentes, hooks, tipos y lógica de negocio.

### **Redux Toolkit**
- Slices modulares
- Selectores memoizados
- Acciones tipadas

### **Custom Hooks**
- `useCartItem` - Gestión de items individuales
- `useKeyPress` - Manejo de eventos de teclado

### **Componentes Atómicos**
Componentes pequeños, reutilizables y testeables:
- `ProductCard`
- `CartItem`
- `OrderTotal`
- `EmptyCart`

## 🎯 Mejores Prácticas Aplicadas

- ✅ Separación de concerns (UI, lógica, estado)
- ✅ Custom hooks para reutilización
- ✅ Selectores Redux para performance
- ✅ TypeScript estricto
- ✅ Componentes puros y presentacionales
- ✅ Keys únicas en listas (item.id)
- ✅ useCallback para optimización
- ✅ Co-localización de código relacionado

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter ESLint
```

## 🎨 Características de UI

- Diseño responsive (mobile-first)
- Animaciones y transiciones suaves
- Modal de confirmación con overlay
- Estados vacíos informativos
- Controles de cantidad intuitivos
- Indicador visual de items seleccionados

## 🔜 Posibles Mejoras Futuras

- [ ] Persistencia en localStorage
- [ ] Tests unitarios (Vitest)
- [ ] Tests E2E (Playwright)
- [ ] Animaciones con Framer Motion
- [ ] Modo oscuro
- [ ] Internacionalización (i18n)
- [ ] Storybook para componentes

## 📄 Licencia

Este proyecto es de práctica educativa.

---
