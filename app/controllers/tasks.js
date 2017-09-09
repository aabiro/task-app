import Ember from 'ember';

export default Ember.Controller.extend({
  // actions: {
  //
  //   deleteTask: fuction(id){
  //     this.store.findRecord('task', id).then(function(task){
  //       task.deleteRecord();
  //       task.save();
  //     });
  //   }
  // }
 // actions: {
 //  deleteTask(this.store.findRecord('task', id)){
 //    task.deleteRecord();
 //    console.log(task.id);
 //    task.save();
 //    }
 //  }
});

// this.get('task').then(function(task) {
//            task.destroyRecord();
//        });
//
// }



//   deleteRecord: function() {
//         this.get('task').destroyRecord();
//         // .destroyRecord() only exists in recent versions of ED
//         // for previous versions use .deleteRecord() followed by .save()
//         // (though you should really consider upgrading :))
//     }
// }
