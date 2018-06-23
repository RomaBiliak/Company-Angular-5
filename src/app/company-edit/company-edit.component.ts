import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";//для обробки форми
import { CompanyData } from "../service/company-data"
import { CompanyService} from "../service/company.service"
import { PageData } from "../service/page-data"

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  companyData: CompanyData;
  errorMessage: String;
  companyForm: FormGroup;
  pageData: PageData;

  constructor(private service: CompanyService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getPageData();
    this.getCompany();
  }

  private getCompany() {
    this.activatedRoute.params.forEach((params: Params) => {
      let company_id = params["company_id"];
      if (company_id) {
          this.service.getCompany(company_id).subscribe(
            company => {
                  this.companyData = company;
                  this.companyForm.patchValue(this.companyData);
              },
              error => this.errorMessage = error
          );
      }
      else {
        this.companyData= new CompanyData({'company_id':null, 'name':null, 'estimate':null, 'parent_id':null});
        this.companyForm.patchValue(this.companyData);
      }
    });

  }
  
  private getPageData() {

    this.activatedRoute.params.forEach((params: Params) => {
      let company_id = params["company_id"];
      if (!company_id) { 
        company_id=0;
      }
      this.service.getPageData(company_id).subscribe(
        pageData => {
              this.pageData = pageData;
          },
          error => this.errorMessage = error
      );
    });

   
}

  public onSubmit(companyForm: FormGroup) {
    this.companyData.name = companyForm.value.name;
    this.companyData.estimate = companyForm.value.estimate;
    this.companyData.parent_id = companyForm.value.parent_id;



    if (this.companyData.company_id) {
        this.service.updateCompany(this.companyData)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    } else {
        this.service.addCompany(this.companyData)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    }
  }
  public goBack() {
    this.router.navigate(["../../"], {relativeTo: this.activatedRoute});
  }
  public checkError(element: string, errorType: string) {
    return this.companyForm.get(element).hasError(errorType) &&
        this.companyForm.get(element).touched
  }
  private buildForm() {
    this.companyForm = this.fb.group({
        name: ["", Validators.required],
        estimate: ["", Validators.required],
        parent_id: [""],
        company_id: [""],
    });
}
}
