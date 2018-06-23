import { RequestOptions,Headers} from "@angular/http";
export class AppService{
    public getOptions() :RequestOptions{
        let haders = new Headers({
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        });

        let options = new RequestOptions({ headers: haders });
        return options;
    }

}