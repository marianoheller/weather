
const LOG_TYPE = {
  A: 1,
  B: 2
};

const isSameType = (a, b) => a.type === b.type;
const getType = payload => isNaN(payload.trim().charAt(0)) ? LOG_TYPE.A : LOG_TYPE.B;

const parseLogLine = a => {
  const [id, ...payloadArr] = a.split(" ");
  const payload = payloadArr.join(" ");
  return {
    id,
    payload,
    type: getType(payload),
    raw: a
  };
};

const sorter = (x, y) => {
  const parsedX = parseLogLine(x);
  const parsedY = parseLogLine(y);

  // Different type
  if (!isSameType(parsedX, parsedY)) {
    return parsedX.type === LOG_TYPE.A ? -1 : 1;
  }

  // Type A section
  if (parsedX.type === LOG_TYPE.A) {
    if (parsedX.payload === parsedY.payload) {
      return parsedX.id < parsedY.id ? -1 : 1;
    } else {
      return parsedX.payload < parsedY.payload ? -1 : 1;
    }
  }

  // Type B
  return 0;
};

module.exports = logLines => logLines.sort(sorter);