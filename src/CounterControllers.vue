<template>
    <div>
        <p>Counter Controllers</p>
        <button @click.prevent="incrementCounter({step: 10})">Increment</button>
        <button @click.prevent="decrementCounter({step: 5})">Decrement</button>
    </div>
</template>


<script>
    export default {
        methods: {
            incrementCounter(payload) {
                this.$store.dispatch('incrementCounter', payload);
            },
            decrementCounter(payload) {
                this.$store.dispatch('decrementCounter', payload);
            }
        }
    }
</script>