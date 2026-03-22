<script setup>
import TodoListInput from './TodoListInput.vue'
import TodoListItem from './TodoListItem.vue'

import { useTodoListStore } from '@/stores/TodoList'
const todoListStore = useTodoListStore()
</script>

<template>
    <div class="todo-list">
        <h2>Todo List</h2>
        <p>Below are the new activities and places we wish to explore</p>
        <TodoListInput />
        <div v-for="(item, index) in todoListStore.items" :key="item">
            <TodoListItem :name="item.name" :index="index"/>
        </div>
    </div>
</template>


<style scoped>
.todo-list {
    border: 3px solid #D9D9D9;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 16px;
    background-color: #F2F2F7;
    box-shadow: 0 4px 0px rgba(0, 0, 0, 0.25); /* Adds a subtle drop shadow */
}           
</style>