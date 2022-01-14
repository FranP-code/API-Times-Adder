# API Times Adder

With this API you can add each of the times introduced in the array sended.

## How I use the API?

You have to do a **POST request** to this link: https://api-times-adder.herokuapp.com/api/v1

The body must have this structure:

```json
{
    "data": ["4:20:01", "6:16", "69", "x", "y", "..."]
}
```

The limit of values in the array are 200.

### How are time structures treated?

Are treated as follows:
- HH:MM:SS
- MM:SS
- MM