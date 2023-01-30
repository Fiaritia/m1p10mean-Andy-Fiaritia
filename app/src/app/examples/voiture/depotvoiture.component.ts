import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cardeposit',
  templateUrl: './depotvoiture.component.html',
  styleUrls: ['./depotvoiture.component.scss'],
})
export class DepotvoitureComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  password1;
  password2;
  name;
  firstname;
  email;
  selectedImage;
  files;
  defaultdate;

  selectedFiles: any[] = [];

  model: NgbDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) {
    this.model = this.today;
  }

  ngOnInit(): void {}

  onDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    this.handleFiles(files);
  }

  handleFiles(files) {
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFiles.push({
          name: file.name,
          src: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onFileChange(event) {
    const files = event.target.files;
    if (!files) {
      return;
    }

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFiles.push({
          name: file.name,
          src: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(file) {
    const index = this.selectedFiles.indexOf(file);
    this.selectedFiles.splice(index, 1);
  }
}
