import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {itemsReducer} from './items.reducer';
import {EffectsModule} from '@ngrx/effects';
import ItemsEffects from './items.effects';
import {HttpClientModule} from '@angular/common/http';
import {SnackBarServiceModule} from '../../services/snack-bar/snack-bar.service.module';
import {ListService} from '../../services/list.service';
import {ItemService} from '../../services/item.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SnackBarServiceModule,
    StoreModule.forFeature('items', itemsReducer),
    EffectsModule.forFeature([ItemsEffects])
  ],
  providers: [
    ItemService,
    ItemsEffects
  ]
})
export class ItemsModule {
}
