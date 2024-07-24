<template>
    <div class="relative">
        <div v-if="loading" class="absolute inset-0 flex justify-center items-center">
            <div class="loader"></div>
        </div>
        <iframe width="900px" height="1000" frameborder="0" :src="src" @load="loading = false"></iframe>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            loading: true
        };
    }
}
</script>

<style scoped>
.loader {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

