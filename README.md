# idil

Israeli ID number utilities

Installation:
```
npm i idil
yarn add idil
```

Usage:
* Generate check digit for given Israeli ID number
```typescript
import {generate} from 'idil';

const checkDigit = generate('12345678');
```

* Validate ID number
```typescript
import {validate} from 'idil';

// using id with check digit
if (validate('123456782')) {
    // id is valid
}

if (validate('12345678', 2)) {
    // is is valid
}
```
