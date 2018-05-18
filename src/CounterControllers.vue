<template>
    <div>
        <p>Counter Controllers</p>
        <button @click.prevent="incrementCounter">Increment</button>
        <button @click.prevent="decrementCounter">Decrement</button>
    </div>
</template>


<script>
    export default {
        methods: {
            incrementCounter() {
                this.$store.state.counter++;
            },
            decrementCounter() {
                this.$store.state.counter--;
            }
        }
    }
</script>