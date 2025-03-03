from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

from configurations.ScopeDI import create_all_scope
from routes import register_routes

app = Flask(__name__)
CORS(app)

MONGO_URI = 'mongodb+srv://khoa:admin123@cluster0.rzbbz4l.mongodb.net/MMORPG_GAME_ADMIN?retryWrites=true&w=majority&appName=Cluster0'
client = MongoClient(MONGO_URI)

db = client.MMORPG_GAME_ADMIN
admin_collection = db.admins

create_all_scope(collection=admin_collection)
register_routes(app)

@app.route('/')
def index():
    return "Flask app is running with SQLite!"

if __name__ == '__main__' :
    app.run(debug=True)