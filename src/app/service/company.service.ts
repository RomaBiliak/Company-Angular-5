import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { AppService } from "../shared/app.service";
import { CompanyData } from "./company-data";
import { AllCompanyData } from "./all-company-data";
import { PageData } from "./page-data";
import { Observable } from "rxjs/Observable";
import { Settings } from "../shared/settings";


@Injectable()
export class CompanyService{

    private url = Settings.API_URL;
    private responseCompany;
    constructor(private http: Http, private appService: AppService) { }

    
    public getAllCompany(): Observable<CompanyData> {
        let company = this.http.get(this.url, this.appService.getOptions())
            .map(this.extractAllCompanyData)
            .catch(this.handleError);
        return company;
    }

    private extractAllCompanyData(response: Response) {
        this.responseCompany = response.json();
        let i=this.responseCompany.length-1
        for(i; i>0; i--){
          let k=0;
           for(let j in this.responseCompany[i]){
               let estimate_cildren = this.responseCompany[i][j]['estimate_cildren'] ? this.responseCompany[i][j]['estimate_cildren'] : this.responseCompany[i][j]['estimate'];
                if(!this.responseCompany[i-1][this.responseCompany[i][j]['parent_id']]['children']){
                    this.responseCompany[i-1][this.responseCompany[i][j]['parent_id']]['children']=[new AllCompanyData(this.responseCompany[i][j])];
                }
                else{
                     this.responseCompany[i-1][this.responseCompany[i][j]['parent_id']]['children'][k] = new AllCompanyData(this.responseCompany[i][j]);
                }
                if(!this.responseCompany[i-1][this.responseCompany[i][j]['parent_id']]['estimate_cildren'])
                    this.responseCompany[i-1][this.responseCompany[i][j]['parent_id']]['estimate_cildren'] = parseInt(this.responseCompany[i-1][this.responseCompany[i][j]['parent_id']]['estimate']) +parseInt(estimate_cildren);
                else
                    this.responseCompany[i-1][this.responseCompany[i][j]['parent_id']]['estimate_cildren'] += parseInt(estimate_cildren);    
                k++;
            }
        }
        var company = [];
        let k=0;
        for(let j in this.responseCompany[0]){ 
            company[k] = new AllCompanyData(this.responseCompany[0][j]);
            k++;
        }
        return   company;
    }
    
    public getCompany(company_id: string): Observable<CompanyData> {
        let company = this.http.get(this.url+'/'+company_id, this.appService.getOptions())
            .map(this.extractCompanyData)
            .catch(this.handleError);
        return company;
    }

    private extractCompanyData(response: Response) {
        return new CompanyData(response.json());
    }

    public getPageData(company_id){
        let data = this.http.get(this.url+'company-data/'+company_id, this.appService.getOptions())
        .map(this.extractData)
        .catch(this.handleError);
        return data;
    }
    private extractData(response: Response){
        return new PageData(response.json());
    }
    public updateCompany(company: CompanyData){
        return this.http.put(this.url+company.company_id, "data="+JSON.stringify(company), this.appService.getOptions())
       .catch(this.handleError);
    }
    public addCompany(company: CompanyData){
        return this.http.post(this.url, "data="+JSON.stringify(company), this.appService.getOptions())
       .catch(this.handleError);
    }
    public deleteCompany(company_id :number){
        return this.http.delete(this.url+company_id, this.appService.getOptions())
        .catch(this.handleError);    
    }
    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `code: ${error.status}  \n message: ${error.statusText || ''} \n ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable.throw(message);
    }

}