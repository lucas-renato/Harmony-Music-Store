# Harmony Music Store 🎵
**Projeto:** Loja de artigos musicais online  
**Frontend:** Next.js + Tailwind CSS  
**Backend:** Django + Django REST Framework

##  Descrição
O Harmony Music Store é uma aplicação web que permite aos usuários navegar, buscar e comprar artigos musicais. O projeto foi desenvolvido como trabalho acadêmico, com o objetivo de praticar integração entre frontend moderno (Next.js) e backend robusto (Django), incluindo APIs REST para gerenciamento de produtos.

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
└── README.md     

## ⚡ Tecnologias
### Frontend
- Next.js  
- React  
- Tailwind CSS  

### Backend
- Python  
- Django  
- Django REST Framework  

## 🚀 Como rodar o projeto
### Frontend (Next.js)
1. Navegue até a pasta frontend: `cd frontend`  
2. Instale as dependências: `npm install`  
3. Rode o servidor de desenvolvimento: `npm run dev`  
4. Abra [http://localhost:3000](http://localhost:3000) no navegador  

### Backend (Django)
1. Navegue até a pasta backend: `cd backend`  
2. Crie e ative o ambiente virtual: `python -m venv venv` e `venv\Scripts\activate`  
3. Instale as dependências: `pip install -r requirements.txt`  
   > Se não tiver `requirements.txt`, instale manualmente: `pip install django djangorestframework`  
4. Rode as migrations: `python manage.py migrate`  
5. Inicie o servidor: `python manage.py runserver`  
6. O backend estará disponível em [http://localhost:8000](http://localhost:8000)  

## 🔧 Observações
- Frontend e backend são separados, mas integráveis via APIs REST  
- Mantenha `.gitignore` configurado para não subir `node_modules/` e `__pycache__/`  
- Ideal para estudos de integração fullstack
