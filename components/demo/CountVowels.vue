<template>
    <div class="stipple-core stipple-blue">
        <q-input v-model="message" />
        <br>
        <p> The message is: {{ message }}</p>
        <p> The message has {{ vowels }} vowels.</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            message: ''
        }
    },
    computed: {
        vowels() {
            const vowels = ['a', 'e', 'i', 'o', 'u'];
            let count = 0;

            for (let i = 0; i < this.message.length; i++) {
                if (vowels.includes(this.message[i].toLowerCase())) {
                    count++;
                }
            }
            return count;
        }
    }
}
</script>
