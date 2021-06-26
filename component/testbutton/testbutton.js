Component({

  properties:{
    content:{
      type: String,
      value: 'test'
    }
    
  },
  methods: {
    onClick: function() {
      console.log('test button onclick')
      var myEventDetail = {
        toastContent: 'This is a test-button'
      }
      var myEventOption = {}
      this.triggerEvent('onClick', myEventDetail, myEventOption)
    }
  }

})