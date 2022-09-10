from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Integer, DateTime

db = SQLAlchemy()

def setup_db(app, db_path):
    app.config['SQLALCHEMY_DATABASE_URI'] = db_path
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)
    db.create_all()


#Customer Model
class Customer(db.Model):
    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    phone = Column(Integer)
    email = Column(String)
    date_of_joining = Column(DateTime)
    username = Column(String)
    password = Column(String)
    
    def format(self):
        return {
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone': self.phone,
            'email': self.email,
            'join_date': self.date_of_joining,
            'username': self.username
        }

class Account(db.Model):
    id = Column(Integer, primary_kry=True)
    name = Column(String)
    date_opened = Column(DateTime)
    customer_id = Column(Integer, FK) #Not thru

class Transaction(db.Model):
    id = Column(Integer, primary_key=True)
    date = Column(DateTime)
    amount_transacted = Column(Integer)
    account_id = Column(Integer, ForeignKey("Account.id")) #Not thru
    transaction_type = Column(Integer, FOreignKey("Transaction.id"))

class Transaction_Type(db.Model):
    id = Column(Integer, primary_key=True)
    description = Column(String)

    
