import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

logger = logging.getLogger(__name__)

@csrf_exempt
def upload_resume(request):
    logger.info(f"Full request object: {request}")
    if request.method == 'POST':
        resume_file = request.FILES.get('resume')
        job_description = request.POST.get('job_description')
        logger.info(f"Received resume file: {resume_file}")
        logger.info(f"Received job description: {job_description}")
        if resume_file:
            # Read file content (for demonstration, not recommended for large files)
            file_content = resume_file.read()
            logger.info(f"Resume file size: {len(file_content)} bytes")
            # You can process or save the file here
            return JsonResponse({'status': 'success', 'filename': resume_file.name, 'size': len(file_content)})
        else:
            logger.error("No resume file received.")
            return JsonResponse({'status': 'error', 'message': 'No resume file received.'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'}, status=405)
