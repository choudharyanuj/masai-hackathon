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
        fieldnames = ['id','name','user_name','email','password','gender','skill1','skill2','skill3']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for j in range(len(user_data)):
            writer.writerow({'id': user_data[j]["id"],"name": user_data[j]["name"],'email':user_data[j]["email"],'user_name':user_data[j]["user_name"],"password":user_data[j]["password"],'gender':user_data[j]["gender"],'skill1':user_data[j]["skill1"],'skill2':user_data[j]['skill2'],'skill3':user_data[j]['skill3']})

@app.route('/create', methods=['POST'])
def create_users():
    list_user = list()
    list_user = read_users_csv()
    name = request.json["name"]
    email = request.json["email"]
    user_name=request.json["user_name"]
    password=request.json["password"]
    gender= request.json["gender"]
    skill1=request.json["skill1"]
    skill2=request.json['skill2']
    skill3=request.json['skill3']
    if len(list_user) != 0:
        list_user.append({"id":int(list_user[-1]['id'])+1,"name":name,"email":email,"user_name":user_name,"password":password,"gender":gender,"skill1":skill1,"skill2":skill2,"skill3":skill3})
    else:
        list_user.append({"id":1,"name":name,"email":email,"user_name":user_name,"password":password,"gender":gender,"skill1":skill1,'skill2':skill2,'skill3':skill3})
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
            user_details.append({"id": i["id"], "name": i["name"],"email":i["email"], "user_name": i["user_name"],"gender":i["gender"],"skill1":i["skill1"],"skill2":i['skill2'],'skill3':i["skill3"]})
    return json.dumps(user_details)

@app.route('/edit/<int:id>', methods=['POST'])
def edit_user(id):
    user_list = list()
    user_list = read_users_csv()
    arr = list()
    user_name = request.json["user_name"]
    email = request.json["email"]
    password = request.json["password"]
    skill1 = request.json["skill1"]
    skill2 = request.json['skill2']
    skill3 = request.josn['skill3']
    for i in range(len(user_list)):
        if int(user_list[i]["id"]) == id:
            arr.append({"id":id,"name":user_list[i]["name"],"user_name":user_name,"email":email,"password":password,"gender":user_list[i]["gender"],"skill1":skill1,'skill2':skill2,'skill3':skill3})
        else:
            arr.append({"id":user_list[i]["id"],"name":user_list[i]["name"],"email":user_list[i]["email"],"user_name":user_list[i]["user_name"],"password":user_list[i]["password"],"gender":user_list[i]["gender"],"skill1":user_list[i]["skill1"],"skill2":user_list[i]["skill2"],"skill3":user_list[i]["skill3"]})
    write_users_csv(arr)
    return json.dumps("Details Modified Successfully")

@app.route('/news_feed', methods=['POST'])
def news_feed():
    available_user= list()
    available_user = read_users_csv()
    arr = list()
    skill = request.json["skill"]
    for i in range(len(available_user)):
        if str(available_user[i]["skill1"])== str(skill) or str(available_user[i]["skill2"]) == str(skill) or str(available_user[i]["skill3"]) == str(skill):
            arr.append({"id":available_user[i]["id"],"name":available_user[i]["name"],"user_name":available_user[i]["user_name"],"email":available_user[i]["email"],"password":available_user[i]["password"],"gender":available_user[i]["gender"],"skill1":available_user[i]["skill1"],'skill2':available_user[i]["skill2"],'skill3':available_user[i]["skill3"]})
        # else:
        #     arr.append({"id":available_user[i]["id"],"name":available_user[i]["name"],"email":available_user[i]["email"],"user_name":available_user[i]["user_name"],"password":available_user[i]["password"],"gender":available_user[i]["gender"],"skill1":available_user[i]["skill1"],"skill2":available_user[i]["skill2"],"skill3":available_user[i]["skill3"]})
    # write_users_csv(arr)
    return json.dumps(arr)

@app.route('/show/<int:id>',methods = ['GET'])
def show_user(id):
    read_users_csv()
    personal_data = []
    for i in user_data:
        if i["id"] == str(id):
            personal_data.append({"id":i["id"],"name":i["name"],"user_name":i["user_name"],"email":i["email"],"gender":i["gender"],"password":i["password"],"skill1":i["skill1"],"skill2":i["skill2"],"skill3":i["skill3"]})
    return json.dumps(personal_data)

if __name__ == "__main__":
    app.run(debug = True)