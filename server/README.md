require("crypto").randomBytes(64).toString('hex')

controllers/auth.js - singup.js

curl -X POST http://localhost:8000/api/auth/signup -d {"username":"tim","password":"1234","email":"tim@mail.com"}

controllers/auth.js - singin.js

curl -X POST http://localhost:8000/api/auth/signin -d {"username":"tim","password":"1234"}

controllers/users.js - getUser.js

curl -X GET http://localhost:8000/api/users/find/641e1916e39f037954cf5aaf

---

controllers/user.js - update

first we need to get token ansd send token with put api call.
sign in first and take token whi is name access-token put in header.

curl -X PUT http://localhost:8000/api/users/641dfdad4abad1400220e619 -d {"description":" vbios goes here ..."}