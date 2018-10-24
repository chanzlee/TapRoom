import { Component} from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent {
  name: string;

  kegOne = new Keg("Kenneth Dream", "kennyG", 4, 3);
  kegTwo = new Keg("Kenneth Hope", "kennyG", 7, 8);
  kegThree = new Keg("Kenneth Korean Dream", "kennyG", 10, 15);

  kegFour = new Keg("AJ Horse Milk", "Jaenbai co.", 1, 99);
  kegFive= new Keg("Mel Sakura Bomb", "Gibson", 99, 1);
  kegSix = new Keg("Julius Asiana Hijack", "BADE", 99, 6);
  
  kegs: Keg[] = [this.kegOne, this.kegTwo, this.kegThree, this.kegFour, this.kegFive, this.kegSix]

  selectedKeg = null;
  newKeg = null;
  editingKeg = null;

  sellPint(clickedKeg){
    clickedKeg.kegVol += clickedKeg.kegVol > 10 ? -1 : 0;
  }

  sellGrowler(clickedKeg){
    clickedKeg.kegVol += clickedKeg.kegVol > 10 ? -2 : 0;
  }

  sellLargeGrowler(clickedKeg){
    clickedKeg.kegVol += clickedKeg.kegVol > 10 ? -4 : 0;
  }

  addNew(){
    let addedKeg = new Keg();
    this.newKeg = addedKeg;
    
  }

  doneAdd(){
    this.kegs.push(this.newKeg);
    this.newKeg = null;
  }

  editKeg(currentKeg) {
    this.editingKeg = currentKeg;
  }

  doneEdit() {
    this.editingKeg = null;
  }

  deleteKeg(currentKeg) {
    let currentIndex: number;
    this.kegs.forEach(function(keg, index){
      if (keg.name === currentKeg.name) {
        currentIndex = index;
      }
    });
    this.kegs.splice(currentIndex,1);
  }

  pintColor(currentKeg){
    if(currentKeg.price >= 10){
      return "price-high";
    }else if(currentKeg.price >= 5){
      return "price-medium";
    }
    else{
      return "price-low";
    }
  }

  kegVolColor(currentKeg) {
    if (currentKeg.kegVol < 10) {
      return true;
    } else {
      return false;
    }
  }

  alcConColor(currentKeg) {
    if (currentKeg.alcohol >= 10) {
      return "alcohol-high"
    } else if (currentKeg.alcohol >=5 ) {
      return "alcohol-medium";
    } else {
      return "alcohol-low"
    }
  }


}


