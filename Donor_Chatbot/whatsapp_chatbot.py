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
	df_final = pd.read_csv('Jude_child_care_1.csv')
	responded = False

	if incoming_msg == 'hey' or incoming_msg == 'hi':
		output = """ I can help you with following things:
1. Provide your report
2. Provide details about your donation usage
3. Provide the details of family staying at your home
Please enter a number based on what you want me to display""" 

		msg.body(output)

	if incoming_msg == 'm19u6-1':
		patient_id = df.loc[df['SPACE_CODE'] == 'M19U6-1']
		output_1 = patient_id['PATIENT_ID']
		output_final = ''
		output_list = [] 
		for i in range(len(output_1)):
			output = """ Patient ID: {0} \n""".format(patient_id['PATIENT_ID'].values[i])
			output_list.append(output)
		for i in range(len(output_1)):
			output_final = output_final + output_list[i]
		print(output_1)
		msg.body(output_final)
	elif incoming_msg == '2':
		space_id = df_final.loc[df_final['SPACE_CODE'] == 'M19U6-1']
		output_1 = space_id['DONATION_USAGE']

		output_final = ''
		output_list = [] 
		for i in range(len(output_1)):
			output = """Date: {0}   Donation Use: {1} \n""".format(space_id['SPACE2PATIENT_DATETIME_BEGIN'].values[i],space_id['DONATION_USAGE'].values[i])
			output_list.append(output)
		for i in range(len(output_1)):
			output_final = output_final + output_list[i]
		output_default = """\n Do You need anything more?:
1. Provide your report
2. Provide details about your donation usage
3. Provide the details of family staying at your home
Please enter a number based on what you want me to display""" 		
		#print(len(output))
		#output = output.to_string()
		print(output_1)
		msg.body(output_final)
		msg.body(output_default)		
			
	elif incoming_msg == '3':
		space_id = df_final.loc[df_final['SPACE_CODE'] == 'M19U6-1']
		output_1 = space_id['PATIENT_ID']

		output_final = ''
		output_list = [] 
		for i in range(len(output_1)):
			output = """ Patient ID: {0}    Family name: {1} \n""".format(space_id['PATIENT_ID'].values[i], space_id['FAMILY_NAME'].values[i])
			output_list.append(output)
		for i in range(len(output_1)):
			output_final = output_final + output_list[i]
		output_default = """ \n 
Do You need anything more?:
1. Provide your report
2. Provide details about your donation usage
3. Provide the details of family staying at your home
Please enter a number based on what you want me to display""" 

		print(output_1)
		msg.body(output_final)
		msg.body(output_default)
	else:
		msg.body('Please ask me something else')
	responded = True

	if not responded:
		msg.body('Im not aware of what you are saying')	
	
	return str(resp)

if __name__ == '__main__':
	app.run(debug=True)