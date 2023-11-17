<template>
    <div class="flex flex-col items-center justify-center p-6">
        <h1 class="text-3xl font-bold mb-4">Ask a question</h1>
        <div class="mb-4 w-full max-w-xl">
            <input type="text" v-model="question" placeholder="Enter your question"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button @click="askQuestion"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            :disabled="isLoading">
            <span v-if="isLoading" class="mr-2">Thinking...</span>
            <span v-if="!isLoading">Submit </span>
        </button>
        <div v-if="answer" class="mt-6 p-4 border rounded">
            <h2 class="text-xl font-semibold">Answer</h2>
            <ContentRendererMarkdown :value="markdown_answer" />
            <div v-if="answer" class="mt-6 flex justify-center items-center">
                <span class="mr-2">Was this helpful?</span>
                <button @click="sendFeedback(1)" class="mr-4">👍</button>
                <button @click="sendFeedback(0)">👎</button>
            </div>
            <div v-if="feedbackSent" class="mt-6 text-center text-green-500">
                Thanks for your feedback!
            </div>
        </div>
        <div v-if="answer" class="mt-6 p-4 border rounded">
            <h4 class="text-xl font-semibold">Context</h4>
            <div v-for="c in context" class="mt-2">
                {{ c }}
            </div>
        </div>
        <div v-if="error" class="mt-6 p-4 border rounded bg-red-100">
            <h2 class="text-xl font-semibold">Error</h2>
            <p class="text-red-600">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import markdownParser from '@nuxt/content/transformers/markdown'

let markdown_answer = await markdownParser.parse("", "**hello there**");
let context = "";
let id = ""
const feedbackSent = ref(false);

const question = ref('');
const answer = ref(null);
const error = ref(null);
const isLoading = ref(false);

const askQuestion = async () => {
    if (question.value.trim() === '') {
        error.value = 'Please enter a question.';
        return;
    }

    isLoading.value = true;
    feedbackSent.value = false;
    console.log("Asking question:", question.value);
    try {
        const response = await $fetch('https://apps.peregimenez.com/docsbot/api/question', {
            method: 'POST',
            body: {
                query: question.value
            }
        });

        console.log("Response received:", response);
        answer.value = response.answer;
        markdown_answer = await markdownParser.parse("", response.answer);
        context = response.context;
        id = response.doc_id;
        error.value = null;
        console.log("Answer set:", answer.value);
    } catch (e) {
        console.error("Error occurred:", e);
        error.value = e.data?.message || e.message;
        answer.value = null;
        console.log("Error set:", error.value);
    } finally {
        isLoading.value = false;
    }
};
const sendFeedback = async (feedback) => {
    try {
        await $fetch(`https://apps.peregimenez.com/docsbot/api/feedback/${id}/${feedback}`, {
            method: 'GET'
        });
        console.log(`Feedback sent: ${feedback}`);
        feedbackSent.value = true;
    } catch (e) {
        console.error("Error sending feedback:", e);
    }
};
</script>
