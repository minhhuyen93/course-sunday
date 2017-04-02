import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {Page} from "./components/page";
import {FormButton} from "./components/formButton";
import {FormButtonPrimary} from "./components/formButtonPrimary";
import {FormInput} from "./components/formInput";
import {HorizalForm} from "./components/horizalForm";
import {FormsModule} from "@angular/forms";
@NgModule({
    declarations:[Page, FormButton, FormButtonPrimary,FormInput,HorizalForm],
    imports:[FormsModule, RouterModule],
    exports:[Page, FormButton, FormButtonPrimary,FormInput,HorizalForm]
})

export class CommonModule{}