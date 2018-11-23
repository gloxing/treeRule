
/**
 *  
 */  
Vue.component('tar-label-grp', {
	  template: '#tarLabelGrp',
      mixins: [mixin_basic],
	  created:function(){
		 
	  },
	  beforeMount:function(){
		console.log("tarLabelGrp");
	  },
	  beforeUpdate:function(e){
		  
	  },
	  beforeDestroy:function(e){},
	  data:function(){
	      return {
	      	  widgetName: 'tarLabelGrp',
	            radioValue:'8000',
	      }
	  },
	  props: {
		  grp :{
				type: Object,
				default:function(){
					return {
		            	root:'',
		            	subs:[],
		            }
				}
			},
	  },
	  methods:{

      	addSingleCondition:function(){
      		this.grp.subs.push({
      			type:'tar-label-condition',
      		}) 
      	},
      	addGrpCondition:function(){
      		this.grp.subs.push({
      			type:'tar-label-grp',
      		}) 
      	},
	  },
	  computed: {}
})
	
