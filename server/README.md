require("crypto").randomBytes(64).toString('hex')

---

controllers/auth.js - singup.js

curl -X POST http://localhost:8000/api/auth/signup -d {"username":"tim","password":"1234","email":"tim@mail.com"}

---

controllers/auth.js - singin.js

curl -X POST http://localhost:8000/api/auth/signin -d {"username":"tim","password":"1234"}

---

controllers/users.js - getUser.js

curl -X GET http://localhost:8000/api/users/find/641e1916e39f037954cf5aaf

---

controllers/user.js - update

first we need to get token ansd send token with put api call.
sign in first and take token whi is name access-token put in header.

curl -X PUT http://localhost:8000/api/users/641dfdad4abad1400220e619 -d {"description":" vbios goes here ..."}

---

controllers/user.js - delete

first we need to signin with user so the access_token will be sent to client then we can call delete api call inclusinf {access_token we copy it from client which will be werified with middleware then will be deleted.

curl -X DELETE http://localhost:8000/api/users/641dfdad4abad1400220e61

---

first signin jane account then with access token follow a user

curl -X PUT http://localhost:8000/api/users/follow/<jane id> -d '{"id":"<jack id>"}'

---

first sign in jane account and crab access token pass it in header with access-token key

curl -X PUT http://localhost:8000/api/users/unfollow/<jane id> -d '{"id":"<jack id>

---

to tweet we need a access token so we will sign in jane account to get it

then curl -X POST http://localhost:8000/api/tweets/ -d '{"userId":"",description":".."}'

---

to recieve we dont need to send access token because verifyToken middle ware is not passes to router .

curl -X GET http://localhost:8000/api/tweets/timeline/<Jane_id>

---
