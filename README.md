# Link Butcher

Link Butcher is a JavaScript server-side and client application for shortening long, unwieldy URLs. It was originally intended to be a lightweight URL minifier for private servers but it works for public networks as well.

## Requirements

1. Host server running Node JS
2. MySQL server

## Installation

1. Clone or download and unzip the repository.
2. Open the file database_cred.js and make these changes:

    i. Change 'host-name'to the location of the server running your MySQL server instance.

   ii. Change 'username' to the root (or privileged account) username on your MySQL server.

   iii. Change 'password' to the password of the root (or privileged account) user used in step ii. above.

    iv. Change 'database' to your desired name for the  database to be by the application.

     v. Change 'table' to your desired name for the working table;

```js
//Example:

module.exports = {
    host: 'terraria.com',
    user: 'jksf',
    password: 'passphrase',
    database: 'url_db',
    table: 'links'
}
```


3. Run setup.js with NodeJS 

```bash
$ node setup.js
```

## Usage
Run index.js with Node JS
```bash
$ node index.js
```
If all is successful, the application will be live on port 5000.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License

Copyright (c) 2020 Kevin Nene Otuteye

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
```