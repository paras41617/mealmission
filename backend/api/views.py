import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth.models import User


class CreateDonationView(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.method == "POST":
            title_ = json.loads(request.body)["title"]
            text_ = json.loads(request.body)["text"]
            type_ = json.loads(request.body)["type"]
            veg_ = json.loads(request.body)["veg"]
            location_ = json.loads(request.body)["location"]
            username = json.loads(request.body)["username"]
            contributor_ = json.loads(request.body)["contributor"]
            user_ = User.objects.get(username=username)
            ans = False
            if veg_ == "veg":
                ans = True
            else:
                ans = False
            donation = Donation(
                user=user_,
                title=title_,
                text=text_,
                type=type_,
                veg=ans,
                location=location_,
                contributor=contributor_,
            )
            donation.save()
            user_.donations.add(donation)
            user_.save()
            return JsonResponse({"message": "success"}, status=200)
        else:
            return JsonResponse({"Error": "Method Not Allowed"}, status=405)


class PackageDonationsView(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.method == "POST":
            ans = []
            donations_package = Donation.objects.filter(type="packed").values()
            for donation__ in donations_package:
                if donation__.booked == False:
                    # ans.append(donation__)
                    temp = ""
                    if donation__.veg == True:
                        temp = "Veg"
                    else:
                        temp = "Non Veg"
                    ans.append({"id" : donation__.id , "title":donation__.title , "type":donation__.type , "veg":temp ,"location":donation__.location})
            return JsonResponse({"donations": ans}, status=200)
        else:
            return JsonResponse({"Error": "Method Not Allowed"}, status=405)


class InstantDonationsView(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.method == "POST":
            ans = []
            donations_instant = Donation.objects.filter(type="instant").values()
            for donation__ in donations_instant:
                if donation__.booked == False:
                    # ans.append(donation__)
                    temp = ""
                    if donation__.veg == True:
                        temp = "Veg"
                    else:
                        temp = "Non Veg"
                    ans.append({"id" : donation__.id , "title":donation__.title , "type":donation__.type , "veg":temp ,"location":donation__.location})

            return JsonResponse({"donations": ans}, status=200)
        else:
            return JsonResponse({"Error": "Method Not Allowed"}, status=405)


class CreateBuyView(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.method == "POST":
            donation_id = json.loads(request.body)["donation_id"]
            username = json.loads(request.body)["username"]
            user_ = User.objects.get(username=username)
            donation_ = Donation.objects.get(id=donation_id)
            order_ = Order(user=user_, donation=donation_)
            order_.save()
            donation_.booked = True
            donation_.orders.add(order_)
            donation_.save()
            return JsonResponse({"message": "success"}, status=200)
        else:
            return JsonResponse({"Error": "Method Not Allowed"}, status=405)


class UserDonationsView(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.method == "POST":
            username = json.loads(request.body)["username"]
            user_ = User.objects.get(username=username)
            donations = user_.donations.all() 
            ans = []
            for donation in donations:
                ans.append({donation , donation.orders.all()[0]})
            return JsonResponse({"donations": ans}, status=200)
        else:
            return JsonResponse({"Error": "Method Not Allowed"}, status=405)
