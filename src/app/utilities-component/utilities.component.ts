import { Component } from '@angular/core';
import { UtilitiesService } from '../services/utilities.service';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities-component.html',
  styleUrls: ['./utilities-component.css']
})

export class UtilitiesComponent {

  constructor(private utilitiesService: UtilitiesService) { }

  

}
