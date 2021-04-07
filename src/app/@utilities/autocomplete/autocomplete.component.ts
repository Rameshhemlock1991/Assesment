import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  @Input() inputSuggestionObj: any[];
  @Input() formName: string;
  @Input() formControlId: string;
  @Input() autoCompleteFG: FormGroup;
  @Input() config: any;

  suggestionObj: any[];


  ngOnInit(): void {
    this.autoCompleteFG =  new FormGroup({
      formValue :  new FormControl('')
    });
  }

  filterSuggestionObj(event): void{
    const query = event.query;
    this.suggestionObj = [];
    this.suggestionObj = this.buildAutocompleteObj(query, this.inputSuggestionObj);
  }

  buildAutocompleteObj(query, suggestions: any[]): any[] {
    const filtered: any[] = [];
    if (suggestions){
      for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];
        if (suggestion.title !== undefined && Number.isInteger(suggestion.title)){
          filtered.push(suggestion);
        }
        else
        if (!Number.isInteger(suggestion.title) && suggestion.title.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            filtered.push(suggestion);
        }
      }
    }

    return filtered;
  }

  onSelectSuggestionObj($event): void{
    if (this.config.onSuggestionSelect) {
      this.config.scope[this.formControlId + 'SelVal'] = $event.title;
      this.config.onSuggestionSelect($event, this.config.scope, this.formControlId);
    }
  }

  ngOnChanges($event): void{
    if (this.autoCompleteFG && $event.formName) {
      this.autoCompleteFG.setValue({formValue : { value : $event.formName.currentValue}});
    }
  }

}
