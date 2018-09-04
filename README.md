
# Sample React-Drill with [Alt JS](http://alt.js.org/)

## Take Snapshot

Take snapshot provides you with the entire application’s state serialized to JSON, by default, but you may also pass in stores to take a snapshot of a subset of the application’s state.

Snapshots are a core component of alt. The idea is that at any given point in time you can `takeSnapshot` and have your entire application’s state serialized for persistence, transferring, logging, or debugging.

```javascript
const snapshot = alt.takeSnapshot();
const partialSnapshot = alt.takeSnapshot(Store1, Store3);
```

You can bootstrap a snapshot into your application using
[alt.bootstrap](http://alt.js.org/docs/bootstrap)

## bootstrap

The `alt.bootstrap()` function takes in a snapshot you’ve saved and reloads every store’s state with the data provided in that snapshot.

Bootstrap is great if you’re running an isomorphic app, or if you’re persisting state to localstorage and then retrieving it on init later on. You can save a snapshot on the server side, send it down, and then bootstrap it back on the client.