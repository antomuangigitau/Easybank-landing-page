from flask import Flask
from flask_restful import Resource, Api, abort
from .models import Customer

app = Flask(__name__)
api = Api(app)

def find_customer(customer_id):
    query = Customer.query.filter_by(id=customer_id).first()

    if query:
        return query.format()
    else:
        abort(404, message="Customer {} doesn't exist".format(customer_id))


class Customer(Resource):
    def get(self, customer_id):
        customer = find_customer(customer_id)
        return customer


if __name__ == '__main__':
    app.run()
