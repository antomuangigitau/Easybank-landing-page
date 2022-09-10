from flask import Flask
from flask_restful import Resource, Api
from .models import Customer

app = Flask(__name__)
api = Api(app)

def find_customer(customer_id):
    query = Customer.query.get(customer_id)

    if query:
        return query
    else:
        abort(404, message="Customer {} doesn't exist".format(customer_id))


class Customer(Resource):
    def get(self, customer_id):
        customer = find_customer(customer_id)
        return customer


if __name__ == '__main__':
    app.run()
