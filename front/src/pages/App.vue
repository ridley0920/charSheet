<template lang="pug">
	main-layout
		div test
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  import charStore from '../stores/charStore.vue'


  export default {
    components: {
      MainLayout
    },
    //props: ['store'],
	data () {
    	return {
      		//data: store.data
      		//store: app.store
      	}
    },
    /*methods: {
    	advance() {
	    	store.x += 1;
	    	//MainLayout.data = this.store;
	    }
	}*/
  }
</script>