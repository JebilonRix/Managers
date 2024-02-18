class EventManagerClass
{
    static _instance;

    constructor()
    {
        if (EventManagerClass._instance)
        {
            return EventManagerClass._instance;
        }

        EventManagerClass._instance = this;  // Save the instance for future use
        this._eventListeners = {}; // Store event listeners
    }
    /**
      * Add a callback function to listen for an event.
      * @param {string} eventName - The name of the event to listen for.
      * @param {function} callback - The callback function to be executed when the event is triggered.
      */
    AddEvent(eventName, callback)
    {
        // Create a new array to store listeners if the event does not exist in eventListeners
        if (!this._eventListeners[eventName])
        {
            this._eventListeners[eventName] = [];
        }

        // Push the callback function to the array of listeners
        this._eventListeners[eventName].push(callback);
    }
    /**
      * Invoke an event and trigger all associated callback functions.
      * @param {string} eventName - The name of the event to invoke.
      * @param {*} data - Data to be passed to the callback functions.
      */
    InvokeEvent(eventName, data)
    {
        // Check if there are any listeners for the specified event
        if (this._eventListeners[eventName])
        {
            // Iterate through the array of callback functions and invoke each one with the provided data
            this._eventListeners[eventName].forEach(callback => callback(data));
        }
    }
    /**
      * Remove a callback function from listening to an event.
      * @param {string} eventName - The name of the event to remove the callback from.
      * @param {function} callback - The callback function to be removed.
      */
    RemoveEvent(eventName, callback)
    {
        // Check if there are any listeners for the specified event
        if (this._eventListeners[eventName])
        {
            // Filter out the specified callback function from the array of listeners
            this._eventListeners[eventName] = this._eventListeners[eventName].filter(cb => cb !== callback);
        }
    }
}

const EventManager = new EventManagerClass();
export default EventManager;
