<script setup lang="ts">
import { ChevronDownIcon } from "vue-tabler-icons";
defineProps({ items: Object });
</script>
<template>
    <div>
        <li v-for="(item, i) in items" :key="i">
            <div v-if="item.children">
                <p>
                    <slot name="prepend"></slot>
                    {{ item.name }}
                    <slot name="append"></slot>
                    <button class="btnExpand"><ChevronDownIcon /></button>
                </p>
                <ul class="nested">
                    <TreeMenu :items="item.children">
                        <template #prepend>
                            <slot name="prepend"></slot>
                        </template>
                        <template #append>
                            <slot name="append"></slot>
                        </template>
                    </TreeMenu>
                </ul>
            </div>
            <p v-else>
                <slot name="prepend"></slot>
                {{ item.name }}
                <slot name="append"></slot>
            </p>
        </li>
    </div>
</template>