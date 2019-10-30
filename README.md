# nodejs-webserver
A webserver built in nodejs

#### Start server:
```
nodejs server.js
```

#### Test server:
```
~$ curl localhost:8000/
```
Result:
```
!DOCTYPE html>
<html>
<head>
	<title>NodeJS Website</title>
</head>
<body>
	<h1>Hello, world!</h1>
</body>
</html>
```
This will serve any html file from the html directory. Including correcting '/' --> '/index.html'.
We are limited to just HTML files right now. Images don't work yet.
