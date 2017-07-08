import requests

#print(page.content)

from bs4 import BeautifulSoup

page = requests.get("http://104.236.158.81/africa/dataall/1.html")
soup = BeautifulSoup(page.content, 'html.parser')


countries = ['Angola',
'Benin',
'Botswana',
'Burkina Faso',
'Burundi',
'Cameroon',
'Cape Verde',
'Central African Republic',
'Chad',
'Comoros',
'Congo, Dem. Rep.',
'Congo, Rep.',
'Cte dIvoire',
'Djibouti',
'Equatorial Guinea',
'Eritrea',
'Ethiopia',
'Gabon',
'Gambia, The',
'Ghana',
'Guinea',
'Guinea-Bissau',
'Kenya',
'Lesotho',
'Liberia',
'Madagascar',
'Malawi',
'Mali',
'Mauritania',
'Mauritius',
'Mozambique',
'Namibia',
'Niger',
'Nigeria',
'Rwanda',
'So Tom and Prncipe',
'Senegal',
'Seychelles',
'Sierra Leone',
'Somalia',
'South Africa',
'Sudan',
'Swaziland',
'Tanzania',
'Togo',
'Uganda',
'Zambia',
'Zimbabwe',
'NORTH AFRICA',
'Algeria',
'Egypt, Arab Rep.',
'Libya',
'Morocco',
'Tunisia']

elements = soup.findAll("div", { "class" : "t" })
for a in elements:
    text = a.getText().encode('ascii', 'ignore').decode('ascii')
    if any(c.isalpha() for c in text) and text in countries:
        print("Data: " + elements[elements.index(a) + 3].getText() + "     " + text)
