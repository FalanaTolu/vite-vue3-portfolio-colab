<template>
    <div class="flex-shrink-0 bg-[#5a60ea] text-center text-[#fffffe] p-2">
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
