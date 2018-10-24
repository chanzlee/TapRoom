import { Component} from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent {
  name: string;

  kegOne = new Keg("Kenneth Dream", "kennyG", 4, 8);
  kegTwo = new Keg("Kenneth Hope", "kennyG", 7, 8);
  kegThree = new Keg("Kenneth Korean Dream", "kennyG", 10, 15);
  
  kegs: Keg[] = [this.kegOne, this.kegTwo, this.kegThree]

  selectedKeg = null;

  sellPint(clickedKeg){
    clickedKeg.kegVol += clickedKeg.kegVol > 10 ? -1 : 0;
  }

  pintColor(currentKeg){
    if(currentKeg.price >= 10){
      return "bg-danger";
    }else if(currentKeg.price >= 5){
      return "bg-info";
    }
    else{
      return "bg-primary";
    }
  }

}


