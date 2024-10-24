from flask import Flask, render_template, request

app = Flask(__name__)

# Definindo a rota principal do site 
@app.route('/')
def home ():
    return render_template('index.html')

@app.route('/cafes')
def cafes ():
    return render_template('cafes.html')

@app.route('/EA')
def EA ():
    return render_template('esporte.html')

@app.route('/entrar')
def Entrar ():
    return render_template('entrar.html')

@app.route('/login')
def log ():
    return render_template('entrar.html')

@app.route('/cont')
def Cont ():
    return render_template('contato.html')

@app.route('/Pag')
def paga ():
    return render_template('pagamento.html')




# Parte principal do programa em Python
if __name__ == '__main__':
    app.run(debug=True) 