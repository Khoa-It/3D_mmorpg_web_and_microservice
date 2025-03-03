from responses.api_response import create_response
import requests

class AdminController:
    def __init__(self, repository):
        self.repository = repository

    def login(self, email, password):
        result = self.repository.getByAccount(email, password)
        return create_response(
            "Get account success",
            "Error when get account" ,
            result,
        )

    def get_all_user(self):
        aspnet_api = 'https://localhost:7047/api/User/all'
        try:
            response = requests.get(aspnet_api, verify=False)
            return response.json()
        except requests.exceptions.RequestException as e:
            return create_response(
                "python - Get all user success",
                "python - Get all user error",
                None
            )
    def ban_user(self, id):
        aspnet_api = f'https://localhost:7047/api/User/{id}'
        try:
            response = requests.delete(aspnet_api, verify=False)
            return response.json()
        except requests.exceptions.RequestException as e:
            return create_response(
                "python - delete user success",
                "python - delete user error",
                None
            )