<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/TodoList'

const todoListStore = useTodoListStore()
const newItem = ref('')

const handleAdd = () => {
    const trimmedItem = newItem.value.trim()
    if (trimmedItem !== '') {
        // Check for duplicates before adding
        if (todoListStore.items.some(item => item.name === trimmedItem) ) {
            alert('This activity already exists in the list!')
            return
        }   

        // Add new item to the Todo List
        todoListStore.addItem(trimmedItem)
        newItem.value = ''  //clear input after adding
    }
}

</script>


<template>
    <div class="input-container">
        <input v-model="newItem" placeholder="Enter New Activity..." class="todo-input" />
        <button class="add-button" @click="handleAdd">Add</button>     
    </div>
</template> 


<style scoped>

.input-container {
    border: 3px solid #D9D9D9;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 16px;
    background-color: #F2F2F7;
    box-shadow: 0 4px 0px rgba(0, 0, 0, 0.25); /* Adds a subtle drop shadow */
    display: flex;
    align-items: center;
}
.todo-input {
  flex: 1;
  padding: 0.5rem;
  border: 2px solid #D9D9D9;
  border-radius: 8px;
  font-size: 1rem;
}   

.add-button {
    font-weight: bold;
    font-size: 1rem;
    color: #007BFF; 
    padding: 0.5rem 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
}
</style>