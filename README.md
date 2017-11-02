# AngularModule
## Run angular
## Details

# RailsModule
## Run rails
```
cd RailsModule
rbenv exec bundle install
rbenv exec bundle exec rails db:create db:migrate db:seed
rbenv exec bundle exec rails s
```

## Endpoints
### /tokens
#### POST
##### Request
```
curl -H "Content-type: application/json" \
    -X POST -d '{"username": "user1", "password": "password"}' \
    http://localhost:3000/tokens
```

##### Response
```
{"authentication_token":"daa2dc42-03f2-40a1-910d-c6125df58a41"}
```

#### DELETE
##### Request
```
curl -H "Content-type: application/json" \
    -X DELETE -d '{"authentication_token": "daa2dc42-03f2-40a1-910d-c6125df58a41"}' \
    http://localhost:3000/tokens
```

##### Response
```
{}
```
