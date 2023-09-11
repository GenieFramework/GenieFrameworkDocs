const { execSync } = require("child_process");
const { readdirSync, writeFileSync, renameSync, readFileSync } = require("fs");

// Discord token for authentication (should be filled in)
// how to obtain token https://github.com/Tyrrrz/DiscordChatExporter/blob/master/.docs/Token-and-IDs.md
const token = "";

// ID of the Discord server (guild) to fetch data from
const guildId = "774897545717219328";

// Fetch all channels (including threads) from the specified Discord server
const allChannels = execSync(
  `docker run --rm tyrrrz/discordchatexporter:latest channels -t ${token}  -g ${guildId} --include-threads all`
)
  .toString()
  .split("\n");

// Iterate over the channel list and print the channel
for (const channel of allChannels) {
  console.log(channel);
}

// Find the index of the "forum" channel in the list
const helpForumIndex = allChannels.findIndex((channel) =>
  channel.includes("forum")
);

// Extract all threads associated with the "forum" channel
const threads = [];
for (let i = helpForumIndex + 1; i < allChannels.length; i++) {
  if (allChannels[i].startsWith(" *")) {
    threads.push(allChannels[i]);
  } else break;
}

// Extract the IDs of the identified threads
const threadIds = threads.map((thread) => thread.split(" ")[2]);

// Attempt to read existing metadata of previously fetched threads
let existingMeta = [];
try {
  existingMeta = JSON.parse(
    readFileSync("threads-meta.json").toString()
  );
} catch (e) {
  console.log("No existing meta file found");
}

// Extract IDs of threads from the existing metadata
const currentThreads = existingMeta.map((meta) => meta.id);

// Identify which threads are new (not in existing metadata)
const newThreads = threadIds.filter((threadId) => {
  return !currentThreads.includes(threadId);
});

console.log("New forum questions to fetch:", newThreads);

// If there are new threads, fetch them using the DiscordChatExporter tool
if (newThreads.length) {
  execSync(
    `docker run --rm -v ${__dirname}/threads:/out tyrrrz/discordchatexporter:latest export -t ${token}  -c ${newThreads.join(
      " "
    )} -f Json`
  );

  // List filenames of fetched threads in the "threads" directory
  const filenames = readdirSync("threads").filter((filename) =>
    filename.startsWith("Genie")
  );

  // Update the metadata file with information about the newly fetched threads
  writeFileSync(
    "threads-meta.json",
    JSON.stringify([
      ...existingMeta,
      ...filenames.map((filename) => ({
        id: filename.match(/\[(\d*)\]/).pop(),
        title: filename.split("-").pop().split("[")[0].trim(),
      })),
    ])
  );

  // Rename the fetched thread files based on their thread ID
  filenames.forEach((filename) => {
    const newName = filename.match(/\[(\d*)\]/).pop();
    if (newName) {
      renameSync(
        `threads/${filename}`,
        `threads/${newName}.json`
      );
    }
  });
}
