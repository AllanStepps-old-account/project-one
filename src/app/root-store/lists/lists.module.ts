import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {listsReducer} from './lists.reducer';
import {EffectsModule} from '@ngrx/effects';
import ListsEffects from './lists.effects';
import {HttpClientModule} from '@angular/common/http';
import {SnackBarServiceModule} from '../../services/snack-bar/snack-bar.service.module';
import {ListService} from '../../services/list.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SnackBarServiceModule,
    StoreModule.forFeature('lists', listsReducer),
    EffectsModule.forFeature([ListsEffects])
  ],
  providers: [
    ListService,
    ListsEffects
  ]
})
export class ListsModule {
}
