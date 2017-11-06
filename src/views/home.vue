<template>
    <div>
        <ol>
            <li v-for="item in home">
                {{ item.text }}
            </li>
        </ol>
        <button @click="clickHander">事件</button>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
       home: [
          { text: 'item 1' },
          { text: 'item 2' },
          { text: 'item 3' }
        ]
    };
  },
  methods: {
    clickHander(){
      console.log('shan-er');
    }
  }
};
</script>