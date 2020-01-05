import uuid from "uuid/v4";

function uniqueId() {
  return uuid();
}

export { uniqueId };
