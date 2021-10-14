import { Component, OnInit } from '@angular/core';
import { faCode, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCode = faCode;
  faDatabase = faDatabase;
  faDesktop = faDesktop;

}
