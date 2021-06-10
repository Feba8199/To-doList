const app = Vue.createApp({
  data() {
    return { 
      newTodo:'',
      idForTodo:3,
      todos: []
    }
  },
  methods: {
    addTodo() {
      if(this.newTodo.trim().length == 0) {
        return
      }
     this.todos.push({
       id: this.idForTodo,
       title: this.newTodo,
       completed:false,
     })
     this.newTodo = ''
     this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
})
app.mount('#user-todos');
