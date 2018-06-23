export class CompanyData {
    public company_id: number;
    public name: string;
    public estimate: number;
    public parent_id: number;
    

    constructor(res) {
        this.company_id = res.company_id;
        this.name = res.name;
        this.estimate = res.estimate;
        this.parent_id = res.parent_id;
       
    }
}