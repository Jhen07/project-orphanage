import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/models/medicine.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MedicineService } from 'src/app/services/medicine/medicine.service';
import { medicines } from 'src/app/Datas/medicines.data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medicine-inventory',
  templateUrl: './medicine-inventory.component.html',
  styleUrls: ['./medicine-inventory.component.scss']
})
export class MedicineInventoryComponent implements OnInit {
  userId = +localStorage.getItem('user_id');
  medicineList: Medicine[] = [];
  medName = '';
  quantity = 1;
  dateExpire: any;
  alerts: Array<any> = [];
  closeResult: string;
  medicines = medicines;
  selectedType = 0;
  restock = 1;
  med: any;
  medToUpdate: any;

  constructor(
    private modalService: NgbModal,
    private medicineService: MedicineService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.medName = medicines[0].list[0].name;
    this.getAllMedicines();
  }

  closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close() {
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  async getAllMedicines() {
    this.medicineService.getAllMedicine().subscribe((list: Medicine[]) => {
      this.medicineList = list;
      console.log('====================================');
      console.log(list);
      console.log('====================================');
    });
  }

  addMedicine() {

    if (this.medName.trim() == '') {
      return this.addAlert('Please enter medicine name!');
    }

    if (this.quantity < 1 || this.quantity == null) {
      return this.addAlert('Please enter valid quantity!');
    }


    // if (this.dateExpire) {
    //   const newDate = `${this.dateExpire.year}-${this.dateExpire.month}-${this.dateExpire.day}`;
    //   this.dateExpire = newDate;
    // } else {
    //   return this.addAlert('Please enter valid Expiration Date!');
    // }


    const newMed: Medicine = {
      created_by: this.userId,
      updated_by: this.userId,
      expiration_date: this.dateExpire,
      medicine_name: this.medName,
      qty: this.quantity,
      type_of_medicine_description: this.medicines[this.selectedType].category,
      type_of_medicine_id: this.medicines[this.selectedType].id,
    };

    this.medicineService.addMedicine(newMed).subscribe(med => {
      console.log(med);
      this.getAllMedicines();
    });

    this.clearModalFields();
    this.close();

  }

  addAlert(message) {
    const alert = {
      id: Math.random().toFixed(2),
      type: 'danger',
      message
    };
    this.alerts.push(alert);
    setTimeout(() => {
      this.alerts = this.alerts.filter(filter => filter.id != alert.id);
    }, 3000);
  }

  clearModalFields() {
    this.medName = medicines[0].list[0].name;
    this.dateExpire = '';
    this.quantity = 1;
  }

  openRestock(content, med) {
    this.med = med;
    this.open(content);
  }

  restockMedicine() {
    this.med.qty += this.restock;
    this.updateMedicine(this.med);
  }

  setUpdateMed(content, med: Medicine) {
    this.medToUpdate = med;
    this.selectedType = medicines.findIndex(obj => obj.id == med.type_of_medicine_id);
    this.open(content);
  }

  updateMedicine(med) {
    this.medicineService.updateMed(med).subscribe(res => {
      this.close();
      this.restock = 1;
      this.toastr.success('Item restocked!');
    }, (err) => this.toastr.error(err.message));
  }

}
