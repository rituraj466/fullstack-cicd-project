# Full Stack Employee Management CI/CD

This repository contains a React frontend and a Node.js/Express backend with separate Jenkins pipelines.

## Services
- Frontend: React + Vite + Nginx, exposed on port 80.
- Backend: Node.js + Express, internal Docker port 5000.
- Nginx proxies `/api/*` requests to the backend container.

## Local run
Build the images first:
```bash
docker build -t fullstack-backend:latest ./backend
docker build -t fullstack-frontend:latest ./frontend
docker compose up -d
```
Open `http://localhost` in a browser.

## Jenkins jobs
Create two Pipeline jobs using Pipeline script from SCM:
- Frontend-CI-CD: Script Path `frontend/Jenkinsfile`
- Backend-CI-CD: Script Path `backend/Jenkinsfile`

Configure both jobs to use the GitHub repository and enable the GitHub hook trigger for GITScm polling. Add a GitHub repository webhook pointing to `http://JENKINS_PUBLIC_HOST:8080/github-webhook/`.

The pipelines check the latest commit's changed paths and deploy only their respective service (the first build deploys each service).
