import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../model/card.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../../services/card-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SnackbarCommonsService} from "../../services/snackbar-commons.service";

@Component({
  selector: 'app-crud-card-form',
  templateUrl: './crud-card-form.component.html',
  styleUrls: ['./crud-card-form.component.css']
})
export class CrudCardFormComponent implements OnInit {

  isEdit: boolean;
  card: Card;
  form: FormGroup;
  error: any;
  isLoaded: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() afterSave: EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cardService: CardService,
              private snackbar: SnackbarCommonsService ) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
      title: new FormControl(this.isEdit ? this.card.title : '', [Validators.required]),
      description: new FormControl(this.isEdit ? this.card.description : '', [Validators.required]),
      imageUrl: new FormControl(this.isEdit ? this.card.imageUrl : '', [Validators.required]),
      attackDamage: new FormControl(this.isEdit ? this.card.attackDamage : '', [Validators.required]),
      healthPoints: new FormControl(this.isEdit ? this.card.healthPoints : '', [Validators.required]),
    });
  }

  onSubmit() {
    this.error = undefined;
    let formValue = this.form.getRawValue();

    if (this.isEdit) {
      this.cardService.update(this.card.id, formValue).subscribe({ next: res => {
        this.snackbar.displayMessage("Updated successfully");
        this.afterSave.emit();
        this.router.navigate(['cards']);
      }, error: (err: any) => {
        this.error = err;
        return;
      },
      complete: () => {}})
    } else {
      this.cardService.save(formValue).subscribe({ next: res => {
        this.snackbar.displayMessage("Created successfully");
        this.afterSave.emit();
        this.router.navigate(['cards']);
      },error: (err: any) => {
        this.error = err;
        return;
      }})
    }
  }

}
