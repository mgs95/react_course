from flask import Flask, request
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
    data = pyEX.stocks.chart('BAC', timeframe='3m', date=None, token='pk_bdc7a6968140452b89a2502e059ad88c', version='beta')
    print(data)

    return "Hello World!"


def format_chart_data(data):
    """ Simplifies the information obtained for the charts. """
    return {
        "date": data["date"],
        "volume": data["volume"],
        "change": data["changePercent"]
    }


def get_chart_data(symbol, time_range="3m"):
    data = pyEX.stocks.chart(symbol, timeframe=time_range, date=None,
                             token='pk_bdc7a6968140452b89a2502e059ad88c',
                             version='beta')

    return list(map(format_chart_data, data))


@app.route("/chart", methods=["GET"])
def chart():
    """ Get chart historic information based on filters passes as parameters """
    filters = request.args.get('filters')

    return get_chart_data(filters["symbol"], filters["time_range"])
