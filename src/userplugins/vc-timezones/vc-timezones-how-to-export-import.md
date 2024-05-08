# Exporting and Importing Data from vc-timezones

## Exporting Data

### Method 1: Using DevTools
1. Open DevTools (Ctrl+Shift+I).
2. Go to the Application tab.
3. Under Storage, locate "IndexedDB", then "VencordData", and finally "VencordStore".
4. Inside VencordStore, find the key "vencord-timezones" and copy the data.

### Method 2: Using Code
1. Open the console (Ctrl+Shift+I).
2. Paste the following code.
3. Copy the output to export the data.

```javascript
const request = indexedDB.open("VencordData");
request.onsuccess = function (event) {
    const db = event.target.result;
    const key = "vencord-timezones"; // The key
    const transaction = db.transaction("VencordStore", "readonly");
    const store = transaction.objectStore("VencordStore");
    
    const getRequest = store.get(key);
    getRequest.onsuccess = function (event) {
        const retrievedData = event.target.result;
        console.log("Retrieved data:", retrievedData);
    };
};
```

## Importing Data
1. Open the console (Ctrl+Shift+I).
2. Paste the following code, make sure to replace `{ userId1: "timezone1", userId2: "timezone2" }` with the actual userId and timezone data.

```javascript
const request = indexedDB.open("VencordData");
request.onsuccess = function (event) {
    const db = event.target.result;
    const key = "vencord-timezones"; // The key
    const value = { userId1: "timezone1", userId2: "timezone2" }; // REPLACE WITH THE EXPORTED DATA HERE!!!!

    const transaction = db.transaction("VencordStore", "readwrite");
    const store = transaction.objectStore("VencordStore");

    // Use `put` to insert or update data
    const request = store.put(value, key);

    request.onsuccess = function (event) {
        console.log("Data inserted or updated successfully!");
    };

    request.onerror = function (event) {
        console.error("Error inserting or updating data:", event.target.error);
    };
};
```