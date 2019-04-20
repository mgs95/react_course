from flask import Flask
from flask_cors import CORS
import pyEX


app = Flask(__name__)
CORS(app)


@app.route("/")
def default():
    # Get all cryptocurrencies
    crytos = pyEX.alternative.crypto('', '')
    print(list(c['symbol'] for c in crytos))

    # List top 10 symbols
    symbols = pyEX.stocks.list(option='mostactive', token='pk_bdc7a6968140452b89a2502e059ad88c', version='beta')
    print(list(s['symbol'] for s in symbols))

    # Get historic data from a symbol
    data = pyEX.stocks.chartDF('BAC', timeframe='3m', date=None, token='pk_bdc7a6968140452b89a2502e059ad88c', version='beta')
    print(data)

    return "Hello World!"
