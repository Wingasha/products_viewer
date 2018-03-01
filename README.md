#Install requirements for frontend and backend

in /backend run:
pip install -r requirements.txt

in /frontend run:
npm install

#Init the data base

in /backend run:
python manage.py makemigrations
python manage.py migrate

#Run servers

in /backend run:
python manage.py runserver

in /frontend run:
npm run dev
