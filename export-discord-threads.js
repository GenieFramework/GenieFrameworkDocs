const { execSync } = require("child_process");
const { readdirSync, writeFileSync, renameSync, readFileSync } = require("fs");

// how to obtain token https://github.com/Tyrrrz/DiscordChatExporter/blob/master/.docs/Token-and-IDs.md
const token = "";

const guildId = "774897545717219328";

const allChannels = execSync(
  `docker run --rm tyrrrz/discordchatexporter:latest channels -t ${token}  -g ${guildId} --include-threads`
)
  .toString()
  .split("\n");

const helpForumIndex = allChannels.findIndex((channel) =>
  channel.includes("forum")
);

const threads = [];
for (let i = helpForumIndex + 1; i < allChannels.length; i++) {
  if (allChannels[i].startsWith(" *")) {
    threads.push(allChannels[i]);
  } else break;
}

const threadIds = threads.map((thread) => thread.split(" ")[2]);

let existingMeta = [];
try {
  existingMeta = JSON.parse(
    readFileSync("static/threads-meta.json").toString()
  );
} catch (e) {
  console.log("No existing meta file found");
}

const currentThreads = existingMeta.map((meta) => meta.id);

const newThreads = threadIds.filter((threadId) => {
  return !currentThreads.includes(threadId);
});

console.log("New forum questions to fetch:", newThreads);

if (newThreads.length) {
  execSync(
    `docker run --rm -v ${__dirname}/static/threads:/out tyrrrz/discordchatexporter:latest export -t ${token}  -c ${newThreads.join(
      " "
    )} -f Json`
  );

  const filenames = readdirSync("static/threads").filter((filename) =>
    filename.startsWith("Genie")
  );

  writeFileSync(
    "static/threads-meta.json",
    JSON.stringify([
      ...existingMeta,
      ...filenames.map((filename) => ({
        id: filename.match(/\[(\d*)\]/).pop(),
        title: filename.split("-").pop().split("[")[0].trim(),
      })),
    ])
  );

  filenames.forEach((filename) => {
    const newName = filename.match(/\[(\d*)\]/).pop();
    if (newName) {
      renameSync(
        `static/threads/${filename}`,
        `static/threads/${newName}.json`
      );
    }
  });
}
