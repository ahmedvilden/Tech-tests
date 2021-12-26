from django.contrib import admin
from django.urls import path,re_path, include

from allauth.account.views import confirm_email
from dj_rest_auth.registration.views import VerifyEmailView
from users.views import FreelanceRegisterView

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Identity API",
      default_version='v1',
      description="A web API for Authentication and User Profile creation.",
   ),
   public=False,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')), 
    path('api/v1/auth/', include('dj_rest_auth.urls')),
    path('api/v1/auth/freelance-registration/', FreelanceRegisterView.as_view(), name='rest_register'),

    path('api/v1/auth/registration/', include('dj_rest_auth.registration.urls')),
    re_path(r'registration/account-confirm-email/', VerifyEmailView.as_view(),name='account_email_verification_sent'),
    re_path(r'registration/account-confirm-email/(?P<key>[-:\w]+)/', VerifyEmailView.as_view(),name='account_confirm_email'),
    
            #Swagger Doc
    path('swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
