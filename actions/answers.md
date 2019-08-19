# Essay Questions

## Mention two parts of Express that you learned about this week.

- Connect middleware is an extensive collection of modules which you can download and helps "glue" together middlewares to handle requests.
- REST is a general architectural recommendation and not the standard.
- `idempotent` means the same command executed multiple times but the resources on the server are the same, like pure functions in React.

## What is Middleware?

- Middleware is an array of functions that execute in the order it's presented to help handle our routes. There are built-in middleware, third-party middleware, and custom middleware that we write. Some examples mentioned in class include morgan, cors, and helmet.

## What is a Resource?

- A resource is an item in the server that can be used and passed between server and client.
- They represent the payload of the route handler functions most of the time in the form of JSON.

## What can the API return to help clients know if a request was successful?

- The API can return a HTTP code to let users know the request was a success. In this case, "200" is the proper code for this. Other codes include "201" for successfully created and "202" for accepted.

## How can we partition our application into sub-applications?

- We can write custom middleware that acts on our routes, which also happens to be middleware themselves. We can separate them out to different files having these modular middlewares that can be used across one or many of our route handler paths.

