<template>
    <div class="flex-shrink-0">
        <p>&copy; {{ currentYear }} Falana Tolulope</p>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
})
</script>
  
<style>
footer {
    background-color: #f9f9f9;
    padding: 10px;
    text-align: center;
}
</style>