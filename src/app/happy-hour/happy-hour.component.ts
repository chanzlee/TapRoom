// import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { KegComponent } from '../keg/keg.component';

// @Component({
//   selector: 'app-happy',
//   templateUrl: './happy-hour.component.html',
//   styleUrls: ['./happy-hour.component.css']
// })
// export class HappyHourComponent {
//   @Input('is-happy') isHappy: boolean;
//   @Output('change') change = new EventEmitter();
//   likeCount = 0;

//   onClick() {
//     let kegArray = KegComponent.prototype.kegs;
//     kegArray.forEach(function(keg){
//       keg.price *= 0.5;
//     });
//     this.isHappy?  this.likeCount++;
//     this.isHappy = !this.isHappy;
//     this.change.emit(this.isHappy);
//   }
// }
