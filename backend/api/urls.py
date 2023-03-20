from django.urls import path,include
from .views import CreateDonationView , PackageDonationsView , InstantDonationsView , CreateBuyView , UserDonationsView

urlpatterns = [
    path("create_donation/", CreateDonationView.as_view()),
    path("packed_donations/", PackageDonationsView.as_view()),
    path("instant_donations/", InstantDonationsView.as_view()),
    path("buy/", CreateBuyView.as_view()),
    path("user_donations/", UserDonationsView.as_view())
]