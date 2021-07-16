let responseTimeInMs = 1000;
let concurrency = 35;
let recordCount = 3000000;
let eventsGeneratedPer = 3;

const mathStuff = () => {
  const eventsGenerated = eventsGeneratedPer * recordCount;
  const requestsPerSec = concurrency / (responseTimeInMs / 1000);
  const requestsPerMinute = requestsPerSec * 60;
  const minutesToFinish = eventsGenerated / requestsPerMinute;

  const toComma = (s) => s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const desc = `
  <p>The response time of the external API:      ${responseTimeInMs / 1000} seconds</p>
  <p>The number of requests we make as a time:   ${concurrency}</p>
  <p>The number of requests per second:          ${requestsPerSec}</p>
  <p>The number of requests per minute:          ${requestsPerMinute}</p>
  
  With ${toComma(recordCount)} records, ${toComma(eventsGenerated)} events will be generated.
  At a rate of ${requestsPerMinute} requests per minute it will take
  <ul>
    <li>${Math.round(minutesToFinish)} minutes to finish.</li>
    <li>${Math.round(minutesToFinish / 60)} hours to finish.</li>
    <li>${Math.round(minutesToFinish / 60 / 24)} days to finish.</li>
  </ul>
  `;

  return desc;
}

const setResponseTimeInMs = (value) => {
  responseTimeInMs = value;
};

const setConcurrency = (value) => {
  concurrency = value;
}

const setRecordCount = (value) => {
  recordCount = value;
}

const setEventsGeneratedPer = (value) => {
  eventsGeneratedPer = value;
}

window.BFMConcurrency = {
  mathStuff,
  setResponseTimeInMs,
  setConcurrency,
  setRecordCount,
  setEventsGeneratedPer,
  responseTimeInMs,
  concurrency,
  recordCount,
  eventsGeneratedPer,
}

mathStuff();
