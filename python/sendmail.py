import stmplib, ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

sender_email = "no1rain@gmail.com"
receiver_email = "hanlab@naver.com"
password = input("Type your password and press enter:")

# instance of MIMEMultipart
message = MIMEMultipart("alternative")

# storing the senders email address
message["From"] = sender_email

# storing the receivers email address
message["To"] = receiver_email

# storing the subject
message["Subject"] = "multipart test"

# Create the plain-text and HTML version of your message
text = """\
Hi,
How are you?
Real Python has many great tutorials:
www.realpython.com"""
html = """\
<html>
  <body>
    <p>Hi,<br>
       How are you?<br>
       <a href="http://www.realpython.com">Real Python</a> 
       has many great tutorials.
    </p>
  </body>
</html>
"""

# Turn these into plain/html MIMEText objects
part1 = MIMEText(text, "plain")
part2 = MIMEText(html, "html")

# Add HTML/plain-text parts to MIMEMultipart message
# The email client will try to render the last part first
message.attach(part1)
message.attach(part2)

# Create secure connection with server and send email
context = ssl.create_default_context()
with stmplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:

    # Authentication
    server.login(sender_email, password)

    # sending the email
    server.sendmail(
        sender_email, receiver_email, message.as_string()
    )

    #terminating the session
    server.quit()