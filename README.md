To load some dummy contacts, run the command `npm run build-db` or:

```
mongoimport --db contact-example --collection contacts --type=json --jsonArray --file ./seed-data/contacts.json
```
