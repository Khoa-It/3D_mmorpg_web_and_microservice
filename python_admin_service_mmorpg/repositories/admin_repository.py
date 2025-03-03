class AdminRepository:
    def __init__(self, collection):
        self.collection = collection

    def getByAccount(self, email, password):
        result = self.collection.find()
        for document in result:
            if document['email'] == email and document['password'] == password:
                return {
                    'email' : email,
                    'password' : password,
                    'username' : document['username']
                }
        return None
