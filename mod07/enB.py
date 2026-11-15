from flask import Flask, request, send_from_directory, Response, json

app = Flask(__name__)

#define endpoint home
@app.route('/home')
def serve_home():
    return send_from_directory("static", "index.html")

#BE endpoint
@app.route("/plus")
def calculate_sum():
    try:
        request_arguments = request.args
        number1 = float(request_arguments.get("number1"))
        number2 = float(request_arguments.get("number2"))
        response_data = {
            "number1": number1,
            "number2": number2,
            "result": number1 + number2
        }
        return response_data
    except ValueError:
        response = {
            "error": "Invalid input",
            "message": "Please provide valid numeric values for number1 and number2."
        }
        json_response = json.dumps(response)
        http_response = Response(
            response=json_response,
            status=400,
            mimetype='application/json'
        )
        return http_response

@app.route("/multiplication")
def calculate_product():
    request_arguments = request.args
    number1 = float(request_arguments.get("number1"))
    number2 = float(request_arguments.get("number2"))
    response_data1 = {
        "number1": number1,
        "number2": number2,
        "result": number1 * number2
    }
    return response_data1

@app.route("/minus/<number1>/<number2>")
def calculate_difference(number1, number2):
    response_data1 = {
        "number1": number1,
        "number2": number2,
        "result": float(number1) - float(number2)
    }
    return response_data1

#error handler
@app.errorhandler(404)
def page_not_found(e):
    response = {
        "error": "Page not found",
        "message": "The requested URL was not found on the server."
    }
    json_response = json.dumps(response)
    http_response = Response(
        response=json_response,
        status=404,
        mimetype='application/json'
    )
    return http_response


#start Application
app.run (host="127.0.0.1", port=3000, use_reloader=True)

