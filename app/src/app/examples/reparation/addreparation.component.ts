import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-addreparation',
    templateUrl: './addreparation.component.html',
    styleUrls: ['./addreparation.component.scss']
})
export class AddreparationComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    password1;
    password2;
    name;
    firstname;
    email;
    selectedImage;
    
    multiple = false;
    selectedFiles: any[] = [];
  
    constructor() {}
  
    ngOnInit(): void {}
  
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
            src: e.target.result
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
