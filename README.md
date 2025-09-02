
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
	git clone <your-repo-url>
	cd Resume_Screener
	```
2. Create a virtual environment and activate it:
	```bash
	python3 -m venv venv
	source venv/bin/activate
	```
3. Install dependencies:
	```bash
	pip install -r requirements.txt
	```
4. Run migrations:
	```bash
	python manage.py migrate
	```
5. Start the development server:
	```bash
	python manage.py runserver
	```

## Usage
- Log in and upload a resume and job description
- Review the issues and suggestions returned
- Edit the resume as needed based on feedback

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
