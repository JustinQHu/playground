<script setup>

import { useSpinListStore } from '@/stores/SpinList'
import { useTodoListStore } from '@/stores/TodoList'

const spinListStore = useSpinListStore()
const todoListStore = useTodoListStore()

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  index :{
    type: Number,
    required: true, 
  }
})

// Add item to the Spin List 
const handleAdd = () => {
  spinListStore.addItem(props.name)
}

// Delete item from the Todo List
const handleDelete = () => {
  todoListStore.deleteItem(props.index)
}

</script>

<template>
    <div class="box">
        <h3>{{ name }}</h3>
        <div class="actions"> 
          <button @click="handleAdd" class="button-text"> + </button>
          <button @click="handleDelete" class="button-text"> x </button>
        </div>
    </div>
</template>

<style scoped>

.box {
  border: 3px solid #D9D9D9;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 16px;
  background-color: #F2F2F7;
  box-shadow: 0 4px 0px rgba(0, 0, 0, 0.25); /* Adds a subtle drop shadow */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.actions {
  display: flex;
  gap: 2rem;
}

.button-text {
  font-weight: bold;
  font-size: 2rem;
  color: #007BFF; /* A bright blue color for the "+" symbol */
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

</style>    