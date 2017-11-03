# AngularModule
## Run angular (Development)
```
cd AngularModule
npm start
```

## Details

# RailsModule
## Run rails (Development)
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
    -X POST \
    -d '{"username": "user1", "password": "password"}' \
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
    -X DELETE \
    -d '{"authentication_token": "daa2dc42-03f2-40a1-910d-c6125df58a41"}' \
    http://localhost:3000/tokens
```

##### Response
```
{}
```

### /tasks
#### GET
##### Request
```
curl -H "Content-type: application/json" \
    -X GET \
    -d '{"authentication_token": "daa2dc42-03f2-40a1-910d-c6125df58a41"}' \
    http://localhost:3000/tasks
```

##### Response
```
{
  "tasks": [
    {
      "id": 1,
      "subject": "Subject",
      "details": "Details",
      "user_id": 2,
      "created_at": "2017-11-02T14:28:27.561Z",
      "updated_at": "2017-11-02T14:28:27.561Z"
    }
  ]
}
```

#### POST
##### Request
```
curl -H "Content-type: application/json" \
    -X POST \
    -d '{"authentication_token": "daa2dc42-03f2-40a1-910d-c6125df58a41", "subject": "Subject", "details": "Details"}' \
    http://localhost:3000/tasks
```

##### Response
```
{
  "task": {
    "id": 1,
    "subject": "Subject",
    "details": "Details",
    "user_id": 2,
    "created_at": "2017-11-02T14:28:27.561Z",
    "updated_at": "2017-11-02T14:28:27.561Z"
  }
}
```

#### DELETE
##### Request
```
curl -H "Content-type: application/json" \
    -X DELETE \
    -d '{"authentication_token": "daa2dc42-03f2-40a1-910d-c6125df58a41", "id": "1"}' \
    http://localhost:3000/tasks
```

##### Response
```
{}
```
