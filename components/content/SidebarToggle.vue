<template>
    <div class="flex space-x-2">
        <button @click="toggleSidebar" class="text-sm bg-blue-200 px-2 py-1 rounded hover:bg-blue-300 focus:outline-none">{{
            toggleIndicator }}</button>
        <button @click="openInNewTab"
            class="ml-4 text-sm bg-blue-200 px-2 py-1 rounded hover:bg-blue-300 focus:outline-none">Open in New Tab</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSidebarVisible: true
        }
    },
    computed: {
        toggleIndicator() {
            return this.isSidebarVisible ? '<< Navigation' : '>>';
        }
    },
    methods: {
        toggleSidebar() {
            const sidebar = document.querySelector('.aside-nav');
            if (sidebar) {
                this.isSidebarVisible = sidebar.style.display !== 'none';
                sidebar.style.display = this.isSidebarVisible ? 'none' : 'block';
            }
        },
        openInNewTab() {
            window.open('http://86.221.36.34.bc.googleusercontent.com/gallery', '_blank');
        }
    }
}
</script>
