# Node.js Assessment

For your unit 5 assessment you are required to create a RESTful API server using [Node.js](https://nodejs.org/en/) feel free to use [Express.js](https://expressjs.com/).

The API should CREATE, READ, UPDATE and DELETE from a list of profiles in the file `profiles.json`. The `profiles.json` file is used as the server's data store and can be found in the `models` folder.

## Assessment Criteria

1. The server should run on port `5000`, e.g. `http://localhost:5000/`. The root should serve the file `index.htm`. The `index.htm` file should outline expected endpoints for the service.

**Example Express.js GET code for homepage/root:**

```javascript
app.get('/', function (request,result) {
   //Code to return the index.html page containing a description of the API functionality
});
```

2. The `index.htm` file should reference a `favicon.ico`, `logo.png` and a `css\main.css` file containing all the CSS styles for the `index.htm`.

1. In order to serve static pages you will need to add a call to the middleware (*refer back to the course slides for details on how to implement this*).

1. Add a `<title>` tag that includes your name e.g. Welcome to `Monica's` API

1. Add the functionality for all the endpoints described below:

| Method | URL | Description |
|---|---|---|
| GET | `/`| Returns a static HTML file `index.htm` containing a `favicon.ico`, `logo.png` and reference to an external stylesheet `main.css`.|
| GET | `/api/profiles` | Return all profiles from the `profiles.json` file |
| GET | `/api/profiles/:id` | Return a specific profile with the corresponding id e.g. `/api/profiles/4` will return a profile with the ID = 4 |
| POST* | `/api/profiles` |  Add a new profile to the profiles collection and returns all profiles. |
| PUT* | `/api/profiles/:id` | Update a specific profile and returns all profiles including updated |
| PATCH* | `/api/profiles/:id/:attribute` | Update a specific attribute in a profile returns all profiles including updated profile|
| DELETE* | `/api/profiles/:id` | Deletes a profile by ID, returns all profiles excluding deleted profile |

**Changes to the `profiles.json` file (including additions and deletions) do not have to be persisted across calls or saved to file or memory. For the purposes of this assessment any changes can be reflected in the return value of a call e.g.**

## Example 1:

```sh
# POST http://localhost:5000/api/profiles

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"firstname":"xyz","lastname":"xyz","country":"United Kingdom"}' \
  http://localhost:5000/api/profiles

# RESPONSE
{
  "profile1": {
    "firstname" : "Maya",
    ...
  },
  ...
  ...
  "profile4" : {
    "firstname" : "Zora",
    ...
  }
  "profile5" : {
    "firstname" : "xyz",
    "lastname" : "xyz",
    "lastname" : "United Kingdom"
  }
}
```
## Example 2:

```sh
# GET http://localhost:5000/api/profiles

curl --header "Content-Type: application/json" \
  --request GET \
  http://localhost:5000/api/profiles

# RESPONSE
{
  "profile1": {
    "firstname" : "Maya",
    ...
  },
  ...
  ...
  "profile4" : {
    "firstname" : "Zora",
    ...
  }
}
```

## How to submit

Commit all files and folders to the repo and push to your remote repo for assessment.

## Example API


