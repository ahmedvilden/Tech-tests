from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager

""" If you’re starting a new project, it’s highly recommended to set up a custom user model, even if the default User model is sufficient for you. 
This model behaves identically to the default user model, but you’ll be able to customize it in the future if the need arises:"""

class CustomUser(AbstractUser):
    username = None
    fullname =  models.CharField(blank=True, max_length=50)
    email = models.EmailField(_('email address'), unique=True)
    company =  models.CharField(blank=True, max_length=50)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{8,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=16, blank=True) # validators should be a list
    image = models.ImageField(upload_to="user_pics", null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    
    

class CompanyProfile(models.Model):
    user = models.OneToOneField(CustomUser, related_name='company_profiles', on_delete=models.CASCADE)
    is_disabled = models.BooleanField(default=False)
    description = models.TextField()

    def __str__(self):
        return f"{self.user}"


class FreelanceProfile(models.Model):
    user = models.OneToOneField(CustomUser, related_name='freelance_profiles', on_delete=models.CASCADE)
    is_disabled = models.BooleanField(default=False)
    description = models.TextField()

    def __str__(self):
        return f"{self.user}"