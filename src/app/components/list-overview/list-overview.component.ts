import {Component, Input} from '@angular/core';
import {List} from '../../models/list.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent {

  @Input()
  list: List;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  goToList() {
    return this.router.navigate(['list', this.list.id], {relativeTo: this.activatedRoute.parent});
  }
}
