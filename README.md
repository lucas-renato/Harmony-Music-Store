# Harmony Music Store 🎵

**Projeto:** Loja de artigos musicais online  
**Frontend:** Next.js + Tailwind CSS  
**Backend:** Django + Django REST Framework  

---

## 📖 Descrição
O Harmony Music Store é uma aplicação web que permite aos usuários navegar, buscar e comprar artigos musicais.  
O projeto foi desenvolvido como trabalho acadêmico, com o objetivo de praticar integração entre **frontend moderno (Next.js)** e **backend robusto (Django)**, incluindo APIs REST para gerenciamento de produtos.

---

## 🗂 Estrutura do Projeto
Harmony-Music-Store/  
├── frontend/        # Projeto Next.js (Interface do usuário)  
│   ├── package.json  
│   ├── src/  
│   └── ...  
├── backend/         # Projeto Django (API REST e gerenciamento de dados)  
│   ├── manage.py  
│   ├── backend/  
│   └── ...  
└── README.md        # Este arquivo  

---

## ⚡ Tecnologias

### Frontend
- [Next.js](https://nextjs.org/)  
- [React](https://reactjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  

### Backend
- [Python](https://www.python.org/)  
- [Django](https://www.djangoproject.com/)  
- [Django REST Framework](https://www.django-rest-framework.org/)  

---

## 🚀 Como rodar o projeto

### Frontend (Next.js)
1. Navegue até a pasta frontend:
   ```bash
   cd frontend
Instale as dependências:

bash
Copiar código
npm install
Rode o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Abra http://localhost:3000 no navegador.

Backend (Django)
Navegue até a pasta backend:

bash
Copiar código
cd backend
Crie e ative o ambiente virtual:

bash
Copiar código
python -m venv venv
venv\Scripts\activate
Instale as dependências:

bash
Copiar código
pip install -r requirements.txt
Se não tiver requirements.txt, instale manualmente:

bash
Copiar código
pip install django djangorestframework
Rode as migrations:

bash
Copiar código
python manage.py migrate
Inicie o servidor de desenvolvimento:

bash
Copiar código
python manage.py runserver
O backend estará disponível em http://localhost:8000
