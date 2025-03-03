def create_response(success, err, data):
    mess = err if data is None else success
    return {
        'message' : mess,
        'data' : data
    }