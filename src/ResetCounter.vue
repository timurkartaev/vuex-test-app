<template>
    <div>
        <button @click.prevent="resetCounter">Reset Counter</button>
    </div>
</template>


<script>
    export default {
        methods: {
            resetCounter() {
                this.$store.dispatch('resetCounter');
            }
        }
    }
</script>