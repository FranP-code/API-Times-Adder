# API Times Adder

With this API you can add each of the times introduced in the array sended.

## How I comunicate?

You have to do a **POST request** to this link: 

The body must have this structure:

```json
{
    "data": ["4:20:01", "6:16", "69", "x", "y", "..."]
}
```

### How are time structures treated?

Are treated as follows:
- HH:MM:SS
- MM:SS
- MM