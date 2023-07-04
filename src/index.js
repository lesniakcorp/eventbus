class EventBus {
  constructor() {
    this.events = {};
  }

  emit(eventName, eventPayload) {
    if (this.events[eventName] !== undefined) {
      this.events[eventName].handlers.forEach((handler) =>
        handler(eventPayload)
      );
    }
  }

  on(eventName, handler) {
    if (this.events[eventName] !== undefined) {
      this.events[eventName].handlers.push(handler);
      return;
    }

    this.events[eventName] = { handlers: [handler] };
  }
}

export default function () {
  if (window.EventBus) {
    return window.EventBus;
  }

  window.EventBus = new EventBus();
  return window.EventBus;
}
