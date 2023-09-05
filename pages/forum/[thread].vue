<template>
    <Container>
        <div class="pt-8">
            <h1 class="mb-4 text-3xl font-bold text-gray-800 md:text-7xl dark:text-white text-center"> Genie Discord forum
            </h1>
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
                                    <div class="font-medium flex items-center space-x-2"
                                        :style="{ color: message.author.color }">
                                        <img :src="message.author.avatarUrl" alt="Author Avatar"
                                            class="w-10 h-10 rounded-full" />
                                        <span class="ml-2"> {{ message.author.nickname || message.author.name }}</span>
                                    </div>
                                    <span class="text-gray-500 text-sm">{{ new Date(message.timestamp).toLocaleString()
                                    }}</span>
                                </div>
                            </a>
                            <ContentRendererMarkdown :value="message.parsedContent" />
                            <div v-for="attachment in message.attachments">
                                <img :src="attachment.url" :alt="attachment.filename">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script>

import markdownParser from '@nuxt/content/transformers/markdown'
const getThread = (id) => import(`../../static/threads/${id}.json`).then(m => m.default || m)


export default {
    async setup() {
        const route = useRoute()
        const thread = await getThread(route.params.thread)
        return {
            thread,
            parsedMessages: await Promise.all(
                thread.messages.map(async message => {
                    message.parsedContent = await markdownParser.parse(message.id, message.content);
                    return message;
                })
            )
        };
    },
};
</script>

