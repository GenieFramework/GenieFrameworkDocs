<template>
    <div v-if="thread && thread.guild" class="mx-auto max-w-5xl mt-10">
        <div class="bg-gray-100 p-4 rounded-lg mb-6">
            <a :href="`https://discord.com/channels/${thread.guild.id}/${thread.channel.id}`">
                <h2 class="text-xl font-semibold">{{ thread.channel.name }}</h2>
                <p v-if="thread.channel.topic" class="text-gray-600 mt-2">{{ thread.channel.topic }}</p>
            </a>
        </div>

        <div class="space-y-6">
            <div v-for="message in parsedMessages" :key="message.id" class="flex space-x-6">
                <div class="flex-1 bg-white p-4 rounded-lg shadow mb-4">
                    <a :href="`https://discord.com/channels/${thread.guild.id}/${thread.channel.id}/${message.id}`"
                        target="_blank" class="block hover:underline">
                        <div class="flex justify-between items-center mb-2">
                            <div class="font-medium flex items-center space-x-2" :style="{ color: message.author.color }">
                                <img :src="message.author.avatarUrl" alt="Author Avatar" class="w-10 h-10 rounded-full" />
                                <span class="ml-2"> {{ message.author.nickname || message.author.name }}</span>
                            </div>
                            <span class="text-gray-500 text-sm">{{ new Date(message.timestamp).toLocaleString() }}</span>
                        </div>
                    </a>
                    <ContentRendererMarkdown :value="message.parsedContent" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import forumThread from '~/static/forumThread.json';
import markdownParser from '@nuxt/content/transformers/markdown'


export default {
    data() {
        return {
            thread: forumThread,
            parsedMessages: []
        };
    },
    async created() {
        this.parsedMessages = await Promise.all(
            this.thread.messages.map(async message => {
                message.parsedContent = await markdownParser.parse(message.id, message.content);
                return message;
            })
        );
    },
    methods: {
        formatContent(content) {
            // Convert markdown links to anchor tags, you can expand this for other markdown features
            return content.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>');
        }
    }
};
</script>

<style scoped>
.forum-thread {
    max-width: 800px;
    margin: 0 auto;
}

.guild-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.guild-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.channel-info {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
}

.messages {
    margin-top: 20px;
}

.message {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.author-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.message-content {
    flex: 1;
}

.author-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    margin-bottom: 10px;
}

.author-name {
    font-weight: bold;
}

.timestamp {
    color: #888;
}
</style>
