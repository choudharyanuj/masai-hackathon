import json
import csv
from flask import Flask
from flask import request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
def read_users_csv():
    global user_data
    user_data = list()
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            user_data.append(row)
    return user_data

def write_users_csv(user_data):
    with open('data/users.csv', 'w') as csvfile:
        fieldnames = ['id','name','user_name','email','password','gender','language']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for j in range(len(user_data)):
            writer.writerow({'id': user_data[j]["id"],'name': user_data[j]["name"],'email':user_data[j]["email"],'user_name':user_data[j]["user_name"],"password":user_data[j]["password"],'gender':user_data[j]["gender"],'language':user_data[j]["language"]})
    
# @app.route('/home')
# def show_users():
#     read_users_csv()
#     global total_details
#     total_details = []
#     for i in user_data:
#         for j in users_address:
#             if i["id"] == j["user_id"]:
#                 total_details.append({"id": i["id"], "user_id": j["user_id"], "name": i["name"],"mobile": i["mobile"], "email": i["email"], "line_1": j["line_1"], "city": j["city"], "pincode":j["pincode"]})
#     return json.dumps(total_details)

@app.route('/create', methods=['POST'])
def create_users():
    list_user = list()
    list_user = read_users_csv()
    name = request.json["name"]
    email = request.json["email"]
    user_name=request.json["user_name"]
    password=request.json["password"]
    gender= request.json["gender"]
    language=request.json["language"]
    if len(list_user) != 0:
        list_user.append({"id":int(list_user[-1]['id'])+1,"name":name,"email":email,"user_name":user_name,"password":password,"gender":gender,"language":language})
    else:
        list_user.append({"id":1,"name":name,"email":email,"user_name":user_name,"password":password,"gender":gender,"language":language})
    write_users_csv(list_user)
    return json.dumps({'response':"User Created Sussessfully"})

@app.route('/login', methods=['POST'])
def login():
    read_users_csv()
    email = request.json["email"]
    password = request.json["password"]
    global user_details
    user_details = []
    for i in user_data:
        if i["email"] == str(email) and i["password"] == str(password):
            user_details.append({"id": i["id"], "name": i["name"],"email":i["email"], "user_name": i["user_name"],"gender":i["gender"],"language":i["language"]})
            response = user_details
        else:
            response = "Please Enter Valid Login Id and Password"
    return json.dumps(response)

@app.route('/edit/<int:id>', methods=['POST'])
def edit_user(id):
    user_list = list()
    user_list = read_users_csv()
    arr = list()
    user_name = request.json["user_name"]
    email = request.json["email"]
    password = request.json["password"]
    language = request.json["language"]
    for i in range(len(user_list)):
        if int(user_list[i]["id"]) == id:
            arr.append({"id":id,"user_name":user_name,"email":email,"password":password,"language":language})
        else:
            arr.append({"id":user_list[i]["id"],"name":user_list[i]["name"],"email":user_list[i]["email"],"user_name":user_list[i]["user_name"],"gender":user_list[i]["gender"],"language":user_list[i]["language"]})
    write_users_csv(arr)
    return json.dumps("Details Modified Successfully")

# @app.route('/delete/<int:id>', methods=['POST'])        
# def delete_user(id):
#     user_list = list()
#     user_list = read_users_csv()
#     arr = list()
#     for i in range(len(user_list)):
#         if int(user_list[i]["id"]) != id:
#             arr.append({"id":user_list[i]["id"],"name":user_list[i]["name"],"mobile":user_list[i]["mobile"],"email":user_list[i]["email"]})
#     write_users_csv(arr)
#     return json.dumps("User Deleted Successfully")