import { Component, OnInit } from '@angular/core';
import { CompanyService } from "../service/company.service";
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  ngOnInit() {
    this.getCompany();
  }
  company: any;
constructor(private service: CompanyService) {
    
}

  private  getCompany(){
    this.service.getAllCompany().subscribe(
      company => {
        this.company = company; console.dir(this.company);
        }
    );
  }
  public deleteCompany(company_id :number){
    if(company_id>0){
        this.service.deleteCompany(company_id)
        .subscribe(
          () => this.getCompany()
        );
    }
  }

}
