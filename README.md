dave-mailserver
===============

A remote mail server built for Dave, but usable by anyone.

1. Simply fork this repo, add a mailgun api to environment variables (named inside of email.js controller).
2. Spin up NodeJS server on a remote server of your choosing, Heroku works very well.
3. Query the /sendMail route with a payload that has a body, phone, email, name
4. Profit!
