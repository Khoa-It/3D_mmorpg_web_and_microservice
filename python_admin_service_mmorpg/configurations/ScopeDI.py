from controllers.admin_controller import AdminController
from repositories.admin_repository import AdminRepository

adminController = None
adminRepository = None

def create_all_scope(collection):
    global adminController
    global adminRepository
    adminRepository = AdminRepository(collection)
    adminController = AdminController(adminRepository)

def get_admin_controller():
    return adminController

def get_admin_repository():
    return adminRepository