from flask import Flask, request
from flask_restful import Resource, Api, abort, reqparse
from models import setup_db, Customer, Account
from typing import Union

database_path = 'sqlite:////tmp/banks.db'
app = Flask(__name__)
api = Api(app)
setup_db(app, database_path)

# parser = reqparse.RequestParser()
# parser.add_argument()

# Helper functions to avoid redundancy when querying from the database
def find_customer(customer_id):
    query = Customer.query.filter_by(id=customer_id).first()

    # Turn this method into a global method to be able to use it for all queries
    # in short, rename it to find() and do the necessary work

    if query:
        return query.format()
    else:
        abort(404, message="Customer {} doesn't exist".format(customer_id))

def get_all(resource: Union[Customer, Account]):
    all_query = resource.query.all()

    if all_query:
        return [query.format() for query in all_query]
    else:
        abort(404, message="Resource not found")

def delete_resource(resource: Union[Customer, Account], resource_id):
    query = resource.query.filter_by(id=resource_id).first()

    if query:
        query.delete_record()
    else:
        abort(404, message="{} with id: {} does not exist".format(query.__class__, resource_id))

# the actual resources to be used
class EachCustomer(Resource):
    def get(self, customer_id):
        customer = find_customer(customer_id)
        return customer

    def put(self, customer_id):
        customer = find_customer(customer_id)
        # //Not thru

    def delete(self, customer_id):
        delete_resource(Customer, customer_id)


class CustomerList(Resource):
    def get(self):
        customers = get_all(Customer)
        return customers

    def post(self):
        # args = parser.parse_args()
        input_data = request.get_json()

        if input_data:
            try:
                first_name = input_data.get('first_name')
                last_name = input_data.get('last_name')
                phone = input_data.get('phone')
                email = input_data.get('email')
                date_joined = input_data.get('date')
                username = input_data.get('username')
                password = input_data.get('password')

                new_customer = Customer(first_name=first_name,
                                        last_name=last_name,
                                        phone=phone,
                                        email=email,
                                        date_of_joining=date_joined,
                                        username=username,
                                        password=password #Will def hash it later
                                        )
                new_customer.insert_to_db()

            except Exception:
                abort(400, message='Bad request from your end')
            
        else:
            abort(404, message='Resource not found')


api.add_resource(EachCustomer, '/customer/<customer_id>')
api.add_resource(CustomerList, '/customers')

if __name__ == '__main__':
    app.run(debug=True)
