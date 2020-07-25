from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse
import pandas as pd

#print(data.head())
app = Flask(__name__)
@app.route('/whatsapp_bot', methods=['POST'])
def whatsapp_bot():

	incoming_msg = request.values.get('Body', '').lower()
	resp = MessagingResponse()
	msg = resp.message()
	df = pd.read_csv('Jude_child_care.csv')
	responded = False
	#print(incoming_msg)
	#output = []
	
	if incoming_msg == 'patient_id 1960':
		#patient_id = data['PATIENT_ID']
		#frame = {'patient_id' : patient_id}
		#df = pd.DataFrame(frame)
		#for i in range(len(data)):
			#if data['PATIENT_ID'] == 1960:
		patient_id = df.loc[df['SPACE2PATIENT_ID'] == 25810]
		output = patient_id['SPACE_CODE'].values[0]
		#output = output.to_string()
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