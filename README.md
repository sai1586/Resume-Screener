
# Resume Screener

Resume Screener is a web application designed to help teams analyze resumes against job descriptions, identify issues, and suggest changes to improve candidate profiles. Built with Python and Django, it streamlines the resume review process for recruiters and hiring teams.

## Project Overview
- Upload a resume and a job description
- The system analyzes both and returns:
  - Issues or mismatches between the resume and job description
  - Suggestions for improving the resume to better fit the job
- Designed for collaborative team use

## Features
- Resume and job description upload
- Automated analysis and feedback
- Issue detection and change suggestions
- User authentication and team management
- Dashboard for tracking reviews

## Tech Stack
- Python 3.x
- Django (latest stable version)
- HTML, CSS, JavaScript (frontend)
- SQLite (default, can use PostgreSQL/MySQL)

## Getting Started
1. Clone the repository:
	```bash
	git clone git@github.com:sai1586/Resume-Screener.git
	cd Resume-Screener
	```


2. Build and run the application using Docker Compose (Django backend and React frontend):
	```bash
	docker-compose up --build
	```

3. Access the applications at:
	- Django backend: http://localhost:1586
	- React frontend: http://localhost:3000

No local Python or Node setup is required. All dependencies and services run inside Docker containers.

## Usage
- Log in and upload a resume and job description
- Review the issues and suggestions returned
- Edit the resume as needed based on feedback

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
