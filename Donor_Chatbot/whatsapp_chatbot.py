from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse
import pandas as pd
import datetime

#print(data.head())
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

Please enter a number based on what you want me to display

4. If you want to look for details of a particular year please enter the year 
Ex: 2019 """ 

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
	elif incoming_msg == '1':
		url = []
		space_id = df_final.loc[df_final['SPACE_CODE'] == 'M19U6-1']
		for i in range(3):
			url.append(space_id['REPORT'].values[i])
			
		msg.media(url[0])	
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
Please enter a number based on what you want me to display
4. If you want to look for details of a particular year please enter the year 
Ex: 2019""" 		

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
Please enter a number based on what you want me to 
4. If you want to look for details of a particular year please enter the year 
Ex: 2019""" 

		msg.body(output_final)
		msg.body(output_default)

	elif incoming_msg == '2020' or incoming_msg == '2019' or incoming_msg == '2018' or incoming_msg == '2017' or incoming_msg == '2016' or incoming_msg == '2015' or incoming_msg == '2014':
		year = int(incoming_msg)
		space_id = df_final.loc[df_final['SPACE_CODE'] == 'M19U6-1']
		for i in range(len(space_id)):
			date_column = space_id['SPACE2PATIENT_DATETIME_BEGIN'].values[i]
			date_column = date_column.split()
			date_column = date_column[0]
			date_column = date_column.split('-')
			date_column = date_column[2]
			output_list = []
			output_final = ''
			if int(date_column) == year:
				url = space_id['REPORT'].values[i]
				output = """
				Patient ID: {0}   Family_Name: {1} \n Date: {2} Donation Use: {3} \n""".format(space_id['PATIENT_ID'].values[i], space_id['FAMILY_NAME'].values[i], 
															  space_id['SPACE2PATIENT_DATETIME_BEGIN'].values[i], space_id['DONATION_USAGE'].values[i])

		
		output_default = """ \n 
Do You need anything more?:
1. Provide your report
2. Provide details about your donation usage
3. Provide the details of family staying at your home
Please enter a number based on what you want me to 
4. If you want to look for details of a particular year please enter the year 
Ex: 2019""" 

		msg.body(output)	
		msg.media(url)
		msg.body(output_default)
	
	elif incoming_msg =='bye':
		msg.body('I hope your experience was good')
	else:
		msg.body('Please ask me something else')
	#msg.body(output)
	responded = True

	if not responded:
		msg.body('Im not aware of what you are saying')	
	
	return str(resp)

if __name__ == '__main__':
	app.run(debug=True)