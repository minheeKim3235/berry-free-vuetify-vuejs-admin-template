<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TreeMenu from "./TreeMenu.vue";
import { tree } from "./tree"
import { ChevronDownIcon } from 'vue-tabler-icons'

const menuList = ref([
    { name: 'menu1',
        children: [
            { name: 'menu1-1'},
            { name: 'menu1-2'},
            { name: 'menu1-3'},
            { name: 'menu1-4'},
        ]
    },
    { name: 'menu2',
        children: [
            { name: 'menu2-1',
                children: [
                    { name: 'menu2-1-1'},
                    { name: 'menu2-1-2'},
                    { name: 'menu2-1-3'},
                    { name: 'menu2-1-4'},
                ]
            },
            { name: 'menu2-2'},
            { name: 'menu2-3'},
            { name: 'menu2-4'},
        ]
    },
    { name: 'menu3'},
    { name: 'menu4'},
    { name: 'menu5'},
])

onMounted(() => {
    tree();
})
</script>
<template>
    <v-btn class="btnExpandAll">전체 펼침</v-btn>
    <ul class="manage-tree-menu">
        <li v-for="(item, i) in menuList" :key="i">
            <div v-if="item.children">
                <p>
                    <v-checkbox></v-checkbox>
                    {{ item.name }}
                    <button class="btnExpand"><ChevronDownIcon /></button>
                </p>
                <ul class="nested">
                    <TreeMenu :items="item.children" >
                        <template #prepend>
                            <v-checkbox></v-checkbox>
                        </template>
                        <template #append>
                            test
                        </template>
                    </TreeMenu>
                </ul>
            </div>
            <p v-else>
                <v-checkbox></v-checkbox>{{ item.name }}
            </p>
        </li>
    </ul>
</template>