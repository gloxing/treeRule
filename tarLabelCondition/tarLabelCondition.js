
/**
 *  
 */  
Vue.component('tar-label-condition', {
	  template: '#tarLabelCondition',
      mixins: [mixin_basic],
	  created:function(){
	  },
	  beforeMount:function(){
		console.log("tarLabelCondition");
	  },
	  beforeUpdate:function(e){
		 
	  },
	  beforeDestroy:function(e){},
	  data:function(){
	      return {
	      	  widgetName: 'tarLabelCondition',
	            value:'3000',
	            options: [{
	                value: '1000',
	                label: '大于'
	              }, {
	                value: '2000',
	                label: '小于'
	              }, {
	                value: '3000',
	                label: '等于'
	              }, {
	                value: '4000',
	                label: '不等于'
	              }, {
	                value: '5000',
	                label: '大于等于'
	              }, {
	            	  value: '6000',
	            	  label: '小于等于'
	              }, {
	                value: '7000',
	                label: '包含'
	              }],
	      }
	  },
	  props: {
	  },
	  methods:{},
	  computed: {}
})
	
