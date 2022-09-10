from flask import Flask
from flask_restful import Resource, Api, abort
from .models import setup_db, Customer

database_path = 'sqlite:///./bank.db'
app = Flask(__name__)
api = Api(app)
setup_db(app, database_path)

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

    def put(self, customer_id):
        customer = find_customer(customer_id)
        //Not thru

api.add_resource(Customer, '/customer/<customer_id>')

if __name__ == '__main__':
    app.run()
