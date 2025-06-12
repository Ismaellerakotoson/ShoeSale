# 🛍️ SUN.CO – Application Web E-commerce de Chaussures

Développé avec **React + Vite**, **TailwindCSS**, **Node.js**, **Express**, et **MySQL**  
Projet réalisé dans le cadre du module **Tech Web M1 – 2025**

---

## 📌 Objectif du Projet

Développer une application web de vente de chaussures en se basant sur la maquette Figma fournie, avec :

- Une **page d’accueil**
- Une **page produit**
- Une fonctionnalité **ajout au panier**
- Un **backend REST API** documenté avec **Swagger**
- L' opération d’**ajout de produits** se fait via **Swagger uniquement**

---

## 🎨 Maquette Figma

🔗 [Voir le design sur Figma](https://www.figma.com/design/Wu5kcbOn63BjBdwZZ3iOS6/Frontend-Challenge-(Community)?node-id=0-1&p=f&t=kSQivD5q2sYgEkpv-0)

---

## ⚙️ Technologies Utilisées

### Frontend – React + Vite

- ● [React](https://reactjs.org/)
- ● [Vite](https://vitejs.dev/)
- ● [TailwindCSS](https://tailwindcss.com/)
- ● [Axios](https://axios-http.com/)
- ● [Framer Motion](https://www.framer.com/motion/) – Animations
- ● [Lucide React](https://lucide.dev/) – Icônes modernes
- ● [React Toastify](https://fkhadra.github.io/react-toastify/introduction) – Notifications élégantes

### Backend – Node.js + Express

- ● [Express.js](https://expressjs.com/)
- ● [MySQL2](https://www.npmjs.com/package/mysql2)
- ● [dotenv](https://www.npmjs.com/package/dotenv)
- ● [CORS](https://www.npmjs.com/package/cors)
- ● [express-validator](https://express-validator.github.io/)
- ● [bcrypt](https://www.npmjs.com/package/bcrypt)
- ● [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- ● [Multer](https://www.npmjs.com/package/multer)
- ● [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

---

## 🧪 Fonctionnalités Clés

### 🎯 Frontend

- ● Affichage de la liste des produits avec image, prix, description
- ● Intégration fidèle du design Figma
- ● Ajout de produit dans le panier (stocké côté client)
- ● Interface responsive avec animations fluides
- ● Design minimaliste et moderne avec Tailwind

### 🛠️ Backend

- ● API RESTful structurée avec Express
- ● Connexion à la base de données `shoesale` (MySQL)
- ● Endpoints pour ajouter, supprimer, et récupérer les produits
- ● Documentation Swagger intégrée

> ✅ **Remarque :** Les opérations **d’ajout** et **de suppression** de produits se font directement dans **Swagger**, à des fins de test et de démonstration.

---

## 🚀 Installation & Lancement

### Prérequis

- Node.js
- MySQL

### Étapes

1. **Cloner le projet**

```bash
git clone https://github.com/yr-tahirisoa/projet_m1-tect-web.git
cd projet_m1-tect-web
```

2. **Configurer la base de données**

Créer une base `shoesale` dans MySQL.  
Ajouter un fichier `.env` dans `backend/` :

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=shoesale
```

3. **Lancer le backend**

```bash
cd backend
npm install
node server.js
```

4. **Lancer le frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📚 Documentation API

📎 Accessible via : [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

---

## 🗃️ Structure de la base de données

- ● product : contient les informations sur les produits.
- ● user : stocke les informations des utilisateurs, notamment pour savoir qui a passé une commande (utilisé par défaut).
- ● cart : représente le panier de chaque utilisateur, où sont ajoutés les produits avant la commande.
- ● order_items : liste les produits contenus dans chaque commande, avec leurs quantités.
- ● order : regroupe les informations d’une commande passée par un utilisateur.

## ✅ Conformité au Cahier des Charges

- ✔️ Design Figma respecté
- ✔️ Frontend moderne avec composants réutilisables
- ✔️ API REST documentée avec Swagger
- ✔️ Fonctionnalités implémentées selon spécifications
- ✔️ Responsive design avec animations

---

## 📸 (Optionnel)

Ajoutez ici des captures d’écran de l’application si vous en avez.
