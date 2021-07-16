# Huddle01 Web SDK

## Getting Started

1. **Get the Huddle01 JS SDK**

```
$ npm install --save huddle01-client
```

OR

```javascript
$ yarn add huddle01-client 
```

2. **Get your API Key:** You can get your access keys in the Developer section of the Huddle01 Dashboard

3. **Import modules & instantiate Huddle01 Client:**

```javascript
import HuddleClient, { emitter } from "huddle01-client";
```

**The infrastructure mandates a schema on the URL** of the type `https://domain.com/room?roomId=C132`

Thus, on component mount, we add:

```javascript
history.push(`?roomId=${config.roomId}`);
```

Initialise a new object 

```javascript
const huddle = new HuddleClient(config);
```

where `config`:

```javascript

  //write this as it is -- used to check for the recorder
  const isRecorderBot = localStorage.getItem("bot_password") === "huddle01";

  const config = {
    apiKey: "<API Key>", //issued on the dashboard
    roomId: "C132", 
    peerId: "rick254", //needs to be unique for every peer
    displayName: "Rick Sanchez",
    window, //your browser's window object
    isBot,
  };

```

By this step, you should be connected to the Huddle servers.

**To allow recordings**, make sure to add:

```javascript
huddle && isRecorderBot && joinRoomBtn.click();
```

{% hint style="info" %}
**where**:   
`huddle: the huddle-client object  
  
isRecorderBot: the boolean that checks if the user is a recorder bot or not  
  
joinRoomBtn: the button` 
{% endhint %}

### Setting up event listeners

The emitter that we imported in the 1st step is used to emit events by Huddle about your application.

**The various types of events are:**

{% tabs %}
{% tab title="roomState" %}
**Trigger:** on room status changes  
**Return value:** room status of the type `string`  

```javascript
emitter.on("roomState", (state) => {
    //do whatever (ideally switch-case between all state types)
    });

```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types:

| connected | failed | disconnected |
| :--- | :--- | :--- |
| successfully connected to the room | failure in connection to the room | successfully disconnected from the room |
{% endtab %}

{% tab title="error" %}
**Trigger:** an error event on client/server side  
**Return value:** error message of the type `string`  

```javascript
emitter.on("error", (error) => {
    //do whatever
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}
{% endtab %}

{% tab title="addPeer" %}
**Trigger:** new peer joins the room  
**Return value:** an entire peer object with all the details about the peer of the type `object`  

```javascript
emitter.on("addPeer", (peer) => {
    //do whatever
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}
{% endtab %}

{% tab title="" %}

{% endtab %}

{% tab title="addProducer" %}
**Trigger:** you have a new producer producing to the Huddle servers  
**Return value:** an producer object with details like your production media track \(eg. webcam/mic/screenshare\) of the type `object`  

```javascript
emitter.on("addProducer", (producer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`producer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream consumer | a mic stream consumer | a screenshare stream consumer |
{% endtab %}

{% tab title="addConsumer" %}
**Trigger:** you have a new consumer consuming from the Huddle servers  
**Return value:** a consumer object with details like your consumption media track \(eg. webcam/mic/screenshare\) of the type `object`  

```javascript
emitter.on("addConsumer", (consumer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`consumer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream consumer | a mic stream consumer | a screenshare stream consumer |
{% endtab %}

{% tab title="removePeer" %}
**Trigger:** one of the existing peers disconnects from the room  
**Return value:** an entire peer object with all the details about the peer of the type `object`\(same as the object received on the "add" event\)

```javascript
emitter.on("removePeer", (peer) => {
    //do whatever
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}
{% endtab %}

{% tab title="removeProducer" %}
**Trigger:** you have closed the production of your existing producer to the Huddle servers   
**Return value:** a producer object with details like your production media track \(eg. webcam/mic/screenshare\) peer of the type `object`  \(same as the object received on the "add" event\)

```javascript
emitter.on("removeProducer", (producer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`producer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream producer | a mic stream producer | a screenshare stream producer |
{% endtab %}

{% tab title="removeConsumer" %}
**Trigger:** you have closed the production of your existing producer to the Huddle servers   
**Return value:** a consumer object with details like your consumption media track \(eg. webcam/mic/screenshare\) peer of the type `object`  \(same as the object received on the "add" event\)

```javascript
emitter.on("removeConsumer", (consumer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`consumer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream consumer | a mic stream consumer | a screenshare stream consumer |
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="roomState" %}
**Trigger:** on room status changes  
**Return value:** room status of the type `string`  

```javascript
emitter.on("roomState", (state) => {
    //do whatever (ideally switch-case between all state types)
    });

```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types:

| connected | failed | disconnected |
| :--- | :--- | :--- |
| successfully connected to the room | failure in connection to the room | successfully disconnected from the room |
{% endtab %}

{% tab title="error" %}
**Trigger:** an error event on client/server side  
**Return value:** error message of the type `string`  

```javascript
emitter.on("error", (error) => {
    //do whatever
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}
{% endtab %}

{% tab title="addPeer" %}
**Trigger:** new peer joins the room  
**Return value:** an entire peer object with all the details about the peer of the type `object`  

```javascript
emitter.on("addPeer", (peer) => {
    //do whatever
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}
{% endtab %}

{% tab title="addProducer" %}
**Trigger:** you have a new producer producing to the Huddle servers  
**Return value:** an producer object with details like your production media track \(eg. webcam/mic/screenshare\) of the type `object`  

```javascript
emitter.on("addProducer", (producer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`producer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream consumer | a mic stream consumer | a screenshare stream consumer |
{% endtab %}

{% tab title="addConsumer" %}
**Trigger:** you have a new consumer consuming from the Huddle servers  
**Return value:** an consumer object with details like your consumption media track \(eg. webcam/mic/screenshare\) of the type `object`  

```javascript
emitter.on("addConsumer", (consumer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`consumer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream consumer | a mic stream consumer | a screenshare stream consumer |
{% endtab %}

{% tab title="removePeer" %}
**Trigger:** one of the existing peers disconnects from the room  
**Return value:** an entire peer object with all the details about the peer of the type `object`\(same as the object received on the "add" event\)

```javascript
emitter.on("removePeer", (peer) => {
    //do whatever
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}
{% endtab %}

{% tab title="removeProducer" %}
**Trigger:** you have closed the production of your existing producer to the Huddle servers   
**Return value:** a producer object with details like your production media track \(eg. webcam/mic/screenshare\) peer of the type `object`  \(same as the object received on the "add" event\)

```javascript
emitter.on("removeProducer", (producer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`producer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream producer | a mic stream producer | a screenshare stream producer |
{% endtab %}

{% tab title="removeConsumer" %}
**Trigger:** you have closed the production of your existing producer to the Huddle servers   
**Return value:** a consumer object with details like your consumption media track \(eg. webcam/mic/screenshare\) peer of the type `object`  \(same as the object received on the "add" event\)

```javascript
emitter.on("removeConsumer", (consumer) => {
    //do whatever (ideally switch-case between all state types)
    });
```

{% hint style="info" %}
Please refer to the demo app for application references
{% endhint %}

#### Different state types: 

`consumer.type:`

| webcam | mic | screenshare |
| :--- | :--- | :--- |
| a webcam stream consumer | a mic stream consumer | a screenshare stream consumer |
{% endtab %}
{% endtabs %}

{% hint style="info" %}
All the data/states received by events need to be maintained by you in your app. Can be achieved using React states/redux or any similar implementations.  
  
Please refer to the demo app where we use local React states to handle these data.
{% endhint %}

### Methods Available:

* **huddle.join\(\)**
* **huddle.close\(\)**

{% hint style="info" %}
`close()` can only be called after `join()` is successful
{% endhint %}

{% tabs %}
{% tab title="joinRoom\(\)" %}
```javascript
const joinRoom = async () => {
    if (!huddle) return;
    try {
      setupEventListeners();
      await huddle.join();
    } catch (error) {
      alert(error);
    }
  };
```
{% endtab %}

{% tab title="leaveRoom\(\)" %}
```javascript
const leaveRoom = async () => {
  if (!huddle) return;
  try {
    await huddle.close();
    setRoomState(false);
  } catch (error) {
    alert(error);
  }
};
```
{% endtab %}
{% endtabs %}

* **huddle.enableWebcam\(\)**
* **huddle.enableMic\(\)**
* **huddle.enableShare\(\)**

```javascript
  const enableWebcam = async () => {
    if (!huddle) return;
    try {
      await huddle.enableWebcam();
      setWebcamState(true);
    } catch (error) {
      alert(error);
    }
  };
```

* **huddle.disableWebcam\(\)**
* **huddle.disableShare\(\)**
* **huddle.disableMic\(\)**

```javascript
  const disableWebcam = async () => {
    if (!huddle) return;
    try {
      await huddle.disableWebcam();
      setWebcamState(false);
    } catch (error) {
      alert(error);
    }
  };
```

{% hint style="info" %}
`enable()` functions need to be called and have returned success first before calling any of the `disable()`counterparts
{% endhint %}

* **huddle.startRecording\(\)**
* **huddle.stopRecordig\(\)**

{% hint style="info" %}
Recordings will only work in production environments \(or run a local process of the recorder on your machine if you want to test in development environments\)
{% endhint %}

{% tabs %}
{% tab title="startRecording\(\)" %}
```javascript
  const startRecording = async () => {
    if (!huddle) return;
    try {
      const status = await huddle.startRecording();
      if (status !== true)
        console.error("an error occurred while initiating recording");
      console.log("recording initiated");
    } catch (error) {
      console.error(error);
    }
  };
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="stopRecording\(\)" %}
```javascript
const stopRecorder = async () => {
  if (!huddle) return;
  try {
    const status = await huddle.stopRecording();
    if (status !== true)
      console.error("an error occurred while initiating recording");
    console.log("recording initiated");
  } catch (error) {
    console.error(error);
  }
};
```
{% endtab %}
{% endtabs %}

