```md
# Grippi Campaign Analytics Dashboard

A full-stack **Campaign Analytics Dashboard** built as part of the Grippi Junior Full-Stack Developer Internship Assignment.  
The project demonstrates end-to-end development, including database design, backend API development, frontend UI, and cloud deployment.

---

## 🚀 Live Links

| Service | Link |
|--------|------|
| **Frontend (Vercel)** | https://your-frontend.vercel.app |
| **Backend (Railway)** | https://your-backend.up.railway.app |
| **API Endpoint** | https://your-backend.up.railway.app/campaigns |

> ⚠️ Replace the above URLs with your actual deployed links before submission.

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- Axios

### Backend
- FastAPI (Python)
- SQLAlchemy ORM
- PostgreSQL (Railway)

### Deployment
- Backend → Railway  
- Frontend → Vercel  

---

## 📁 Project Structure

```

grippi-dashboard/
│── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── requirements.txt
│
│── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │
│   ├── components/
│   │   ├── CampaignTable.tsx
│   │   ├── StatusFilter.tsx
│   │
│   ├── lib/
│   │   ├── api.ts
│   │
│   ├── types/
│   │   ├── campaign.ts
│   │
│   ├── .env.local
│
│── db.sql
│── README.md

````

---

## 📊 Features Implemented (As per Assignment)

### ✅ Frontend
- Campaign table with columns:
  - Campaign Name  
  - Status (Active / Paused)  
  - Clicks  
  - Cost  
  - Impressions  
- Status filter dropdown (All / Active / Paused)
- Clean light-theme UI with readable typography
- Proper loading and error states
- Reusable React components

### ✅ Backend (FastAPI)
- `GET /campaigns` endpoint returning 10 mock campaigns from PostgreSQL
- SQLAlchemy ORM for database interaction
- Proper CORS configuration to allow frontend access
- Structured and readable code

### ✅ Database (PostgreSQL)
- `campaigns` table created via `db.sql`
- 10 sample campaign records inserted
- Hosted on Railway PostgreSQL

### ✅ Deployment
- Backend deployed on Railway  
- Frontend deployed on Vercel  
- Environment variables configured properly on both platforms  

---

## 🧱 Database Setup (`db.sql`)

```sql
CREATE TABLE IF NOT EXISTS campaigns (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    status TEXT CHECK (status IN ('Active', 'Paused')) NOT NULL,
    clicks INTEGER NOT NULL,
    cost FLOAT NOT NULL,
    impressions INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO campaigns (name, status, clicks, cost, impressions)
VALUES
('Summer Sale', 'Active', 150, 45.99, 1000),
('Black Friday', 'Paused', 320, 89.50, 2500),
('Winter Clearance', 'Active', 210, 67.30, 1800),
('New Year Blast', 'Active', 400, 120.75, 5000),
('Festive Offer', 'Paused', 95, 30.00, 900),
('Spring Launch', 'Active', 300, 80.20, 3200),
('Flash Deal', 'Paused', 50, 15.10, 600),
('Holiday Special', 'Active', 275, 95.60, 4100),
('Weekend Sale', 'Active', 180, 55.40, 1500),
('Clearance Sale', 'Paused', 600, 200.99, 7500);
````

---

## 🏗️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/grippi-dashboard.git
cd grippi-dashboard
```

---

### 2️⃣ Setup Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file inside `backend/`:

```
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/grippi_db
```

Run the backend:

```bash
uvicorn main:app --reload
```

Backend will be available at:

```
http://127.0.0.1:8000
```

Test endpoint:

```
http://127.0.0.1:8000/campaigns
```

---

### 3️⃣ Setup Frontend (Next.js)

```bash
cd frontend
npm install
```

Create `.env.local` inside `frontend/`:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Run frontend:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## ☁️ Deployment Steps (Summary)

### Backend → Railway

1. Create PostgreSQL on Railway
2. Copy `DATABASE_URL`
3. Deploy backend from GitHub
4. Set:

   * **Build Command**: `pip install -r backend/requirements.txt`
   * **Start Command**:

     ```
     uvicorn backend.main:app --host 0.0.0.0 --port $PORT
     ```
5. Add `DATABASE_URL` in Railway Variables
6. Run `db.sql` on Railway Postgres

### Frontend → Vercel

1. Import GitHub repo
2. Set root directory as `frontend/`
3. Add environment variable:

   ```
   NEXT_PUBLIC_API_URL=https://your-backend.up.railway.app
   ```
4. Deploy

---

## 🎥 Loom Video Requirement (As per Assignment)

A single continuous screen recording covering:

* Database setup (`db.sql`)
* FastAPI backend code walkthrough
* Next.js frontend code walkthrough
* Live demo of working application
* Full screen sharing with face visible

---

## 📌 Submission Checklist

Ensure you include:

* ✅ GitHub Repository Link
* ✅ Live Backend Link (Railway)
* ✅ Live Frontend Link (Vercel)
* ✅ Loom Video Link
* ✅ Google Doc containing all submission links

---

## 👨‍💻 Author

**Yameesh Nayak**
B.Tech (IT) – 3rd Year

---

## 📜 License

This project is for educational and assignment purposes.

```
```
