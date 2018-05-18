<template>
    <div>
        <app-counter></app-counter>
        <app-counter-controllers></app-counter-controllers>
    </div>
</template>

<script>
    import Counter from './Counter.vue';
    import CounterControllers from './CounterControllers.vue';

    export default {
        components: {
            appCounter: Counter,
            appCounterControllers: CounterControllers
        }
    }
</script>