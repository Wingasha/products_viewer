## Install dependences for frontend and backend

in /backend run:
```zsh
pip install -r requirements.txt
```

in /frontend run:
```zsh
➜ npm install
```

## Init the data base

in /backend run:
```zsh
➜ python manage.py makemigrations
➜ python manage.py migrate
```

## Run servers

in /backend run:
```zsh
➜ python manage.py runserver
```

in /frontend run:
```zsh
➜ npm run dev
```

# Next go to http://localhost:8080/
