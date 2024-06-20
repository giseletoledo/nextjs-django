# Estudos de integração nextjs com django no backend

## Telas
Frontend criado com Nextjs na versão 14 com API Route e Django 5.0.6
* informações detalhadas sobre instalação no readme do frontend 

### Project Structure

nextjsdjango/
backend/
├── backend/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── ...
├── contacts/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── manage.py
└── ...

landing-page/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Items.tsx
│   │   │   ├── CallToAction.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── page.tsx
│   └── next-env.d.ts
├── next.config.mjs
└── tsconfig.json
├── .gitignore
├── README.md


### Technologies Used

- Frontend (Next.js 14)
- React 18
- TypeScript
- Axios
- React-Modal
- CSS for styling
- Backend (Django)
- Django 5.0.6
- Django Rest Framework

### Setup Instructions

Clone the repository
git clone <repository_url>
cd landing-page


### Backend Setup

Navigate to the backend directory
```
cd backend
```
Create a virtual environment and activate it

```python -m venv env
source env/bin/activate  # On Windows, use `env\Scripts\activate`
```
### Install the required dependencies

```
pip install -r requirements.txt
```

Apply migrations

```
python manage.py migrate
```

Run the Django development server
```
python manage.py runserver
```
### Frontend Setup

Navigate to the landing-page directory 

```
cd ../landing-page
```

### Install the required dependencies

```
npm install
```
Run the Next.js development server

```
npm run dev
```

<img src="https://github.com/giseletoledo/nextjsdjango/blob/main/imagens/landing-pagenextjs.png" alt="print do topo da tela" />
<img src="https://github.com/giseletoledo/nextjsdjango/blob/main/imagens/landing_page_footer.png" alt="print do footer" />

<img src="https://github.com/giseletoledo/nextjsdjango/blob/main/imagens/modal_landing_page.png" alt="print do footer" />