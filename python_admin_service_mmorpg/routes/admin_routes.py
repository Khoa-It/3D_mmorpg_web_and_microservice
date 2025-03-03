from flask import Blueprint, jsonify, request

from configurations.ScopeDI import adminController, get_admin_controller
from responses.api_response import create_response

admin_routes = Blueprint('admin', __name__)

@admin_routes.route("/hello", methods=["GET"])
def hello():
    return jsonify({
        'message' : 'hello this is admin service',
        'data' : None,
    })

@admin_routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if 'email' not in data or 'password' not in data:
        return jsonify(create_response("","No data send",None)), 400
    email = data['email']
    password = data['password']
    controller = get_admin_controller()
    res = controller.login(email, password)
    return jsonify(res)

@admin_routes.route("/getAllUser", methods = ["GET"])
def getUsers():
    controller = get_admin_controller()
    return jsonify(controller.get_all_user())

@admin_routes.route("/banUser/<int:id>", methods = ["DELETE"])
def ban_user(id):
    controller = get_admin_controller()
    return jsonify(controller.ban_user(id))