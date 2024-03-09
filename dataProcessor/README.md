# IPLabs.ink Data Processor

This folder contains all python based data processor that creates the json files used to display the staff
data on the website. We internally use a google form that everyone can fill out with their details.
 
Then using the Google Drive and Sheets API we can access the sheets to download the data and images, and process
them ready for the website.

### warning!
Outside IPL / End user support will not be provided for this tool and is intended for internal use only.

# Setup(TBF)
- install all requirements using `pip install -r requirements.txt`
- Set up Google credentials:
  - Create a [Google service account](https://console.cloud.google.com/iam-admin/serviceaccounts) and allow it to access
    the staff spreadsheet. Place its credentials in `./secrets/googleAuth.json`
  - Create an [OAuth Client ID](https://console.cloud.google.com/apis/credentials)
    (Setting the *Application type* to 'Desktop App') and place its credentials in `./secrets/credentials.json`
- Getting an `google.auth.exceptions.RefreshError: invalid_grant` error when running the processor? Try deleting the
  `secrets/token.pickle` file.
