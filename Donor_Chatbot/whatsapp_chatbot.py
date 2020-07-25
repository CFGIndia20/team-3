from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse
import pandas as pd

app = Flask(__name__)
@app.route('/whatsapp_bot', methods=['POST'])
def whatsapp_bot():

	incoming_msg = request.values.get('Body', '').lower()
	resp = MessagingResponse()
	msg = resp.message()
	df = pd.read_csv('Jude_child_care.csv')
	responded = False
	
	if incoming_msg == 'patient_id 1960':
		patient_id = df.loc[df['SPACE2PATIENT_ID'] == 25810]
		output = patient_id['SPACE_CODE'].values[0]
		print(output)

	else:
		msg.body('Please ask me something else')
	msg.body(output)
	responded = True

	if not responded:
		msg.body('Im not aware of what you are saying')	
	
	return str(resp)

if __name__ == '__main__':
	app.run(debug=True)