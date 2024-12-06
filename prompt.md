# WeInvest - Guide de Développement

## 🎯 Objectif
Site web immobilier moderne avec :
- Performance optimale (App Router, Server Components, Route Handlers)
- SEO-friendly avec Metadata API
- Responsive design & Mobile-first
- Accessibilité WCAG 2.1
- Architecture DDD (Domain-Driven Design)

## 🛠 Stack Technique
Framework:
  nextjs: 14.1.0 (avec App Router)
  react: 18.2.0
  typescript: 5.3.3
  
Styling:
  tailwind: 3.4.1
  components: shadcn/ui
  animations: framer-motion
  fonts: Inter, Dancing Script
  
Database:
  type: PostgreSQL
  orm: Prisma
  cache: Redis

Authentication:
  auth.js: 5.0.0
  
State Management:
  tanstack-query: 5.0.0
  zustand: 4.5.0

## 📁 Structure des Dossiers
```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── acheter/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── atoms/
│   ├── molecules/
│   │   ├── Hero.tsx
│   │   └── PropertyCard.tsx
│   └── organisms/
│       ├── Header.tsx
│       └── Features.tsx
├── lib/
├── types/
└── utils/
```

## 🎨 Design System
Couleurs:
- Primary: #40E0D0 (Turquoise)
- Secondary: #FF8C42 (Orange)
- Text: gray-600, gray-800
- Background: white, gray-50

Typographie:
- Principale: Inter
- Accent: Dancing Script (class: font-handwriting)

Composants:
- Boutons: rounded-lg ou rounded-full
- Cards: rounded-xl avec shadow-md
- Inputs: rounded-lg avec focus:ring-1

## 📊 Modèles de Base de Données
```typescript
model Property {
  id            String     @id @default(cuid())
  title         String
  slug          String     @unique
  description   String     @db.Text
  price         Decimal    @db.Decimal(10,2)
  address       String
  city          String
  postalCode    String
  coordinates   Json?      // {lat: number, lng: number}
  surface       Int        // m²
  rooms         Int
  type          PropertyType
  features      String[]
  images        Image[]
  status        Status     @default(AVAILABLE)
  views         Int        @default(0)
  favorites     User[]     @relation("UserFavorites")
  createdBy     User       @relation(fields: [userId], references: [id])
  userId        String
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt

  @@index([city, type, status])
  @@fulltext([title, description])
}
```

## 🔧 Fonctionnalités Clés
Core Features:
- Server-Side Rendering (SSR)
- Image Optimization (next/image)
- API Routes & Server Actions
- Infinite Scroll
- Real-time Search
- Favoris & Alertes
- Multi-langue (next-intl)

## 🧪 Tests
- Jest pour les tests unitaires
- Cypress pour les tests E2E
- React Testing Library pour les tests de composants

## 📱 Responsive Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## 🔒 Sécurité
- Authentication avec Auth.js
- CSRF Protection
- Rate Limiting
- Input Validation
- XSS Prevention

## 🚀 Performance
- Images optimisées avec next/image
- Fonts optimisés avec next/font
- Code splitting automatique
- Prefetching intelligent
- Cache-Control headers

## 📈 Analytics & SEO
- Metadata API pour le SEO
- OpenGraph images
- Sitemap.xml généré automatiquement
- robots.txt configurable
- Google Analytics (à implémenter)