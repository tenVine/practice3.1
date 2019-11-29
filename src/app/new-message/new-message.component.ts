import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  @Input() titleChange: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.titleChange);
  }

}
