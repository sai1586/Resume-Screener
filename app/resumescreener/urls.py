from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/upload_resume/', views.upload_resume, name='upload_resume'),
]
