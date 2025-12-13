# portfolio/urls.py
from django.contrib import admin
from django.urls import path
from portfolio_site import views  # Correct import based on your project structure

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin interface URL
    path('', views.home, name='home'),  # Home page URL
    path('projects/', views.projects, name='projects'),  # Projects page URL
    path('contact/', views.contact, name='contact'),  # Contact page URL
]
