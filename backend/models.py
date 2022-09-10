from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Integer, DateTime

db = SQLAlchemy()

def setup_db(app, db_path):
    app.config['SQLALCHEMY_DATABASE_URI'] = db_path
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    synthesise_db()


class Customer(db.Model):
    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    phone = Column(Integer)
    email = Column(String)
    # date_of_joining = Column(DateTime)
    username = Column(String)
    password = Column(String)
    accounts = db.relationship('Account', backref='customer', lazy=True)
    
    def __init__(self,
    			first_name,
    			last_name,
    			phone,
    			email,
    			# date_of_joining,
    			username,
    			password) -> None:

    	self.first_name = first_name
    	self.last_name = last_name
    	self.phone = phone
    	self.email = email
    	# self.date_of_joining = date_of_joining
    	self.username = username
    	self.password = password

    def format(self) -> dict:
        return {
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone': self.phone,
            'email': self.email,
            # 'join_date': self.date_of_joining,
            'username': self.username
        }

    def delete_record(self):
    	db.session.delete(self)
    	db.session.commit()

    def insert_to_db(self) -> None:
    	db.session.add(self)
    	db.session.commit()

   	# def delete(self):
   	# 	db.session.delete(self)
   	# 	db.session.commit()

class Account(db.Model):
    id = Column(Integer, primary_key=True)
    name = Column(String)
    date_opened = Column(DateTime)
    customer_id = Column(Integer, db.ForeignKey("customer.id"), nullable=False) #Not thru
    transactions = db.relationship('Transaction', backref='account', lazy=True)

class Transactiontype(db.Model):
	# __tablename__ = 'transactiontype'

    id = Column(Integer, primary_key=True)
    description = Column(String)
    transactions = db.relationship('Transaction', backref='transactiontype', lazy=True)


class Transaction(db.Model):
    id = Column(Integer, primary_key=True)
    date = Column(DateTime)
    amount_transacted = Column(Integer)
    account_id = Column(Integer, db.ForeignKey("account.id"), nullable=False) #Not thru
    transaction_type = Column(Integer, db.ForeignKey("transactiontype.id"), nullable=False)



def synthesise_db():
	from datetime import datetime

	customer = Customer(first_name='Donald',
						last_name='Trump',
						phone=25473131831,
						email='trump@potus.gov',
						# date_of_joining=datetime(2019, 12, 12),
						username='trump',
						password='test')

	customer.insert_to_db()