<template>
  <!-- <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List App</h2>
            <input-todo />
        </div>
        <list></list>
    </div>   -->
    <div>
        <child1></child1>
        <child2></child2>
    </div>
</template>

<script>

// import InputTodo from './inputtodo';
// import list from './list';

import child1 from './child1';
import child2 from './child2';
export default {
    name : 'todo-list',
    components : { child1,child2 }
}
</script>

<style>
 /* * {  box-sizing: border-box;  }
    .header {
        background-color: purple; padding: 30px 30px;
        color: yellow; text-align: center;
    }
    .header:after {
        content: ""; display: table; clear: both;
    } */
</style>
