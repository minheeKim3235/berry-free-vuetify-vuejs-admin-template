<script setup>
import { ChevronsRightIcon, ChevronRightIcon, ChevronLeftIcon, ChevronsLeftIcon } from 'vue-tabler-icons';
defineProps({ items: Object });
</script>
<template>
    <div>
        <span>{{ items.originTitle }}</span>
        <div class="multi-wrap">
            <select multiple name="" id="">
                <option value="" v-for="(item, i) in items.groups" :key="i">
                    {{ item.name }}
                </option>
            </select>
        </div>
    </div>
    <div>
        <v-btn icon><ChevronsRightIcon /></v-btn>
        <v-btn icon><ChevronRightIcon /></v-btn>
        <v-btn icon><ChevronLeftIcon /></v-btn>
        <v-btn icon><ChevronsLeftIcon /></v-btn>
    </div>
    <div>
        <span>{{ items.copyedTitle }}</span>
        <div class="multi-wrap">
            <select multiple name="" id="">
                <option value="" v-for="(item, i) in items.groups" :key="i">
                    {{ item.name }}
                </option>
            </select>
        </div>
    </div>
</template>