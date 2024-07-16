# node-project-setup-pern-stack

Packages - 

    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "i18n": "^0.15.1",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "moment": "^2.30.1",
    "nodemailer": "^6.9.14",
    "nodemon": "^3.1.4",
    "pg": "^8.12.0",
    "sequelize": "^6.37.3",
    "uuid": "^10.0.0"

APIs

1.SignUp(first_name, last_name, email, phone_number, password)-http://localhost:3030/api/v1/front/user/sign-up

- This Api will work on register for user if email already exists then will show error response like user already exists
- once user register and will store in user table from the above fields
- once user register will receive the email for verification if not verified then will not be able login
  Ex : {
  "first_name": "Siva",
  "last_name": "reddy",
  "email": "siva123@yopmail.com",
  "phone_number": "239434929349",
  "password": "Siva@123"
  }
  2.verifyEmail(token) - http://localhost:3030/api/v1/front/auth/email-verify

- This Api will work on verify register email which is register email (SignUp)
- Once verified then only able to login
  ex : {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpdmExMjNAeW9wbWFpbC5jb20iLCJpYXQiOjE3MjEwNDU1MzMsImV4cCI6MTcyMTIxODMzM30.En7vEHDzlQCg7roJ5VwQPfXUlDwZF9jsB1-s85myH8U"
  }

  3.login(email, password ) -http://localhost:3030/api/v1/front/auth/log-in/

- This Api will work on register user login if not able register user will not login
- if not match email and password details simply will get error response user details not found
- Once login correct user credentials then fetch the response all user details email,name,gender ...etc

ex: {
"email" : "siva123@yopmail.com",
"password": "Siva@123"
}

4.Forgot Password (email) - http://localhost:3030/api/v1/front/auth/forgot-password

- This API allows users to request a password reset if they have forgotten their password.
- The user must provide their registered email address.
- If the email address exists in the system, a unique token is generated and a password reset email is sent to the user.
- The email contains a link to reset the password. This link includes a token that is required for the password reset process.
- The token has an expiration time, ensuring that the password reset link is only valid for a specific duration.The user can use the link to reset their password, ensuring a secure process for password recovery.

ex: {
"email" : "siva123@yopmail.com"
}

5.resetPassword(token, password, confirmPassword)- http://localhost:3030/api/v1/front/auth/reset-password

- This API allows users to reset their password using a token they received from the forgot password email.
- The user must provide the token, new password, and confirm the new password.
- The token is verified to ensure it is valid and not expired.
- If the token is valid, the user's password is updated in the database.
- The used token is then deleted to prevent reuse.
- If the password and confirm password do not match, an error is returned.
- If the token is invalid or expired, an error is returned.
- If the user is not found, an error is returned.
- Upon successful password reset, a success response is returned.

ex: {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpdmFuYWdpQHlvcG1haWwuY29tIiwidG9rZW5VVUlEIjoiNGMwNzNjMjktYWM2Yi00NTY3LWE2YTMtNmQ1ZTc2MWJiY2FiIiwiaWF0IjoxNzE5Mzk0MzY5LCJleHAiOjE3MTk0ODA3Njl9.OlXMZEQXRIA3onL239pNmZMW73L14FJ4fhDf8GuO6uY",
"password": "Siva@1234",
"confirmPassword": "Siva@1234"
}

6.generateRefreshToken(refreshToken)-http://localhost:3030/api/v1/front/auth/refresh-token

- This API endpoint allows users to generate a new access token using a valid refresh token.
- The user must provide the refresh token in the request body.
- The API verifies the provided refresh token and generates a new access token if the refresh token is valid.
- The new access token includes a unique token UUID and has a specified expiration time.
- The system updates the user token record with the new token UUID and its expiration time.
- A success response is returned with the new access token and its expiration information.

ex : {
"refresh_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpdmFAeW9wbWFpbC5jb20iLCJpZCI6NywicmVmcmVzaFRva2VuVVVJRCI6IjJkZTc2MGVmLWMxMDktNGYwNS04NzljLWJlYzI1MjQ5YjBmZiIsImlhdCI6MTcxOTk5NDI4NSwiZXhwIjoxNzIyNTg2Mjg1fQ.vAyCWZiy2fPzbKUqNgioBmoO3MVI0ZzP9Yze8lkzpI8"
}
