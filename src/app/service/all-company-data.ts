export class AllCompanyData {
    public id: number;
    public name: string;
    public estimate: number;
    public estimate_cildren: number;
    public parent_id: number;
    public children;
    

    constructor(res) {
        this.id = parseInt(res.company_id);
        this.name = res.name;
        this.estimate = parseInt(res.estimate);
        if(res.estimate_cildren) this.estimate_cildren = parseInt(res.estimate_cildren);
        this.parent_id = parseInt(res.parent_id);
        if(res.children){
            let k = 0;
            let temp_children = [];
            for(let i in  res.children){
                temp_children[k] =  res.children[i]; 
                k++;
            }
            this.children = temp_children;
        } 
    }
}