<template>
    <div>
        <app-counter></app-counter>
        <br />
        <app-counter-controllers></app-counter-controllers>
        <br />
        <app-async-counter-controllers></app-async-counter-controllers>
        <br />
        <app-reset-counter></app-reset-counter>
    </div>
</template>

<script>
    import Counter from './Counter.vue';
    import ResetCounter from './ResetCounter.vue';
    import CounterControllers from './CounterControllers.vue';
    import AsyncCounterControllers from './AsyncCounterControllers';

    export default {
        components: {
            appCounter: Counter,
            appResetCounter: ResetCounter,
            appCounterControllers: CounterControllers,
            appAsyncCounterControllers: AsyncCounterControllers

        }
    }
</script>