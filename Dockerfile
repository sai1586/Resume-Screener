# Start with Ubuntu 20.04 base image
FROM ubuntu:20.04

# Prevent timezone prompt during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update system and install Python + pip + venv
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv python3-dev build-essential && \
    rm -rf /var/lib/apt/lists/*


# Set work directory
WORKDIR /app

# Create a virtual environment
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"


# Copy requirements first (for caching)
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt


# Copy the Django project files
COPY . .

# Expose Django port
EXPOSE 8000

# Run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
