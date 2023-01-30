import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-fichereparation',
  templateUrl: './fichereparation.component.html',
  styleUrls: ['./fichereparation.component.scss']
})
export class FichereparationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  current = ['Stand up', 'Eat'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  alltasks = this.todo.length + this.current.length + this.done.length;
  avancement = Math.ceil(this.done.length * 100 / this.alltasks);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
