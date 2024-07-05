import { Observable } from "rxjs";
import { User } from "../models/my-test-data-model";

export interface MyTestDataServiceInterface {
  getData: () => Observable<User[]>;
}
