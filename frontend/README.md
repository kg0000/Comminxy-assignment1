
# Emotion Journal

A simple journaling app where you can pick an emotion, write a short note, and save it. The entries are stored in a small SQLite database and the frontend displays everything in a clean, minimal journal-style layout.


## What it does

* Choose an emotion from a dropdown
* Add a note for the day
* Save it to the database
* See all previous entries listed below


## Tech Used

**Frontend:** React, Tailwind, Axios
**Backend:** Node.js, Express, SQLite
**Database:** Local SQLite file


## Project Structure


emotion-journal/
  backend/
    server.js
    db.js
    journal.db
    models/
    routes/

  frontend/
    src/
      App.js
      EntryForm.js
      index.js
      App.css




## Running the Backend


cd backend
yarn install
yarn start


Backend runs on **[http://localhost:5000](http://localhost:5000)**



## API Routes

**GET /entries** – fetch all saved entries
**POST /entries** – add a new entry
Body example:


{
  "emotion": "Happy",
  "note": "Had a good day."
}


## Running the Frontend


cd frontend
yarn install
yarn start


Frontend runs on **[http://localhost:3000](http://localhost:3000)**

The frontend will automatically pull data from the backend.



## Deployment Notes

* Use `process.env.PORT` on the backend if hosting it
* SQLite file can be committed normally for this project
* Update API URL inside the frontend before deploying
* Frontend can be deployed on Netlify/Vercel, backend on Render/Railway


## Extra Ideas 

* Mood stats
* Search/filter entries
* Dark mode
* Emoji-based emotions

