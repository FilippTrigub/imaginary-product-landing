const insights = [
  "Remember to prioritize deep work today.",
  "Reach out to a teammate and unblock them.",
  "Document one learning before the end of the day.",
  "Refactor a small piece of code for long-term gains.",
  "Automate a manual step to save future time."
];

const focuses = [
  "Code Quality",
  "Collaboration",
  "Learning",
  "Performance",
  "User Feedback"
];

function getCurrentTimestamp() {
  return new Date().toISOString();
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function buildDigest() {
  const timestamp = getCurrentTimestamp();
  const insight = pickRandom(insights);
  const focus = pickRandom(focuses);

  return {
    timestamp,
    insight,
    focus,
  };
}

function printDigest() {
  const digest = buildDigest();
  console.log(`[${digest.timestamp}] Daily Digest`);
  console.log(`Focus Area : ${digest.focus}`);
  console.log(`Insight     : ${digest.insight}`);
}

printDigest();
