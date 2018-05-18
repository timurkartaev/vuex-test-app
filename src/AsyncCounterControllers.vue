<template>
    <div>
        <p>Async Counter Controllers</p>
        <button @click.prevent="asyncIncrementCounter({step: 10, timeOut: 1500})">Async increment</button>
        <button @click.prevent="asyncDecrementCounter({step: 10, timeOut: 1700})">Async increment</button>
    </div>
</template>


<script>
    export default {
        methods: {
            asyncIncrementCounter(payload) {
                this.$store.dispatch('asyncIncrementCounter', payload);
            },
            asyncDecrementCounter(payload) {
                this.$store.dispatch('asyncDecrementCounter', payload);
            }
        }
    }
</script>